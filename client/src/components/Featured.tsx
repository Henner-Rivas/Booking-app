import React from "react";

const Featured = () => {
  return (
    <div className="flex w-full  gap-5 max-w-5xl flex-wrap justify-center   md:justify-between">
      <div className="flex relative text-white rounded-sm h-[250px] w-full overflow-hidden max-w-[300px] min-w-[200px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full object-cover"
        />
        <div className=" absolute m-3 text-[20px]  ">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="flex relative text-white rounded-sm h-[250px] w-full overflow-hidden max-w-[300px] min-w-[200px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full object-cover"
        />
        <div className=" absolute m-3 text-[20px]  ">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="flex relative text-white rounded-sm h-[250px] w-full overflow-hidden max-w-[300px] min-w-[200px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="w-full object-cover"
        />
        <div className=" absolute m-3 text-[20px]  ">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
