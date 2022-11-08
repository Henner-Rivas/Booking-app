import { Request } from "express";
export interface User {
  id?: string;
  username: string;
  password: string;
  email: string;
  isAdmin?: boolean;
}
export interface RequestCustom extends Request {
  user?: User;
  limit?: string | number;
}
export interface RequestCustomUser extends Request {
  body: User;
}
