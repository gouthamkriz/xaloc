import React from 'react';

const ImageInfinityLoop = ({ images, animationClass = 'animate-slideText' }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex ${animationClass}`}>
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 mr-4">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageInfinityLoop;
