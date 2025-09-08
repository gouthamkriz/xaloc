// src/components/sections/Careers.jsx
import React, { useState } from 'react';
import { Users, Briefcase, Heart, Clock, Send, CheckCircle } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage('Thank you for your application! We will review your submission and get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setIsError(true);
        setStatusMessage(data.error || 'Failed to send application. Please try again later.');
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage('Failed to send application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working hours'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with amazing colleagues'
    },
    {
      icon: Briefcase,
      title: 'Growth Opportunities',
      description: 'Career development and learning opportunities'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-gradient-xaloc">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of digital marketing. 
            We're looking for passionate individuals who want to make an impact.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <div className="glass-dark p-8 rounded-2xl lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4">Why Work at Xaloc?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At Xaloc, we believe in fostering creativity, encouraging innovation, and 
                celebrating success together. Our team is our greatest asset, and we're 
                committed to creating an environment where everyone can thrive.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                  Innovative projects with leading brands
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                  Learning and development opportunities
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-xaloc-orange rounded-full mr-3"></div>
                  Performance-based rewards and recognition
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-xl text-center">
                    <benefit.icon className="w-8 h-8 text-xaloc-orange mx-auto mb-2" />
                    <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Current Openings</h3>
          <p className="text-center text-gray-400">No openings available at the moment. Please check back later.</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-dark p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See the Right Role?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white px-8 py-3 rounded-full font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300 hover:scale-105">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
