// src/components/sections/Blog.jsx
import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing: AI and Automation',
      excerpt: 'Discover how artificial intelligence is reshaping digital marketing strategies and what it means for businesses in 2024.',
      author: 'Xaloc Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Digital Marketing',
      featured: true
    },
    {
      id: 2,
      title: 'Meta Ads vs Google Ads: Which Platform Delivers Better ROI?',
      excerpt: 'A comprehensive comparison of Meta and Google advertising platforms to help you make informed decisions.',
      author: 'Marketing Expert',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Paid Advertising'
    },
    {
      id: 3,
      title: 'SEO Trends to Watch in 2024: Beyond Keywords',
      excerpt: 'Explore the latest SEO trends and strategies that will dominate search rankings this year.',
      author: 'SEO Specialist',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'SEO'
    },
    {
      id: 4,
      title: 'Building Brand Identity in the Digital Age',
      excerpt: 'Learn how to create a compelling brand identity that resonates with your target audience online.',
      author: 'Brand Strategist',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Branding'
    }
  ];

  const categories = ['All', 'Digital Marketing', 'SEO', 'Paid Advertising', 'Branding', 'Social Media'];

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-gradient-xaloc">Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights, industry trends, 
            and actionable tips for digital marketing success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white'
                  : 'glass-dark text-gray-400 hover:text-white hover:bg-xaloc-orange/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="mb-16">
            <div className="glass-dark rounded-2xl overflow-hidden lg:flex group hover:bg-xaloc-orange/5 transition-all duration-300">
              <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-r from-xaloc-orange/20 to-xaloc-coral/20 flex items-center justify-center">
                <div className="text-8xl opacity-20 font-bold">AI</div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-xaloc-orange/20 text-xaloc-orange px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-400 text-sm">{post.category}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-xaloc-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-xaloc-orange hover:text-xaloc-yellow transition-colors flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article 
              key={post.id}
              className="glass-dark rounded-2xl overflow-hidden group hover:bg-xaloc-orange/5 transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center">
                <div className="text-4xl opacity-30 font-bold">
                  {post.title.split(' ')[0].charAt(0)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-xaloc-orange/20 text-xaloc-orange px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-xaloc-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <button className="text-xaloc-orange hover:text-xaloc-yellow transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Want More Insights?</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest digital marketing tips and trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-xaloc-orange"
            />
            <button className="bg-gradient-to-r from-xaloc-orange to-xaloc-coral text-white px-6 py-3 rounded-full font-semibold hover:from-orange-400 hover:to-pink-400 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;