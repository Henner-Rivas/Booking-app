import Room from "../models/room";
import Hotel from "../models/Hotel";
import { Request } from "express";
import { Response } from "express";

import { error, success } from "../utils/response";
export const createRoom = async (req: Request, res: Response, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } });
    success(req, res, 200, saveRoom);
  } catch (e) {
    error(req, res, 500, (e as Error).message);
  }
};

export const getAllRoom = async (req: Request, res: Response) => {
  try {
    const getAll = await Room.find();
    success(req, res, 200, getAll);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const getOneRoom = async (req: Request, res: Response) => {
  try {
    const findOne = await Room.findById(req.params.id);

    success(req, res, 200, findOne);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    success(req, res, 200, updateRoom);
  } catch (e) {
    console.log(e);

    error(req, res, 500, (e as Error).message);
  }
};

export const deleteById = async (req: Request, res: Response) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);

    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    });
    success(req, res, 200, "Room has been deleted");
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const updateRoomAvailability = async (req: Request, res: Response) => {
  try {
   let update= await Room.updateOne({"roomNumbers._id":req.params.id},{
    $push:{
      "roomNumbers.$.unavailableDates":req.body.dates
    }
   })
    success(req, res, 200,"has been updated");
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};
exports = { createRoom, updateById, getAllRoom, getOneRoom, deleteById };
