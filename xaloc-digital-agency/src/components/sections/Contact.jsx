// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, Send,
  Facebook, Twitter, Instagram, Linkedin, Youtube
} from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

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

    try {
      const response = await fetch('https://xaloc.onrender.com/contact', {
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
        setStatusMessage('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setIsError(true);
        setStatusMessage(data.error || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['Kerala, india', 'Open for meetings by appointment']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8590940911', 'Mon-Fri: 9AM-6PM IST']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['xalocmediaparters@gmail.com', 'We reply within 24 hours']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      details: ['Emergency support available', 'For existing clients']
    }
  ];

  const services = [
    'META Ads Management',
    'Google Ads Campaigns',
    'SEO & Website Optimization',
    'Website Design & Development',
    'Video Production & Editing',
    'Brand Strategy & Promotions',
    'Creative Design Services',
    'Digital Marketing Consultation'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.instagram.com/xaloc_digital/?igsh=MWM1dHhwcjNwbXM3eg%3D%3D#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://www.instagram.com/xaloc_digital/?igsh=MWM1dHhwcjNwbXM3eg%3D%3D#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Twitter, href: 'https://x.com/Xalocdigital', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/xaloc-brand-promoters/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: 'https://www.youtube.com/@XaloC_Brand_Promoters', label: 'YouTube', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-gradient-xaloc">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can 
            help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-xaloc-orange to-xaloc-coral rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-400 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 glass-dark rounded-lg ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-xaloc-orange transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-700 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange transition-colors resize-vertical"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1.5 w-4 h-4 text-xaloc-orange bg-gray-700 border-gray-600 rounded focus:ring-xaloc-orange focus:ring-2"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-400">
                    I agree to the{' '}
                    <a href="/privacy" className="text-xaloc-orange hover:text-xaloc-yellow transition-colors">
                      Privacy Policy
                    </a>{' '}
                    and consent to being contacted by Xaloc Digital Marketing.
                  </label>
                </div>

                {statusMessage && (
                  <p className={`text-sm mt-2 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white py-4 rounded-lg font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-dark p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join over 500+ satisfied clients who have transformed their digital presence with Xaloc. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white px-8 py-3 rounded-full font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="border-2 border-xaloc-orange text-xaloc-orange px-8 py-3 rounded-full font-semibold hover:bg-xaloc-orange hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-dark p-6 rounded-xl text-center group hover:bg-xaloc-orange/5 transition-all duration-300">
            <Phone className="w-8 h-8 text-xaloc-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-semibold mb-2">Quick Call</h4>
            <p className="text-gray-400 text-sm mb-4">Need immediate assistance? Give us a call for instant support.</p>
            <a
              href="tel:+918590940911"
              className="text-xaloc-orange hover:text-xaloc-yellow transition-colors font-medium"
            >
              Call Now
            </a>
          </div>

          <div className="glass-dark p-6 rounded-xl text-center group hover:bg-xaloc-orange/5 transition-all duration-300">
            <Mail className="w-8 h-8 text-xaloc-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-semibold mb-2">Email Support</h4>
            <p className="text-gray-400 text-sm mb-4">Send us an email and we'll respond within 24 hours.</p>
            <a
              href="mailto:xalocmediaparters@gmail.com"
              className="text-xaloc-orange hover:text-xaloc-yellow transition-colors font-medium"
            >
              Send Email
            </a>
          </div>

          <div className="glass-dark p-6 rounded-xl text-center group hover:bg-xaloc-orange/5 transition-all duration-300">
            <Clock className="w-8 h-8 text-xaloc-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-semibold mb-2">Schedule Meeting</h4>
            <p className="text-gray-400 text-sm mb-4">Book a convenient time for a detailed discussion about your project.</p>
            <a 
              href="#" 
              className="text-xaloc-orange hover:text-xaloc-yellow transition-colors font-medium"
            >
              Book Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;