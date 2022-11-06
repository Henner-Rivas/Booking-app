import React, { useState } from "react";
import { MdHotel } from "react-icons/md";
import { MdOutlineFlight } from "react-icons/md";
import { MdLocalTaxi } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import ButtonOptions from "./ButtonOptions";
import { useNavigate } from "react-router-dom";
import { stateH } from "../pages/Hotels";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");

  const [date, setDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (option: string, action: string) => {
    if (option === "adult" || option === "room" || option === "children") {
      setOptions((prev) => {
        return {
          ...prev,
          [option]: action === "i" ? prev[option] + 1 : prev[option] - 1,
        };
      });
    }
  };

  let state: stateH = {
    destination,
    date,
    options,
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state });
  };

  return (
    <header className="bg-myblue p-2 text-white flex justify-center ">
      <nav className="w-full max-w-5xl mt-4 mr-0 mb-[80px] ml-0 relative">
        <ul className="flex gap-10">
          <li
            className="flex gap-2 items-center border border-white border-solid rounded-lg
           cursor-pointer  p-2"
          >
            <MdHotel />
            <span>Apartamentos</span>
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <MdOutlineFlight />
            <span>Vuelos </span>
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <MdHotel />
            <span>Atraciones</span>
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <MdLocalTaxi />
            <span>Taxis</span>
          </li>
        </ul>

        <h1 className="text-3xl mt-2"> A lifetime of discounts? it's Genius</h1>
        <p className="my-5 mx-0">
          {" "}
          Gt rewarded for your travels - unlock instant savings of 10& or with
          free Lamabooking
        </p>
        <button className="p-2 rounded-sm bg-[#0071c2] text-white border-none font-normal">
          Login / Registrate
        </button>

        <div
          className="h-[50px]  bg-white flex justify-around items-center border-[2px] border-[solid] border-[#febb02] 
       p-3 absolute bottom-[-110px] w-full max-w-5xl text-black 
        "
        >
          <div className="flex items-center gap-1">
            <MdHotel color="black" />
            <input
              type="text"
              placeholder="A donde quieres ir"
              className="text-[16px] outline-none"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-1 cursor-pointer relative">
            <SlCalender color={" text-gray-300"} />
            <span
              className=" text-gray-300"
              onClick={() => setOpenDate(!openDate)}
            >
              {" "}
              {`${format(date[0].startDate, "dd/MM/yyyy")} A ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </span>

            {openDate && (
              <div className="absolute top-[30px] z-10">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <BsFillPersonFill color={" text-gray-300"} />
            <span
              className=" text-gray-300"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {" "}
              {`${options.adult} adulto . ${options.children} Hijos .
                ${options.room} Habitaciones
              `}
            </span>
            {openOptions && (
              <div className="flex absolute flex-col z-10 gap-3 rounded-sm top-[40px] shadow-md bg-white text-black p-3">
                <div className="flex justify-between gap-12">
                  <span>Adulto</span>
                  <div className="flex gap-4 items-center">
                    <ButtonOptions
                      handleOptions={handleOptions}
                      option="adult"
                      action="d"
                      sign="-"
                      options={options}
                    />
                    <span> {options.adult} </span>
                    <ButtonOptions
                      handleOptions={handleOptions}
                      option="adult"
                      action="i"
                      sign="+"
                      options={options}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-12">
                  <span>Hijos</span>
                  <div className="flex gap-4 items-center">
                    <ButtonOptions
                      handleOptions={handleOptions}
                      option="children"
                      action="d"
                      sign="-"
                      options={options}
                    />
                    <span> {options.children} </span>
                    <ButtonOptions
                      handleOptions={handleOptions}
                      option="children"
                      action="i"
                      sign="+"
                      options={options}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-12">
                  <span>Room</span>
                  <div className="flex gap-4 items-center">
                    <ButtonOptions
                      handleOptions={handleOptions}
                      option="room"
                      action="d"
                      sign="-"
                      options={options}
                    />
                    <span className="text-[14px]"> {options.room} </span>
                    <ButtonOptions
                      handleOptions={handleOptions}
                      option="room"
                      action="i"
                      sign="+"
                      options={options}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            className="flex items-center gap-1 
           "
            onClick={handleSearch}
          >
            {" "}
            {/*             <BsSearch color="black" />
             */}{" "}
            <span className="text-white bg-blue-600 py-2 px-3 rounded-md">
              Buscar
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
