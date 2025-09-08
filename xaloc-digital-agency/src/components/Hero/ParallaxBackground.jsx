import React from 'react';
import { useParallax } from '../../hooks/useParallax';

const ParallaxBackground = () => {
  const { mousePosition, getScrollTransform } = useParallax();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FF6B35 0%, transparent 50%)`
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #FFB800 0%, transparent 60%)`
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-25 transition-all duration-600"
          style={{
            background: `radial-gradient(circle at 50% 50%, #FF3366 0%, transparent 70%)`
          }}
        ></div>
      </div>

      {/* Geometric Light Trails */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 animate-pulse"
            style={{
              width: '200%',
              top: `${20 + i * 15}%`,
              left: '-50%',
              transform: `rotate(${15 + i * 10}deg)`,
              ...getScrollTransform(0.1 * (i + 1)),
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div 
              className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 blur-sm"
              style={{
                clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                         i % 3 === 1 ? 'circle(50%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default ParallaxBackground;