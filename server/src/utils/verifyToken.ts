import jwt from "jsonwebtoken";
import { RequestCustom } from "../interfaces/types";
import { Response } from "express";
import { error } from "./response";

export const verifyToken = (req: RequestCustom, res: Response, next) => {
  const token = req.cookies.token;
  if (!token) {
    return error(req, res, 401, "You are not authenticated!");
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return error(req, res, 403, "Token is not valid!");

    req.user = user;
    next();
  });
};

export const verifyuser = (req: RequestCustom, res: Response, next) => {
  verifyToken(req, res, () => {
    if (req.user?.id === req.params.id || req.user?.isAdmin) {
      next();
    } else {
      return error(req, res, 403, "You are not authorized!");
    }
  });
};

export const verifyAdmin = (req: RequestCustom, res: Response, next) => {
  verifyToken(req, res, () => {
    if (req.user?.isAdmin) {
      next();
    } else {
      return error(req, res, 403, "You are not authorized!");
    }
  });
};
