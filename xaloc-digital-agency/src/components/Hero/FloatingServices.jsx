import React from 'react';
import { 
  Target, Search, TrendingUp, MapPin, Code, 
  Play, Megaphone, Palette, Headphones 
} from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import { SERVICES } from '../../utils/constants';

const iconComponents = {
  Target, Search, TrendingUp, MapPin, Code,
  Play, Megaphone, Palette, Headphones
};

const FloatingService = ({ service }) => {
  const { getParallaxTransform } = useParallax();
  const Icon = iconComponents[service.icon];

  return (
    <div
      className="absolute animate-pulse z-20"
      style={{
        ...service.position,
        ...getParallaxTransform(1),
        animationDelay: `${service.delay}s`,
      }}
    >
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-ping"></div>
        <div className="relative glass-dark rounded-full p-4 group-hover:border-orange-500/60 transition-all duration-300 hover:scale-110">
          <Icon className="w-6 h-6 text-orange-400 group-hover:text-yellow-400 transition-colors duration-300" />
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 glass-dark rounded-lg px-3 py-2 text-xs text-orange-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-48 text-center">
          <div className="font-semibold">{service.label}</div>
          <div className="text-gray-400 mt-1">{service.description}</div>
        </div>
      </div>
    </div>
  );
};

const FloatingServices = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {SERVICES.map((service) => (
        <div key={service.id} className="pointer-events-auto">
          <FloatingService service={service} />
        </div>
      ))}
    </div>
  );
};

export default FloatingServices;