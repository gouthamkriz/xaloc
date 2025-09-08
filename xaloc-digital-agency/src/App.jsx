// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import XalocHero from './components/Hero/XalocHero';
import About from './components/sections/About';
import ImageSliderBackground from './components/sections/ImageSliderBackground';
import Services from './components/sections/Services';

import Contact from './components/sections/Contact';
import SlidingTextSection from './components/UI/SlidingText';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServicesDetailPage from './pages/ServicesDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

import ScrollToTop from './components/UI/ScrollToTop';
import FloatingButton from './components/UI/FloatingButton';

function HomePage() {
  return (
    <MainLayout>
      <section id="home">
        <XalocHero />
      </section>
      <SlidingTextSection />
      <About />
      <ImageSliderBackground />
      <Services />

      <section id="contact">
        <Contact />
      </section>
    </MainLayout>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
