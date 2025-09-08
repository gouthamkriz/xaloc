// src/components/Layout/MainLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;