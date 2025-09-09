// src/components/Layout/Navigation.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ mobile = false, onItemClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    {
      id: 'services',
      label: 'Services',
      to: '/services',
      dropdown: [
        { label: 'META Ads Management', to: '/services/1' },
        { label: 'Google Ads Campaigns', to: '/services/2' },
        { label: 'SEO & Website Indexing', to: '/services/3' },
        { label: 'GMB Management', to: '/services/4' },
        { label: 'Website Design & Development', to: '/services/5' },
        { label: 'Video Production & Editing', to: '/services/6' },
        { label: 'Brand Strategy & Promotions', to: '/services/7' },
        { label: 'Creative Design Services', to: '/services/8' },
        { label: '24/7 Support & Consultation', to: '/services/9' },
      ]
    },
    { id: 'portfolio', label: 'Portfolio', to: '/portfolio' },
    { id: 'blog', label: 'Blog', to: '/blog' },
    { id: 'careers', label: 'Careers', to: '/careers' },
    { id: 'contact', label: 'Contact', to: '/contact' },
    { id: 'terms', label: 'Terms & Conditions', to: '/terms' },
  ];

  const handleItemClick = () => {
    if (onItemClick) onItemClick();
  };

  const NavItem = ({ item }) => (
    <div className="relative group">
      <Link
        to={item.to}
        onClick={handleItemClick}
        className={`flex items-center space-x-1 px-3 md:px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 hover:text-xaloc-orange ${
          mobile ? 'text-white block w-full text-left' : 'text-gray-300'
        }`}
      >
        <span>{item.label}</span>
        {item.dropdown && <ChevronDown size={mobile ? 14 : 16} />}
      </Link>

      {/* Dropdown Menu */}
      {item.dropdown && (
        <div className={`${
          mobile
            ? 'mt-2 ml-4 space-y-2'
            : 'absolute top-full left-0 mt-1 w-48 glass-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
        }`}>
          {item.dropdown.map((dropdownItem, index) => (
            <Link
              key={index}
              to={dropdownItem.to}
              onClick={handleItemClick}
              className={`block px-3 md:px-4 py-2 text-sm text-gray-300 hover:text-xaloc-orange transition-colors ${
                mobile ? '' : 'hover:bg-xaloc-orange/10 first:rounded-t-lg last:rounded-b-lg'
              }`}
            >
              {dropdownItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className={mobile ? 'space-y-2' : 'flex items-center space-x-1'}>
      {navItems.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
      
      {/* CTA Button */}
      <div className={mobile ? 'mt-4 pt-4 border-t border-gray-700' : 'ml-6'}>
        <Link
          to="/contact"
          onClick={handleItemClick}
          className="bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white px-6 py-2 rounded-full font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-block text-center"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
