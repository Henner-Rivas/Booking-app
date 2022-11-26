
/* hotels */

  export interface HotelsRowsType {
    _id: string;
    name: string;
    type: string;
    city: string;
    address: string;
    distance: string;
    photos: string[];
    title: string;
    desc: string;
    rating?: number;
    rooms: string[];
    cheapestPrice: number;
    featured: boolean;
    __v: number;
  }
  
  export type ParamsDataHotels = {
    row: userRowsType;
  };
  export type userRowsType = {
    _id: string | number;
    username: string;
    phone: string | number;
    country: string | number;
    img: string;
    status: string;
    email: string;
  };
  export type ParamsDataUser = {
    row: userRowsType;
  };
  
  export interface RoomType {
    _id: string;
    title: string;
    price: number;
    desc: string;
    maxPeople: number;
    roomNumbers: RoomNumber[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface RoomNumber {
    number: number;
    unavailableDates?: null | string;
    _id: string;
  }
  