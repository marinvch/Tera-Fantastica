import React from 'react';
import { useStyles } from './styles/layout';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import { useIsDesktop } from 'utils/hooks';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  const isDesktop = useIsDesktop();
  return (
    <div className={classes.layoutWrapper}>
      <Header />
      <div className={classes.container}>
        {isDesktop && <Sidebar />}

        <div className={classes.contentWrapper}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
