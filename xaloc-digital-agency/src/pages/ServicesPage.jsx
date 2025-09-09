import React, { useState, useEffect } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import {
  Facebook,
  Search,
  Globe,
  MapPin,
  Monitor,
  Video,
  Zap,
  Palette,
  Headphones,
  ArrowRight,
  Phone,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConsultationFormModal from '../components/Hero/ConsultationFormModal';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      icon: Facebook,
      title: "META Ads Management",
      description: "Strategic Facebook & Instagram advertising campaigns that convert.",
      highlights: ["Audience Research", "Creative Development", "Performance Optimization"],
      gradient: "from-blue-600 to-purple-600",
      hoverGradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      icon: Search,
      title: "Google Ads Campaigns",
      description: "Data-driven PPC campaigns that maximize your ROI.",
      highlights: ["Keyword Research", "Ad Copy Creation", "Bid Management"],
      gradient: "from-green-600 to-blue-600",
      hoverGradient: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      icon: Globe,
      title: "SEO & Website Indexing",
      description: "Boost your organic visibility and search rankings.",
      highlights: ["Technical SEO", "Content Optimization", "Link Building"],
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      icon: MapPin,
      title: "GMB Management",
      description: "Optimize your local presence and attract nearby customers.",
      highlights: ["Profile Optimization", "Review Management", "Local Citations"],
      gradient: "from-purple-600 to-pink-600",
      hoverGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      icon: Monitor,
      title: "Website Design & Development",
      description: "Custom websites that look amazing and perform exceptionally.",
      highlights: ["Responsive Design", "E-commerce Solutions", "CMS Integration"],
      gradient: "from-cyan-600 to-blue-600",
      hoverGradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      icon: Video,
      title: "Video Production & Editing",
      description: "Compelling video content that tells your brand story.",
      highlights: ["Corporate Videos", "Social Media Content", "Motion Graphics"],
      gradient: "from-red-600 to-orange-600",
      hoverGradient: "from-red-500 to-orange-500"
    },
    {
      id: 7,
      icon: Zap,
      title: "Brand Strategy & Promotions",
      description: "Build a powerful brand that resonates with your audience.",
      highlights: ["Brand Identity", "Campaign Strategy", "Market Analysis"],
      gradient: "from-yellow-600 to-orange-600",
      hoverGradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 8,
      icon: Palette,
      title: "Creative Design Services",
      description: "Eye-catching designs that capture attention and drive action.",
      highlights: ["Graphic Design", "UI/UX Design", "Print Materials"],
      gradient: "from-pink-600 to-purple-600",
      hoverGradient: "from-pink-500 to-purple-500"
    },
    {
      id: 9,
      icon: Headphones,
      title: "24/7 Support & Consultation",
      description: "Round-the-clock support for all your digital marketing needs.",
      highlights: ["Technical Support", "Strategy Consultation", "Performance Reviews"],
      gradient: "from-indigo-600 to-blue-600",
      hoverGradient: "from-indigo-500 to-blue-500"
    }
  ];

  const handleServiceClick = (serviceId) => {
    // Add smooth transition animation before navigation
    document.body.style.opacity = '0.8';
    setTimeout(() => {
      // Navigate to service detail page
      navigate(`/services/${serviceId}`);
      document.body.style.opacity = '1';
    }, 300);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/assets/videos/service hero.mp4"
          ></video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at 20% 80%, rgba(255, 107, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 0, 0.2) 0%, transparent 50%)`,
                transform: `translateY(${scrollY * 0.5}px)`
              }}
            />
            {/* Floating particles effect */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-xaloc-orange/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
              Our <span className="text-gradient-xaloc">Services</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
              Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results.
            </p>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-xaloc-orange mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service.id)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Main Card */}
                <div className={`relative p-8 h-full bg-gradient-to-br ${service.gradient} transition-all duration-500 group-hover:${service.hoverGradient}`}>
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-6 group-hover:text-white transition-colors">
                      {service.description}
                    </p>

                    {/* Highlights - appear on hover */}
                    <div className={`transition-all duration-500 ${hoveredService === service.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                      <div className="space-y-2 mb-6">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span className="text-white/90 text-sm font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-white/80 text-sm font-semibold">Learn More</span>
                      <ArrowRight className={`w-5 h-5 text-white transition-transform duration-300 ${hoveredService === service.id ? 'translate-x-2' : ''}`} />
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Sticky Footer */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Get <span className="text-gradient-xaloc">Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Let's discuss how Xaloc can help transform your digital presence and deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+918590940911" className="group relative px-8 py-4 bg-gradient-to-r from-xaloc-orange to-orange-600 text-white rounded-xl font-black text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden">
                <span className="relative z-10">Get Free Consultation</span>
                <Phone className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 bg-transparent border-2 border-xaloc-orange text-xaloc-orange rounded-xl font-black text-lg hover:bg-xaloc-orange hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Book a Strategy Call</span>
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <ConsultationFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </MainLayout>
  );
};

export default ServicesPage;
