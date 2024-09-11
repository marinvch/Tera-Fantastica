import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface IndexProps {
  children: ReactNode;
}

const Layout: React.FC<IndexProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
