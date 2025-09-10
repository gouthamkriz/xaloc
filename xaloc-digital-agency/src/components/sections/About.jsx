import React, { useRef, useEffect } from 'react';
import { Target, Users, Trophy, Zap, Clock } from 'lucide-react';
import ImageInfinityLoop from '../UI/ImageInfinityLoop';
import { useMousePositionPixels } from '../../hooks/useMousePositionPixels';

const About = () => {
  const mousePosition = useMousePositionPixels();
  const [isLogoGlowing, setIsLogoGlowing] = React.useState(false);

  const handleMouseEnterLogoBox = () => {
    setIsLogoGlowing(true);
  };

  const handleMouseLeaveLogoBox = () => {
    setIsLogoGlowing(false);
  };

  const stats = [
    { icon: Users, number: '100%', label: 'Dedication' },
    { icon: Trophy, number: '', label: 'Agile & Creative' },
    { icon: Zap, number: '', label: 'Driven by Impact' },
    { icon: Target, number: '', label: 'Personalized Approach' },
    { icon: Clock, number: '', label: 'Always Available' },
  ];

  const text = [
    "Welcome to Xaloc, where creativity meets strategy and brands break boundaries!",
    "We’re not just a digital marketing agency, we’re a crew of innovators, storytellers, and tech geeks obsessed with making brands unforgettable. From scroll stopping social media campaigns, performance packed SEO, and jaw dropping websites to impactful ads, bold branding, sleek videos, and 24/7 support, we bring it all together under one roof.",
    "Big ideas? We’ve got plenty. Big results? Even better.",
    " With Xaloc, your brand doesn’t just grow, it thrives, shines, and dominates."
  ];

  return (
    <section id="about" className="py-10 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-xaloc-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-xaloc-coral rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            About <span className="text-gradient-xaloc">Xaloc</span>
          </h2>
          <div className="text-base md:text-lg font-semibold max-w-6xl mx-auto px-4 leading-relaxed break-words text-gray-400">
            {text.map((paragraph, paraIndex) => (
              <p key={paraIndex} className={paraIndex < text.length - 1 ? "mb-3" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-10 md:mb-20">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                To empower businesses with cutting-edge digital marketing solutions
                that not only reach but resonate with their target audience, creating
                lasting connections and driving sustainable growth.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">Why Choose Xaloc?</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    Social Media Management
                  </span>
                  <span className="text-gray-600 hidden md:inline">|</span>
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    GMB Optimization
                  </span>
                  <span className="text-gray-600 hidden md:inline">|</span>
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    Website Creation
                  </span>
                  <span className="text-gray-600 hidden md:inline">|</span>
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    Video Production
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    Performance Marketing
                  </span>
                  <span className="text-gray-600 hidden md:inline">|</span>
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    Business Automation
                  </span>
                  <span className="text-gray-600 hidden md:inline">|</span>
                  <span className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                    AI Powered Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div
              className="glass-dark p-6 md:p-8 rounded-2xl shadow-lg"
              onMouseEnter={handleMouseEnterLogoBox}
              onMouseLeave={handleMouseLeaveLogoBox}
            >
              <img
                src="/assets/images/logo/xaloc-logo-main.png"
                alt="Xaloc Logo"
                className={`w-full max-h-60 md:max-h-80 object-contain mb-6 transition-shadow duration-300 ${
                  isLogoGlowing ? 'logo-glow' : ''
                }`}
              />
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-black text-white mb-2">Innovation Meets Excellence</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Founded on the principles of creativity, integrity, and results-driven performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-dark p-4 md:p-6 rounded-xl group-hover:bg-xaloc-orange/10 transition-all duration-300">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-xaloc-orange mx-auto mb-4" />
                <div className="text-2xl md:text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;