import { Hotes } from "../interfaces/types";

type props = {
  featured: Hotes;
};
const Featured = (props: props) => {
  let { featured } = props;

  return (
    <div className="flex flex-col gap-1 w-[240px] max-w-[250px] min-w-[230px] my-0 mx-auto">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
        alt=""
        className="w-full h-[200px] rounded-sm"
      />
      <span className="font-bold">{featured.name}</span>
      <span className="">{featured.city}</span>

      <span className="">Solo por {featured.cheapestPrice}</span>
      <div className="flex gap-2">
        <button className="bg-[#003580] p-1 rounded-md text-white">
          {featured.rating}
        </button>
        <span>Excellent</span>
      </div>
    </div>
  );
};

export default Featured;
