// @ts-nocheck
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { options } from "../components/ButtonOptions";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";
import Header from "../components/Header";
import useFetch from "../hooks/useFeach";
import { Hotes } from "../interfaces/types";

const Hotels = () => {
  const location = useLocation();

  const [date, setDate] = useState<any>(location.state?.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options);
  const [destination, setDestination] = useState(location.state?.city);
  const [max, setMax] = useState(undefined);
  const [min, setMin] = useState(undefined);
  let { data, error, loading, refetch } = useFetch(
    `/hotels?city=${destination}&min=${min | 0}&max=${max | 999999}`
  );

  const handleSearch = () => {
    refetch();
  };
  return (
    <>
      <Header />
      <div className="flex p-2  mt-7 mb-8 justify-center">
        <div className="w-full max-w-6xl flex gap-5">
          <div
            className="flex-[1]  bg-[#febb02] rounded-md p-3 sticky flex flex-col gap-2
        "
          >
            <h1 className="text-[22px] font-medium text-myblue mb-3">Buscar</h1>
            <div>
              <label htmlFor="" className="text-[12px]">
                Busqueda
              </label>
              <input
                type="text"
                className="w-ful mt-1 p-1 border-none outline-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-[12px] block">
                Fecha registrada
              </label>
              <span
                className="w-full mt-1 p-2 bg-white text-xs block cursor-pointer md:text-sm "
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0]?.startDate, "dd/MM/yyyy")} A ${format(
                  date[0]?.endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item?.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-[12px]">
                Opciones
              </label>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="" className="text-[12px]">
                    Min precio <small>{"(por noche)"}</small>{" "}
                  </label>
                  <input
                    type="number"
                    className="w-[55px] outline-none p-1"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="" className="text-[12px]">
                    Max precio <small>{"(por noche)"}</small>{" "}
                  </label>
                  <input
                    type="number"
                    className="w-[55px] outline-none p-1"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="" className="text-[12px]">{`Adulto `}</label>
                  <input
                    type="number"
                    className="w-[40px] outline-none p-1"
                    value={options?.adult}
                    min={1}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="" className="text-[12px]">{` Niños `}</label>
                  <input
                    type="number"
                    className="w-[40px] outline-none p-1"
                    value={options?.children}
                    min={0}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="" className="text-[12px]">{` Room `}</label>
                  <input
                    type="number"
                    className="w-[40px] outline-none p-1"
                    value={options?.room}
                    min={1}
                  />
                </div>

                <button
                  className="py-2 px-5 bg-myblue2 text-white text-lg rounded-sm mt-2 font-medium"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex-[3] gap-4 flex flex-col ">
            {loading
              ? "loading"
              : data?.map((hotel: Hotes) => (
                  <SearchItem key={hotel._id} data={hotel} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
