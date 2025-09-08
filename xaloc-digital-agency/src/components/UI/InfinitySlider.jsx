import React from 'react';

const InfinitySlider = ({ images, direction = 'left' }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}
        style={{
          width: `${duplicatedImages.length * 100}%`,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-32 md:h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinitySlider;
