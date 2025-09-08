import React, { useEffect } from 'react';
import ImageInfinityLoop from '../UI/ImageInfinityLoop';

const AboutImageSlider = () => {
  const groupB = [
    '/assets/images/sliding/b1.png',
    '/assets/images/sliding/b2.jpg',
    '/assets/images/sliding/b3.png',
    '/assets/images/sliding/b4.jpg',
    '/assets/images/sliding/b5.avif',
    '/assets/images/sliding/b6.jpg',
  ];

  useEffect(() => {
    groupB.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-xaloc-charcoal to-xaloc-orange/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-xaloc-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-xaloc-coral rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <ImageInfinityLoop images={groupB} animationClass="animate-slideText" />
        </div>
      </div>
    </section>
  );
};

export default AboutImageSlider;
