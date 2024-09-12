import React, { useState } from 'react';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Layout from '../components/Layout';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import {
  ArrowBack,
  ArrowForward,
  CenterFocusStrong,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
} from '@mui/icons-material';

// Import images directly
import image1 from '../data/newspaper/tfnpp1.png';
import image2 from '../data/newspaper/tfnpp2.png';
import image3 from '../data/newspaper/tfnpp3.png';
import image4 from '../data/newspaper/tfnpp4.png';
import image5 from '../data/newspaper/tfnpp5.png';
import image7 from '../data/newspaper/tfnpp7.png';
import image8 from '../data/newspaper/tfnpp8.png';

// Use the imported images in the array
const imageUrls = [image1, image2, image3, image4, image5, image7, image8];

const NewspaperPage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const NewspapperHeader = ({ zoomIn, zoomOut, resetTransform }) => {
    return (
      <Grid item style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
        <IconButton onClick={zoomIn}>
          <ZoomIn />
        </IconButton>
        <IconButton onClick={zoomOut}>
          <ZoomOut />
        </IconButton>
        <IconButton onClick={resetTransform}>
          <CenterFocusStrong />
        </IconButton>
        <IconButton onClick={toggleFullscreen}>{isFullscreen ? <FullscreenExit /> : <Fullscreen />}</IconButton>
      </Grid>
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % imageUrls.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <Layout>
      <Grid
        container
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Typography variant='h4' style={{ marginBottom: '20px' }}>
          Newspaper
        </Typography>

        <div
          className='page'
          style={{ width: '100%', height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={0}
            defaultPositionY={0}
            wheel={{ step: 0.1 }}
            doubleClick={{ step: 0.5 }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <NewspapperHeader zoomIn={zoomIn} zoomOut={zoomOut} resetTransform={resetTransform} />
                <TransformComponent>
                  <img
                    src={imageUrls[currentPage]}
                    alt={`Zoomable content ${currentPage + 1}`}
                    style={{ width: '100%', height: '80vh', objectFit: 'contain' }}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>

        <Grid container justifyContent='space-between' style={{ position: 'absolute', bottom: 20, width: '100%' }}>
          <Button onClick={handlePrevPage} disabled={currentPage === 0}>
            <ArrowBack /> Previous
          </Button>
          <Button onClick={handleNextPage} disabled={currentPage === imageUrls.length - 1}>
            Next <ArrowForward />
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NewspaperPage;
