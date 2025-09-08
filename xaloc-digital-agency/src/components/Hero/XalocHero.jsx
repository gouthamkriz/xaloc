import React, { useState, useEffect, useRef } from 'react';
import Button from '../UI/Button';
import AnimatedText from '../UI/AnimatedText';

const XalocHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-start text-left">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {isVisible && (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover animate-video-fade-in"
              autoPlay
              loop
              muted
              playsInline
              src="/assets/videos/video1.mp4"
            ></video>
            <video
              className="absolute inset-0 w-full h-full object-cover animate-video-fade-in"
              autoPlay
              loop
              muted
              playsInline
              src="/assets/videos/video2.mp4"
              style={{ animationDelay: '10s' }}
            ></video>
          </>
        )}
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm z-10"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-20 w-full px-8 md:px-16 py-20">
        <div className="max-w-6xl">
          {/* Tagline */}
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-snug">
              <AnimatedText
                text="Your brand."
                gradient={true}
                animation="slide-in-word"
                className="block leading-none mb-2 md:mb-4"
              />
              <AnimatedText
                text="Louder,"
                gradient={true}
                animation="slide-in-word"
                delay={0.2}
                className="block leading-none mb-2 md:mb-4"
              />
              <AnimatedText
                text="brighter,"
                gradient={true}
                animation="slide-in-word"
                delay={0.4}
                className="block leading-none mb-2 md:mb-4"
              />
              <AnimatedText
                text="unforgettable."
                gradient={true}
                animation="slide-in-word"
                delay={0.6}
                className="block leading-none"
              />
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-xaloc-orange to-xaloc-coral blur-3xl opacity-20 animate-pulse-glow" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
          <div style={{ animationDelay: '1.2s' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </Button>
          </div>
          <div style={{ animationDelay: '1.4s' }}>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('portfolio')}
            >
              View Our Portfolio
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default XalocHero;
