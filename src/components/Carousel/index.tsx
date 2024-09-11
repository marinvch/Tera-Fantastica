import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './carousel.css'; // Add a CSS file for custom styles
import { Grid, Typography } from '@mui/material';

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
  const classes = useStyles();
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex); // Update active index when slide changes
  };

  return (
    <div className='App'>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect='coverflow'
        direction={isMobile ? 'vertical' : 'horizontal'}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          modifier: 1,
          scale: 0.8,
        }}
        slidesPerView={isMobile ? 1 : 4} // Ensure only 5 slides visible
        initialSlide={5}
        spaceBetween={0}
        loop={true}
        centeredSlides
        navigation={false}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        style={{ width: isMobile ? '100%' : '800px' }}
      >
        {data?.map((item, index) => {
          // Determine which class to apply based on the active slide
          let slideClass = '';
          if (index === activeIndex) {
            slideClass = 'level0';
          } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            slideClass = 'level1';
          } else if (index === activeIndex - 2 || index === activeIndex + 2) {
            slideClass = 'level2';
          }

          return (
            <SwiperSlide key={item.id} className={slideClass}>
              <div style={{ textAlign: 'center' }}>
                <p className={`slide-title ${slideClass}`}>{item.text.name}</p>
                <img src={item.url} alt={item.text.name} className={`slide-image ${slideClass}`} />
                <Grid container direction='column' spacing={1} alignItems='flex-start' className={classes.bookInfo}>
                  <Typography variant='body2' className={classes.bookInfoText}>
                    Автор: {item.text.author}
                  </Typography>
                  <Typography variant='body2' className={classes.bookInfoText}>
                    {item.text.Format}
                  </Typography>
                  <Typography variant='body2' className={classes.bookInfoText}>
                    {item.text.Pages}
                  </Typography>
                  <Typography variant='body2' className={classes.bookInfoText}>
                    {item.text.Year}г.
                  </Typography>
                </Grid>

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
