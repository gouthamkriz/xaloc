import React, { useEffect } from 'react';
import ImageInfinityLoop from '../UI/ImageInfinityLoop';

const ImageSliderBackground = () => {
  const groupA = [
    '/assets/images/sliding/a1.jpg',
    '/assets/images/sliding/a2.jpg',
    '/assets/images/sliding/a3.jpg',
    '/assets/images/sliding/a4.jpg',
    '/assets/images/sliding/a5.jpg',
    '/assets/images/sliding/a6.png',
  ];

  useEffect(() => {
    groupA.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const groupB = [
    '/assets/images/sliding/b1.png',
    '/assets/images/sliding/b2.jpg',
    '/assets/images/sliding/b3.png',
    '/assets/images/sliding/b4.jpg',
    '/assets/images/sliding/b5.avif',
    '/assets/images/sliding/b6.jpg',
  ];

  const groupC = [
    '/assets/images/sliding/c1.jpg',
    '/assets/images/sliding/c2.jpg',
    '/assets/images/sliding/c3.jpg',
    '/assets/images/sliding/c4.jpg',
    '/assets/images/sliding/c5.jpg',
    '/assets/images/sliding/c6.jpg',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-xaloc-charcoal to-xaloc-orange/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-xaloc-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-xaloc-coral rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">
          <ImageInfinityLoop images={groupA} animationClass="animate-slideText" />
        </div>
      </div>
    </section>
  );
};

export default ImageSliderBackground;
