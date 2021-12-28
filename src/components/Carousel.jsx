import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ data }) => {
  return (
    <Swiper
      style={{ display: "flex", width: "200px" }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="item-content">
              <div className="item-image">
                <img src={item.url} alt="" className="item-image" />
              </div>
              <p>{item.name}</p>
              <p>Автор: {item.author}</p>
              <p>{item.Format}</p>
              <p>{item.Pages}</p>
              <p>{item.Year}г.</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
