import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const images = [
    '/assets/images/sliding/a1.jpg',
    '/assets/images/sliding/a2.jpg',
    '/assets/images/sliding/a3.jpg',
    '/assets/images/sliding/a4.jpg',
    '/assets/images/sliding/a5.jpg',
    '/assets/images/sliding/a6.png',
    '/assets/images/sliding/a7.jpg',
    '/assets/images/sliding/a8.png',
    '/assets/images/sliding/a9.jpg',
    '/assets/images/sliding/a10.png',
    '/assets/images/sliding/a11.avif',
    '/assets/images/sliding/a12.avif',
    '/assets/images/sliding/a13.png',
    '/assets/images/sliding/b1.png',
    '/assets/images/sliding/b2.jpg',
    '/assets/images/sliding/b3.png',
    '/assets/images/sliding/b4.jpg',
    '/assets/images/sliding/b5.avif',
    '/assets/images/sliding/b6.jpg',
    '/assets/images/sliding/b7.jpg',
    '/assets/images/sliding/b8.jpg',
    '/assets/images/sliding/b9.jpg',
    '/assets/images/sliding/b10.jpg',
    '/assets/images/sliding/b11.jpg',
    '/assets/images/sliding/b12.jpg',
    '/assets/images/sliding/b13.jpg',
    '/assets/images/sliding/c1.jpg',
    '/assets/images/sliding/c2.jpg',
    '/assets/images/sliding/c3.jpg',
    '/assets/images/sliding/c4.jpg',
    '/assets/images/sliding/c5.jpg',
    '/assets/images/sliding/c6.jpg',
    '/assets/images/sliding/c7.jpg',
    '/assets/images/sliding/c8.jpg',
    '/assets/images/sliding/c9.jpg',
    '/assets/images/sliding/c10.jpg',
    '/assets/images/sliding/c11.jpg',
    '/assets/images/sliding/c12.jpg',
    '/assets/images/sliding/c13.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-xaloc-orange' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
