import { error, success } from "../utils/response";
import User from "../models/User";
import { RequestCustom } from "../interfaces/types";
import { Response } from "express";
const bcrypt = require("bcrypt");

export const createUser = async (req: RequestCustom, res: Response) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
   ...req.body,
    password: hash,
  });
  try {
    const saveUser = await newUser.save();
    return success(req, res, 201, saveUser);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const getAllUser = async (req: RequestCustom, res: Response) => {
  try {
    const getAll = await User.find();
    success(req, res, 200, getAll);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const getOneUser = async (req: RequestCustom, res: Response) => {
  try {
    const findOne = await User.findById(req.params.id);

    success(req, res, 200, findOne);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const updateById = async (req: RequestCustom, res: Response) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    success(req, res, 200, updateUser);
  } catch (e) {
    console.log(e);

    error(req, res, 500, (e as Error).message);
  }
};

export const deleteById = async (req: RequestCustom, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id, {});
    success(req, res, 200, "User has been deleted");
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

exports = { createUser, updateById, getAllUser, getOneUser, deleteById };
