import React from "react";
import Property, { countType } from "./Property";
import useFetch from "../hooks/useFeach";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper";
const ListProperty = () => {
  const url = "/hotels/countByType";
  let { data, error, loading } = useFetch(url);

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <div className="max-w-5xl w-full">
      {loading ? (
        "loading"
      ) : (
        <ul className="w-full  gap-5 flex">
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
            {images &&
              data.map((data, i) => (
                <SwiperSlide className="">
                  <Property img={images[i]} data={data} key={i} />
                </SwiperSlide>
              ))}
          </Swiper>
        </ul>
      )}
    </div>
  );
};

export default ListProperty;
