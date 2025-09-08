import React from 'react';
import Portfolio from '../components/sections/Portfolio';
import MainLayout from '../components/Layout/MainLayout';

const PortfolioPage = () => {
  return (
    <MainLayout>
      <Portfolio />
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-6">Our Portfolio in Detail</h2>
          <p className="text-gray-400 max-w-4xl">
            Explore our comprehensive portfolio showcasing successful projects across various industries.
            Each case study demonstrates our expertise in delivering innovative digital solutions that drive results.
          </p>
          {/* Add more detailed portfolio content here */}
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioPage;
