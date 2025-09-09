import React, { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Rocket, Palette, Globe, Flame, Lightbulb, Send, CheckCircle } from 'lucide-react';
import SlidingTextSection from '../components/UI/SlidingText';
import AboutImageSlider from '../components/sections/AboutImageSlider';


const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLogoGlowing, setIsLogoGlowing] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMouseEnterLogoBox = () => {
    setIsLogoGlowing(true);
  };

  const handleMouseLeaveLogoBox = () => {
    setIsLogoGlowing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/contact', {
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
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
        setStatusMessage(data.error || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  const whyChooseUsPoints = [
    {
      icon: Rocket,
      text: 'Proven strategies that drive measurable growth.'
    },
    {
      icon: Palette,
      text: 'Creative campaigns that stand out and stick.'
    },
    {
      icon: Globe,
      text: 'Global expertise, tailored to local insights.'
    },
    {
      icon: Flame,
      text: 'Always ahead of digital trends and algorithms.'
    },
    {
      icon: Lightbulb,
      text: 'A team that treats your brand like our own.'
    }
  ];

  // Placeholder client logos - replace with real client logos
  const clientLogos = [
    'TechStart Inc.', 'Luxury Brand Co.', 'Healthcare Plus', 'EduTech Solutions',
    'Real Estate Pro', 'Fashion Forward', 'Finance First', 'Green Energy Co.'
  ];

  return (
    <MainLayout>
      {/* Section 1: Hero Heading */}
      <section className="py-20 relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/videos/about hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Why Work With <span className="text-gradient-xaloc">Xaloc?</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold">
            We're not just a digital marketing agency—we're your growth partner.
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At Xaloc, we blend creative innovation with strategic precision to deliver results that matter.
            We don't just execute campaigns—we craft digital experiences that transform brands and drive
            sustainable growth in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Section 2: About Us Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Who We <span className="text-gradient-xaloc">Are</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="glass-dark p-10 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    Xaloc is a vibrant team of creative thinkers, marketers, designers, and strategists 
                    who live and breathe digital innovation.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    We combine bold ideas with cutting-edge digital solutions to create campaigns 
                    that don't just reach audiences—they captivate them.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Unlike typical agencies, we don't just deliver services—we craft digital experiences 
                    that elevate brands worldwide and create lasting connections with your audience.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-xaloc-orange to-orange-600 p-8 rounded-2xl">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white mb-4">Driven by Impact</div>
                      <div className="text-2xl font-black text-white mb-4">Personalized Approach</div>
                      <div className="text-2xl font-black text-white">Always Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SlidingTextSection />
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Your Strategic Partner in <span className="text-gradient-xaloc">Digital Success</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here's what sets us apart from the competition and makes us the perfect growth partner for your brand.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="max-w-lg space-y-6">
                {whyChooseUsPoints.map((point, index) => (
                  <div key={index} className="glass-dark p-6 rounded-xl flex items-center space-x-6 group hover:bg-xaloc-orange/10 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <point.icon className="w-8 h-8 text-xaloc-orange" />
                    </div>
                    <p className="text-lg text-gray-300 font-medium">{point.text}</p>
                  </div>
                ))}
              </div>
              <div className="max-w-2xl">
                <div
                  className="glass-dark p-8 rounded-2xl"
                  onMouseEnter={handleMouseEnterLogoBox}
                  onMouseLeave={handleMouseLeaveLogoBox}
                >
                  <img
                    src="/assets/images/logo/xaloc-logo-main.png"
                    alt="Xaloc Logo"
                    className={`mx-auto transition-shadow duration-300 ${isLogoGlowing ? 'logo-glow' : ''}`}
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-black text-white mb-2">Innovation Meets Excellence</h4>
                    <p className="text-gray-400">
                      Founded on the principles of creativity, integrity, and results-driven performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutImageSlider />

      {/* Section 4: Clientele */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Valued <span className="text-gradient-xaloc">Clients</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We've worked with businesses across industries—tech startups, luxury brands, healthcare, 
              education, real estate, and more. Each collaboration is unique, but the goal is the same: 
              help brands shine brighter in the digital landscape.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((client, index) => (
                <div key={index} className="glass-dark p-6 rounded-xl flex items-center justify-center h-24 group hover:bg-xaloc-orange/10 transition-all duration-300">
                  <span className="text-gray-400 font-semibold text-sm text-center group-hover:text-xaloc-orange transition-colors">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-white mb-4">Success Stories</h3>
              <p className="text-gray-400 leading-relaxed">
                From 300% revenue growth for a tech startup to viral campaigns for luxury brands, 
                our results speak for themselves. Every project is a testament to our commitment 
                to excellence and our passion for digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Grow With <span className="text-gradient-xaloc">Xaloc?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's transform your digital presence into something unforgettable. 
              Your growth story starts with a conversation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-dark p-8 rounded-2xl">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange focus:ring-1 focus:ring-xaloc-orange transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange focus:ring-1 focus:ring-xaloc-orange transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project or goals..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange focus:ring-1 focus:ring-xaloc-orange transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-xaloc-orange to-orange-600 text-white py-4 px-8 rounded-lg font-black text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Let's Talk</span>
                  </button>

                  {statusMessage && (
                    <p className={`text-sm mt-2 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                      {statusMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;