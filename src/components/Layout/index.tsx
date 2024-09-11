import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import { useStyles } from '../../styles/components/layout';
interface IndexProps {
  children: ReactNode;
}

const Layout: React.FC<IndexProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layoutWrapper}>
      <div className={classes.container}>
        <Header />
        <div className={classes.contentWrapper}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
