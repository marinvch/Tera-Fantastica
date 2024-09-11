import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from './styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './carousel.css';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Grid container>
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
        slidesPerView={isMobile ? 1 : 4}
        initialSlide={2}
        spaceBetween={0}
        loop={true}
        centeredSlides
        navigation={false}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        onSlideChange={handleSlideChange}
        style={{ width: isMobile ? '100%' : '800px' }}
      >
        {data?.map((item, index) => {
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
                    Формат: {item.text.Format}
                  </Typography>
                  <Typography variant='body2' className={classes.bookInfoText}>
                    Страници: {item.text.Pages}
                  </Typography>
                  <Typography variant='body2' className={classes.bookInfoText}>
                    Година: {item.text.Year}г.
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: '10px',
                    }}
                  >
                    {item.link && (
                      <Link
                        to={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: '#ff5252',
                          fontWeight: '500',
                          fontSize: '1rem',
                        }}
                      >
                        <ChromeReaderModeIcon style={{ color: '#ff5252', marginRight: '5px', cursor: 'pointer' }} />
                        <span style={{ cursor: 'pointer' }}>Read Book</span>
                      </Link>
                    )}
                  </div>
                </Grid>
              </div>
            </SwiperSlide>
          );
          <div className='swiper-pagination'></div>;
        })}
      </Swiper>
    </Grid>
  );
};

export default Carousel;
