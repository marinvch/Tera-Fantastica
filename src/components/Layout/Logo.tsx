import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles/logo';

const Logo = () => {
  const classes = useStyles();
  return (
    <Typography
      variant='h6'
      className={classes.title}
      component={Link}
      to='/'
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      Tera Fantastica
    </Typography>
  );
};

export default Logo;
