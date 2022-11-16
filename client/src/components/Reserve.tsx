import { useState } from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import useFetch from "../hooks/useFeach";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import axios from "axios";
import { Room, RoomNumber } from "../interfaces/types";
import { format } from "date-fns";

type Props = {
  hotelId: number | string | undefined;
  setOpenBooking: (value: React.SetStateAction<boolean>) => void;
};
type roomNumbers = {
  number: number;
  _id: string;
  unavailableDates: string[];
};
export type Data = {
  title: string;
  price: number;
  desc: string;
  maxPeople: number;
  roomNumbers: RoomNumber[];
};
const Reserve = (props: Props) => {
  let { hotelId, setOpenBooking } = props;
  const [selectRoom, setSelectRoom] = useState<string[]>([]);
  let { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  console.log("🚀 ~ file: Reserve.tsx ~ line 29 ~ Reserve ~ data", data);
  const {
    state: { dates },
  } = useContext(SearchContext);
  const options: any = { year: "numeric", month: "numeric", day: "numeric" };

  const getDatesInRange = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(date.toLocaleDateString("es-Co", options));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  console.log(
    "🚀 ~ file: Reserve.tsx ~ line 52 ~ Reserve ~ allDates",
    allDates
  );
  const getDatesInRange2 = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(date.getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  const allDates2 = getDatesInRange2(dates[0].startDate, dates[0].endDate);
  console.log(
    "🚀 ~ file: Reserve.tsx ~ line 73 ~ Reserve ~ prueba",
    new Date("2022-11-13T05:00:00.000Z").toLocaleDateString("es-Co", options)
  );

  const isAvailable = (roomNumber: RoomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(
        ` ${new Date(date).toLocaleDateString("es-Co", options)}`
      )
    );
    return !isFound;
  };

  const handleRoomNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectRoom(
      checked
        ? [...selectRoom, value]
        : selectRoom.filter((item) => item !== value)
    );
  };

  const handleReserve = async () => {
    console.log(selectRoom);
    try {
      const res = await Promise.all(
        selectRoom.map((room) =>
          axios.put(`/rooms/availability/${room}`, {
            dates: allDates2,
          })
        )
      );

      return res;
    } catch (error) {}
  };
  return (
    <div className="z-50  w-screen h-screen fixed top-0 left-0 flex items-center justify-center  bg-black bg-opacity-40">
      <div className="relative bg-white max-w-max box-border p-2">
        <MdOutlineExitToApp
          className="absolute top-5 cursor-pointer right-1 text-[30px]"
          onClick={() => setOpenBooking(false)}
        />
        <span className="p-2 text-lg">Select room</span>
        {data.map((item: Data) => (
          <div className=" p-3 flex items-center gap-8 " key={item.desc}>
            <div>
              <div className="font-bold">{item.title}</div>
              <div>{item.desc}</div>
              <div>
                maxPeople:{" "}
                <span className="font-medium">{item.maxPeople} </span>{" "}
              </div>
              <div>
                Price <span className="font-medium"> {item.price}</span>{" "}
              </div>
            </div>
            <div className="flex gap-2">
              {item.roomNumbers.map((roomNumber) => (
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-[gray]">
                      {roomNumber.number}
                    </label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleRoomNumber}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleReserve}
          className=" 
      border-none py-2 px-4  bg-myblue2 text-white w-full font-bold  box-border 
        "
        >
          Reservar now{" "}
        </button>
      </div>
    </div>
  );
};

export default Reserve;
