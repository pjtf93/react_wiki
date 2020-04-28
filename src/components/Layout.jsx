import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Header from '../components/Header';
import Categories from '../components/Categories';

const Layout = ({ children }) => (
  <>
    <ThemeProvider>
      <CSSReset />
      <Header />
      <Categories />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
