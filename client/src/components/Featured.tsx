import React from "react";
type props = {
  data: string[];
};
const Featured = (props: props) => {
  let { data } = props;

  return (
    <div className="flex relative text-white rounded-sm h-[250px] w-full overflow-hidden max-w-[350px] ">
      <img
        src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        alt=""
        className="w-full object-cover"
      />
      <div className="absolute m-3 text-[20px] bottom-[10px] ">
        <h1 className="font-bold text-[28px]">Dublin</h1>
        <h2 className="font-bold text-[24px]">{data[1]} properties</h2>
      </div>
    </div>
  );
};

export default Featured;
