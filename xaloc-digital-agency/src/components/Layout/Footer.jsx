// src/components/Layout/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Send, CheckCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        'META Ads Management',
        'Google Ads Campaigns',
        'SEO & Website Indexing',
        'Website Design & Development',
        'Video Production & Editing',
        'Brand Strategy & Promotions',
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Portfolio',
        'Case Studies',
        'Careers',
        'Blog',
        'Contact Us',
      ]
    },
    {
      title: 'Resources',
      links: [
        'Digital Marketing Guide',
        'SEO Best Practices',
        'Social Media Tips',
        'Industry Reports',
        'Webinars',
        'Free Tools',
      ]
    }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Kerala, india' },
    { icon: Phone, text: '+91 8590940911' },
    { icon: Mail, text: 'xalocmediaparters@gmail.com' },
    { icon: Clock, text: '24/7 Support Available' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.instagram.com/xaloc_digital/?igsh=MWM1dHhwcjNwbXM3eg%3D%3D#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/xaloc_digital/?igsh=MWM1dHhwcjNwbXM3eg%3D%3D#', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/Xalocdigital', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/xaloc-brand-promoters/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@XaloC_Brand_Promoters', label: 'YouTube' },
  ];

  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterStatus, setNewsletterStatus] = React.useState('');
  const [newsletterError, setNewsletterError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus('');
    setNewsletterError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: newsletterEmail })
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus('Thank you for subscribing to our newsletter!');
        setNewsletterEmail('');
      } else {
        setNewsletterError(true);
        setNewsletterStatus(data.error || 'Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      setNewsletterError(true);
      setNewsletterStatus('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FF6B35 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FFB800 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/assets/images/logo/xaloc-logo-main.png" 
                  alt="Xaloc" 
                  className="h-12 w-auto"
                />
                <div>
                  <span className="text-2xl font-display font-bold text-white">XALOC</span>
                  <p className="text-sm text-xaloc-orange">Digital Marketing</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming brands through innovative digital marketing strategies. 
                We create immersive campaigns that drive growth and build lasting relationships.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <item.icon className="text-xaloc-orange" size={16} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => {
                    // Define routes for Company and Services section links
                    const getLinkPath = (linkText) => {
                      switch (linkText) {
                        case 'About Us': return '/about';
                        case 'Our Portfolio': return '/portfolio';
                        case 'Careers': return '/careers';
                        case 'Blog': return '/blog';
                        case 'Contact Us': return '/contact';
                        case 'META Ads Management':
                        case 'Google Ads Campaigns':
                        case 'SEO & Website Indexing':
                        case 'Website Design & Development':
                        case 'Video Production & Editing':
                        case 'Brand Strategy & Promotions':
                          // Link to specific service detail pages by slug or id if available
                          // Since ServicesPage has service details by id, we can link to /services/1, /services/2, etc.
                          switch (linkText) {
                            case 'META Ads Management': return '/services/1';
                            case 'Google Ads Campaigns': return '/services/2';
                            case 'SEO & Website Indexing': return '/services/3';
                            case 'Website Design & Development': return '/services/5';
                            case 'Video Production & Editing': return '/services/6';
                            case 'Brand Strategy & Promotions': return '/services/7';
                            default: return '/services';
                          }
                        default: return null;
                      }
                    };

                    const linkPath = getLinkPath(link);

                    return (
                      <li key={linkIndex}>
                        {linkPath ? (
                          <Link
                            to={linkPath}
                            className="text-gray-400 hover:text-xaloc-orange transition-colors duration-200 text-sm"
                          >
                            {link}
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className="text-gray-400 hover:text-xaloc-orange transition-colors duration-200 text-sm"
                          >
                            {link}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                name="newsletterEmail"
                value={newsletterEmail}
                onChange={handleNewsletterChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-md text-gray-900"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 px-6 py-2 bg-xaloc-orange text-white rounded-md font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                <span>Subscribe</span>
                <Send size={16} />
              </button>
            </form>
            {newsletterStatus && (
              <p className={`mt-3 text-center ${newsletterError ? 'text-red-500' : 'text-green-500'}`}>
                {newsletterStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;