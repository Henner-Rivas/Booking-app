import React, { useState, useContext } from "react";
import { MdHotel } from "react-icons/md";
import { MdOutlineFlight } from "react-icons/md";
import { MdLocalTaxi } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import SearchContext, { State } from "../context/SearchContext";
import AuthContext from "../context/AuthContext";
import OptionsSearch from "./OptionsSearch";
type props = {
  noHome?: boolean;
};

const Header = (props: props) => {
  const {
    state: { user },
  } = useContext(AuthContext);

  let { noHome } = props;
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
  let state: State = {
    city: destination,
    dates: date,
    options: options,
  };
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state });
    dispatch({
      type: "NEW_SEARCH",
      payload: { city: destination, dates: date, options: options },
    });
  };
  return (
    <header className="bg-myblue p-2 text-white flex justify-center ">
      <nav
        className={`w-full max-w-5xl mt-4 mr-0 ml-0 relative ${
          noHome ? " mb-[150px] lg:mb-[80px]" : "mb-[20px]"
        }`}
      >
        <ul className="flex gap-10 flex-wrap">
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
        {noHome && (
          <>
            <h1 className="text-5xl mt-10 font-bold ">
              {" "}
              Encuentra tu próxima estancia
            </h1>
            <p className="my-5 mx-0 text-lg">
              {" "}
              Busca ofertas en hoteles, casas y mucho más...
            </p>

            <div
              className="min-h-[50px] flex-wrap  bg-white flex  items-center border-[4px] border-[solid] border-[#febb02] 
 absolute bottom-[-180px] lg:bottom-[-110px] w-full max-w-5xl text-black justify-between flex-col  lg:flex-row
        "
            >
              <div className="flex  items-center py-2  gap-1 border-solid lg:border-r-[4px] lg:border-b-[0px]  border-b-[4px] lg:max-w-[350px] lg:min-w-[300px]  border-[#febb02] min-w-[300px] w-full h-full px-3">
                <MdHotel className="text-[gray] text-[20px]  " />
                <input
                  type="text"
                  placeholder="A donde quieres ir"
                  className="text-[16px] outline-none w-full h-full"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div
                className="lg:max-w-[270px] lg:min-w-[230px] lg:border-b-[0px] lg:border-r-[4px] flex items-center gap-1 py-2 cursor-pointer relative w-full border-solid border-b-[4px] border-[#febb02] h-full px-3

              "
                onClick={() => setOpenDate(!openDate)}
              >
                <SlCalender color={" text-gray-300"} />
                <span className=" text-gray-300">
                  {" "}
                  {`${format(date[0].startDate, "dd/MM/yyyy")} A ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>

                {openDate && (
                  <div
                    className="absolute top-[40px] z-10  w-full  h-full
                  "
                  >
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                      className="w-ful"
                    />
                  </div>
                )}
              </div>

              <div className="lg:max-w-[270px] lg:min-w-[230px] lg:border-b-[0px] relative flex items-center gap-1 py-2 cursor-pointer w-full border-solid border-b-[4px] border-[#febb02]">
                <BsFillPersonFill
                  color={" text-gray-300"}
                  onClick={() => setOpenOptions(!openOptions)}
                />
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
                  <OptionsSearch
                    handleOptions={handleOptions}
                    options={options}
                  />
                )}
              </div>
              <button
                className="flex items-center  w-full lg:max-w-[95px] lg:min-w-[75px]
           "
                onClick={handleSearch}
              >
                <span className="text-white text-[20px] bg-blue-600 py-2 px-5  h-full w-full ">
                  Buscar
                </span>
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
