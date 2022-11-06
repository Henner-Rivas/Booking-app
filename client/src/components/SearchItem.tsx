import React from "react";

const SearchItem = () => {
  return (
    <div className="flex flex-1 gap-3 rounded-md  p-2 shadow">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="w-[200px] rounded-sm "
      />
      <div className="flex-[2] flex flex-col gap-1">
        <h1 className="text-myblue2">Tower Street Apartments</h1>
        <span className="text-[14px]">500m from center</span>
        <span className="bg-green-600 text-white rounded-md  inline-block w-max">
          Free airport taxi
        </span>
        <span className="text-medium text-[15px]">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-[15px]">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-green-700">Free cancellation </span>
        <span className="text-green-400 text-[14px]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-[1] flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-[#003580] text-white p-1 rounded-sm">
            8.9
          </button>
        </div>
        <div className="flex flex-col ">
          <span className="text-[22px] text-right">$112</span>
          <span className=" text-gray-500">Includes taxes and fees</span>
          <button className="bg-myblue2 text-white font-medium rounded-sm p-2">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
