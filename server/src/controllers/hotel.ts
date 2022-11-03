import { error, success } from "../utils/response";
import Hotel from "../models/Hotel";
import { Response } from "express";
import { RequestCustom } from "../interfaces/types";
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
  try {
    const getAll = await Hotel.find();
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
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
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

exports = { createHotel, updateById, getAllHotel, getOneHotel, deleteById };
