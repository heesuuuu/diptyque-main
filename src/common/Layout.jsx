import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
