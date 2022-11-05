import React from "react";

export type action = {
  i: string;
  d: string;
};
export type options = {
  children: number;
  adult: number;
  room: number;
};

type props = {
  options: options;
  sign: "+" | "-";
  action: string;
  option: string;
  handleOptions: (option: string, action: string) => void;
};
const ButtonOptions = (props: props) => {
  let { handleOptions, sign, action, option, options } = props;
  return (
    <button
      className="w-7 h-7 border border-solid border-myblue2 bg-white disabled:cursor-not-allowed"
      onClick={() => handleOptions(option, action)}
      disabled={
        sign === "-" && option === "adult" && options.adult === 1
          ? true
          : sign === "-" && option === "room" && options.room === 1
          ? true
          : sign === "-" && option === "children" && options.children === 0
          ? true
          : false
      }
    >
      {sign}
    </button>
  );
};

export default ButtonOptions;
