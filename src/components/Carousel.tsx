import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([EffectCoverflow]);

const Carousel = ({ data }) => {
  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    setCarouselData(data);
  }, [carouselData]);

  return (
    <div className="App">
      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 0, // Slide rotate in degrees
          stretch: 20, // Stretch space between slides (in px)
          depth: 200, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: false, // Enables slides shadows
        }}
        slidesPerView={3}
        initialSlide={5}
        spaceBetween={60}
        loop={true}
        centeredSlides
        style={{ width: "800px", height: "500px" }}
      >
        {carouselData?.map((item) => {
          console.log(item);
          return (
            <SwiperSlide key={item.id}>
              <p>{item.text.name}</p>
              <img src={item.url} alt="" />
              <p>Автор: {item.text.author}</p>
              <p>{item.text.Format}</p>
              <p>{item.text.Pages}</p>
              <p>{item.text.Year}г.</p>
              {item.link !== "" && (
                <a href={item.link} target="_blank">
                  <ChromeReaderModeIcon
                    style={{ color: "red", pointer: "cursor" }}
                  />
                </a>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
