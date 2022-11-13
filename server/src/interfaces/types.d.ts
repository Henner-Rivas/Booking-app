import { Request } from "express";
export interface User {
  id?: string;
  username: string;
  password: string;
  email: string;
  isAdmin?: boolean;
}

export interface Hotels {
    type: string;
    desc: string;
    name: string;
    city: string;
    address: string;
    distance: string;
    photos: string[];
    title: string;
    rating: number;
    rooms: string[];
    cheapestPrice: number;
    featured: boolean;
}
export interface RequestCustom extends Request {
  user?: User;
  limit?: string | number;
}
export interface RequestCustomUser extends Request {
  body: User;
}
