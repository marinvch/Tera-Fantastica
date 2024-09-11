import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BooksPage from './pages/Bookspage';
import HomePage from './pages/Homepage';
import MagazinePage from './pages/Magazinepage';
import NewspapperPage from './pages/Newspapperpage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='newspaper' element={<NewspapperPage />} />
          <Route path='books' element={<BooksPage />} />
          <Route path='magazines' element={<MagazinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
