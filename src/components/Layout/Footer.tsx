import React from 'react';
import { useStyles } from './styles/footer';

const Footer = () => {
  const classes = useStyles();

  return <footer className={classes.footer}>Tera Fantastica © 2024 Developer Marin Cholakov</footer>;
};

export default Footer;
