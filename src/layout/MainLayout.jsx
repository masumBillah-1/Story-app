import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Navbar/Header';
import Footer from '../components/Footer/Footer';

const MainLoyouts = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100">
        <header>
        <Header/>
        </header>
        <main className="flex-1">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>  
        <Footer/>
      </div>
    </>
  );
};

export default MainLoyouts;