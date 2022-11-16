import React from "react";
import useFetch from "../hooks/useFeach";
import { Hotes } from "../interfaces/types";
import Featured from "./Featured";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper";
const ListFeatured = () => {
  const URI = "/hotels?featured=true&limit=4";
  const { data, loading, error } = useFetch(URI);
  console.log(
    "🚀 ~ file: ListFeatured.tsx ~ line 13 ~ ListFeatured ~ data",
    data
  );

  return (
    <div className="flex gap-3 max-w-5xl w-full">
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
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {loading
          ? "loading"
          : data.map((featured: Hotes) => (
              <SwiperSlide>
                <Featured featured={featured} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default ListFeatured;
