import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './carousel.css'; // Add a CSS file for custom styles

interface CarouselProps {
  data: Array<{
    id: string;
    text: { name: string; author: string; Format: string; Pages: string; Year: string };
    url: string;
    link?: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the middle slide active
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    // Update activeIndex when the component mounts
    setActiveIndex(2); // Start with the middle slide
  }, []);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // Update active index when slide changes
  };

  return (
    <div className='App'>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect='coverflow'
        direction={isMobile ? 'vertical' : 'horizontal'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.8,
        }}
        slidesPerView={isMobile ? 1 : 5}
        initialSlide={2}
        spaceBetween={30}
        loop={true}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange} // Handle slide change
        style={{ width: isMobile ? '100%' : '800px', height: '500px' }}
      >
        {data?.map((item, index) => {
          // Determine which class to apply based on the active slide
          let slideClass = '';
          if (index === activeIndex) {
            slideClass = 'active-slide';
          } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            slideClass = 'h2-slide';
          } else if (index === activeIndex - 2 || index === activeIndex + 2) {
            slideClass = 'h3-slide';
          }

          return (
            <SwiperSlide key={item.id} className={slideClass}>
              <div style={{ textAlign: 'center' }}>
                <p className={`slide-title ${slideClass}`}>{item.text.name}</p>
                <img
                  src={item.url}
                  alt={item.text.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: slideClass === 'active-slide' ? '300px' : slideClass === 'h2-slide' ? '200px' : '150px',
                  }}
                />
                <p>Автор: {item.text.author}</p>
                <p>{item.text.Format}</p>
                <p>{item.text.Pages}</p>
                <p>{item.text.Year}г.</p>
                {item.link && (
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <ChromeReaderModeIcon style={{ color: 'red', cursor: 'pointer' }} />
                  </a>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
