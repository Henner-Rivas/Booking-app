import React from "react";

const PropertyList = () => {
  return (
    <div>
      <ul className="w-full max-w-5xl gap-5 flex">
        <li className="rounded-[10px] overflow-hidden cursor-pointer">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="w-full h-[150px]"
          />
          <div className="flex  flex-col">
            <h1 className="text-[18px] font-medium">Hotels</h1>
            <h2 className="text-[14px] font-light">233 hotels</h2>
          </div>
        </li>
        <li className="rounded-[10px] overflow-hidden cursor-pointer">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="w-full h-[150px]"
          />
          <div className="flex  flex-col">
            <h1 className="text-[18px] font-medium">Hotels</h1>
            <h2 className="text-[14px] font-light">233 hotels</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PropertyList;
