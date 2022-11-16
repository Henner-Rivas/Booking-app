export interface Hotes {
  _id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos: string[];
  title: string;
  desc: string;
  rating: number;
  rooms: string[];
  cheapestPrice: number;
  featured: boolean;
  __v: number;
}

export interface Room {
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
  unavailableDates: string[] ;
  _id: string;
}