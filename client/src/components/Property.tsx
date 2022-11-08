import React from "react";
export type countType = {
  type: string;
  count: number;
};
type props = {
  img: string;
  data: string[] | any;
};
const Property = (props: props) => {
  let { img, data } = props;

  return (
    <li className="rounded-[10px] overflow-hidden cursor-pointer">
      <img src={img} alt="" className="w-full h-[150px]" />
      <div className="flex  flex-col">
        <h1 className="text-[18px] font-medium capitalize"> {data["type"]} </h1>
        <h2 className="text-[14px] font-light">
          {data["count"]} {data["type"]}
        </h2>
      </div>
    </li>
  );
};

export default Property;
