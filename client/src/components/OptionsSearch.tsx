import React from "react";
import ButtonOptions, { options } from "./ButtonOptions";

type props = {
  handleOptions: (option: string, action: string) => void;
  options: options;
};

const OptionsSearch = (props: props) => {
  const { handleOptions, options } = props;
  return (
    <div className="flex absolute flex-col z-10 gap-3 rounded-sm bottom-[-160px] shadow-md bg-white text-black p-6">
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
  );
};

export default OptionsSearch;
