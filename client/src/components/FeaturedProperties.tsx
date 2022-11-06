import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <div className="flex flex-col gap-1 ">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-[200px] rounded-sm"
        />
        <span className="font-bold">Aparthotel Stare Miasto</span>
        <span className="">Madrid</span>
        <span className="">Starting from $120</span>
        <div className="flex gap-2">
          <button className="bg-[#003580] p-1 rounded-md text-white">
            8.9
          </button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 ">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-[200px] rounded-sm"
        />
        <span className="font-bold">Aparthotel Stare Miasto</span>
        <span className="">Madrid</span>
        <span className="">Starting from $120</span>
        <div className="flex gap-2">
          <button className="bg-[#003580] p-1 rounded-md text-white">
            8.9
          </button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
