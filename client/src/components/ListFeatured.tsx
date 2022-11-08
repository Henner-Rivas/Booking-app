import { useState, useEffect } from "react";
import useFetch from "../hooks/useFeach";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Featured from "./Featured";
const ListFeatured = () => {
  const URI = "/hotels/countByCity?cities=Quibdó,medellin,bogota";
  const { data, loading, error } = useFetch(URI);
  return (
    <div className="flex w-full  gap-5 max-w-5xl flex-wrap justify-center   md:justify-between">
      {loading ? (
        "loading wait "
      ) : (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
            <SwiperSlide>
              <Featured data={data} />
            </SwiperSlide>
          </Swiper>
        </>
      )}
    </div>
  );
};

export default ListFeatured;
