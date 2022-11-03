import UserModel from "../models/User";
import { error, success } from "../utils/response";
import { User, RequestCustomUser } from "../interfaces/types";
import jwt from "jsonwebtoken";
import { Response } from "express";
const bcrypt = require("bcrypt");
export const register = async (req: RequestCustomUser, res: Response) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({
      usermane: req.body.username,
      password: hash,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
    });

    await newUser.save();
    success(req, res, 200, newUser);
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};

export const login = async (req: RequestCustomUser, res: Response) => {
  try {
    const findUser = await UserModel.findOne({
      usermane: req.body.username,
    });
    if (!findUser) return error(req, res, 401, "Error user and password");
    const compare = bcrypt.compareSync(req.body.password, findUser.password);
    if (!findUser && !compare) {
      error(req, res, 401, "Error user and password");
    }

    let { password, isAdmin, ...others } = findUser["_doc"];

    const token = jwt.sign(
      { id: findUser._id, isAdmin: findUser.isAdmin },
      process.env.JWT
    );
    res.cookie("token", token, { httpOnly: true });
    success(req, res, 200, { ...others });
  } catch (e) {
    console.log(e);
    error(req, res, 500, (e as Error).message);
  }
};
