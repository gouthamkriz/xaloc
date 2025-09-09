// src/components/sections/Services.jsx
import React, { useState } from 'react';
import { 
  Target, Search, TrendingUp, MapPin, Code, 
  Play, Megaphone, Palette, Headphones 
} from 'lucide-react';
import ConsultationFormModal from '../Hero/ConsultationFormModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: Target,
      title: 'META Ads Management',
      description: 'Strategic Facebook & Instagram advertising campaigns that convert.',
      features: ['Audience Research', 'Creative Development', 'Performance Optimization'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Google Ads Campaigns',
      description: 'Data-driven PPC campaigns that maximize your ROI.',
      features: ['Keyword Research', 'Ad Copy Creation', 'Bid Management'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Website Indexing',
      description: 'Boost your organic visibility and search rankings.',
      features: ['Technical SEO', 'Content Optimization', 'Link Building'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'GMB Management',
      description: 'Optimize your local presence and attract nearby customers.',
      features: ['Profile Optimization', 'Review Management', 'Local Citations'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Code,
      title: 'Website Design & Development',
      description: 'Custom websites that look amazing and perform exceptionally.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Play,
      title: 'Video Production & Editing',
      description: 'Compelling video content that tells your brand story.',
      features: ['Corporate Videos', 'Social Media Content', 'Motion Graphics'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy & Promotions',
      description: 'Build a powerful brand that resonates with your audience.',
      features: ['Brand Identity', 'Campaign Strategy', 'Market Analysis'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Creative Design Services',
      description: 'Eye-catching designs that capture attention and drive action.',
      features: ['Graphic Design', 'UI/UX Design', 'Print Materials'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support & Consultation',
      description: 'Round-the-clock support for all your digital marketing needs.',
      features: ['Technical Support', 'Strategy Consultation', 'Performance Reviews'],
      color: 'from-xaloc-orange to-xaloc-coral'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient-xaloc">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand 
            and drive measurable results across all channels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group glass-dark p-8 rounded-2xl hover:bg-xaloc-orange/5 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                    <div className="w-1.5 h-1.5 bg-xaloc-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-dark p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and drive real results for your business.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white px-8 py-3 rounded-full font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300 hover:scale-105"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>

        {/* Consultation Form Modal */}
        <ConsultationFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Services;
