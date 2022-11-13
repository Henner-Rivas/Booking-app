import React, { useState } from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import useFetch from "../hooks/useFeach";

type Props = {
  hotelId: number | string | undefined;
  setOpenBooking: (value: React.SetStateAction<boolean>) => void;
};
type roomNumbers = {
  number: number;
  _id: string;
};
export type Data = {
  title: string;
  price: number;
  desc: string;
  maxPeople: number;
  roomNumbers: roomNumbers[];
};
const Reserve = (props: Props) => {
  let { hotelId, setOpenBooking } = props;
  const [selectRoom, setSelectRoom] = useState([]);
  let { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  console.log("🚀 ~ file: Reserve.tsx ~ line 24 ~ Reserve ~ data", data);

  const handleRoomNumber = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="bg-back z-50 min-h-screen">
      <div>
        <MdOutlineExitToApp
          className="absolute top-5 cursor-pointer right-5 text-[40px]"
          onClick={() => setOpenBooking(false)}
        />
      </div>
      <span>Select room</span>
      {data.map((item: Data) => (
        <div>
          <div>
            <div>{item.title}</div>
            <div>{item.desc}</div>
            <div>{item.maxPeople}</div>
            <div>{item.price}</div>
          </div>
          {item.roomNumbers.map((roomNumber) => (
            <div>
              <div className="room">
                <label htmlFor="">{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleRoomNumber}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Reserve;
