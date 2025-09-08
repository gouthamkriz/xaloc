import React from 'react';
import Careers from '../components/sections/Careers';
import MainLayout from '../components/Layout/MainLayout';

const CareersPage = () => {
  return (
    <MainLayout>
      <Careers />
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-6">Join Our Team</h2>
          <p className="text-gray-400 max-w-4xl">
            Explore exciting career opportunities at Xaloc Digital. We are always looking for talented individuals
            passionate about digital marketing and innovation. Discover how you can grow with us.
          </p>
          {/* Add more detailed careers content here */}
        </div>
      </section>
    </MainLayout>
  );
};

export default CareersPage;
