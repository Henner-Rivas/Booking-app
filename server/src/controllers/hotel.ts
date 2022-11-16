import { error, success } from "../utils/response";
import Hotel from "../models/Hotel";
import Room from "../models/Room";

import { Response } from "express";
import { RequestCustom, Hotels } from '../interfaces/types';
export const createHotel = async (req: RequestCustom, res: Response) => {
  const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    return success(req, res, 201, saveHotel);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const getAllHotel = async (req: RequestCustom, res: Response) => {
  const { min, max, ...others } = req.query;
  try {
    const getAll = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: Number(min) | 1, $lt: Number(max) | 99999 },
    }).limit(Number(req.query?.limit));
    success(req, res, 200, getAll);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const getOneHotel = async (req: RequestCustom, res: Response) => {
  try {
    const findOne = await Hotel.findById(req.params.id);

    success(req, res, 200, findOne);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const updateById = async (req: RequestCustom, res: Response) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    success(req, res, 200, updateHotel);
  } catch (e) {
    console.log(e);

    error(req, res, 500, (e as Error).message);
  }
};

export const deleteById = async (req: RequestCustom, res: Response) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id, {});
    success(req, res, 200, "hotel has been deleted");
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const countByCity = async (req: RequestCustom, res: Response) => {
  const cities = req.query.cities?.toString().split(",");

  try {
    const getAll = await Promise.all<any>(
      cities?.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    success(req, res, 200, getAll);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const countByType = async (req: RequestCustom, res: Response) => {
  const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  const resortCount = await Hotel.countDocuments({ type: "resort" });
  const villaCount = await Hotel.countDocuments({ type: "villa" });
  const cabinCount = await Hotel.countDocuments({ type: "cabin" });

  try {
    success(req, res, 200, [
      {
        type: "hotel",
        count: hotelCount,
      },
      {
        type: "apartment",
        count: apartmentCount,
      },
      {
        type: "resort",
        count: resortCount,
      },
      {
        type: "villa",
        count: villaCount,
      },
      {
        type: "cabin",
        count: cabinCount,
      },
    ]);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const getHotelRooms = async (req: RequestCustom, res: Response) => {

  try {
    const hotelsFind =await Hotel.findById<any>(req.params.id)

    const listRooms= await Promise.all<Hotels>(hotelsFind.rooms.map((room)=>{ return Room.findById(room)}
      ) )

    success(req, res, 200, listRooms);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};



