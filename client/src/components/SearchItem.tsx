import React from "react";
import { Link } from "react-router-dom";
import { Hotes } from "../interfaces/types";
type props = {
  data: Hotes;
};
const SearchItem = (props: props) => {
  let { data } = props;

  return (
    <div className="flex flex-1 gap-3 rounded-md  p-2 shadow max-h-[250px]">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="min-w-[150px]  max-w-[220px] rounded-sm w-[100%]  object-cover"
      />
      <div className="flex-[2] flex flex-col gap-1">
        <h1 className="text-myblue2"> {data.name}</h1>
        <span className="text-[14px]">500m from center</span>
        <span className="bg-green-600 text-white rounded-md  inline-block w-max">
          Free airport taxi
        </span>
        <span className="text-medium text-[15px]">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-[15px]">{data.desc}</span>
        <span className="text-green-700">Free cancellation </span>
        <span className="text-green-400 text-[14px]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-[1] flex flex-col justify-between">
        {data.rating && (
          <div className="flex justify-between">
            <span className="font-medium">Excellent</span>
            <button className="bg-[#003580] text-white p-1 rounded-sm">
              {data.rating}
            </button>
          </div>
        )}
        <div className="flex flex-col ">
          <span className="text-[22px] text-right">{data.cheapestPrice}</span>
          <span className=" text-gray-500">Includes taxes and fees</span>
          <Link to={`/hotels/${data._id}`}>
            <button className="bg-myblue2 text-white font-medium rounded-sm p-2">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
