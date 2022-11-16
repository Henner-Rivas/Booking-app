import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PropertyCity from "./PropertyCity";
const ListPropertyCity = () => {
  let data = ["1", " 2", "3", "4", "2"];
  return (
    <div className="flex flex-col max-w-5xl gap-1 w-full">
      <h1 className="font-bold text-[22px]">Descubrí Colombia</h1>
      <p className="text-[gray]">
        Estos destinos populares tienen mucho para ofrecer
      </p>
      <div className="flex gap-3 w-full">
        <Swiper
          /*           slidesPerGroup={1}
           */ loop={true}
          /*           loopFillGroupWithBlank={true}
           */ pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {data.map((data) => (
            <SwiperSlide className="w-full ">
              <PropertyCity />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ListPropertyCity;
