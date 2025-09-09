// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Eye, Filter } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Web Development Excellence',
      category: 'web-development',
      client: 'Rissos Consulting',
      description: 'Professional web development services delivering modern, responsive websites with cutting-edge technologies',
      image: '/assets/images/portfolio/web-dev-preview.jpg',
      tags: ['Web Development', 'React', 'Node.js', 'Responsive Design'],
      results: 'Live Site',
      siteUrl: 'https://rissosconsulting.com/'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-10 md:py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient-xaloc">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and success stories that showcase 
            our expertise in digital marketing and brand transformation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white'
                  : 'glass-dark text-gray-400 hover:text-white hover:bg-xaloc-orange/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group glass-dark rounded-2xl overflow-hidden hover:bg-xaloc-orange/5 transition-all duration-300 hover:scale-105 w-full"
            >
              {/* Project Preview */}
              <div className="relative h-48 md:h-64 bg-gradient-to-r from-xaloc-orange/20 to-xaloc-coral/20 overflow-hidden">
                <iframe
                  src={project.siteUrl}
                  className="w-full h-full border-0"
                  title={`${project.title} - ${project.client}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => window.open(project.siteUrl, '_blank')}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                    title="View Live Site"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm font-medium text-xaloc-orange bg-xaloc-orange/10 px-3 py-1 rounded-full">
                    {project.results}
                  </span>
                </div>
                
                <p className="text-sm text-xaloc-orange mb-2">{project.client}</p>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Want to See More?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Check out our complete portfolio and case studies.
          </p>
          <button
            onClick={() => navigate('/portfolio')}
            className="bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 text-sm md:text-base"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
