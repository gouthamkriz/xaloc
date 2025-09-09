import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  ArrowLeft,
  Phone,
  Calendar,
  CheckCircle,
  Star,
  Award,
  Target,
  Send
} from 'lucide-react';

const ServicesDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  const [inquiryFormData, setInquiryFormData] = useState({
    name: '',
    email: '',
    selectedServices: [],
    message: ''
  });

  const [inquiryStatus, setInquiryStatus] = useState('');
  const [inquiryError, setInquiryError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInquiryInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'selectedServices') {
      let updatedServices = [...inquiryFormData.selectedServices];
      if (checked) {
        updatedServices.push(value);
      } else {
        updatedServices = updatedServices.filter(service => service !== value);
      }
      setInquiryFormData({
        ...inquiryFormData,
        selectedServices: updatedServices
      });
    } else {
      setInquiryFormData({
        ...inquiryFormData,
        [name]: value
      });
    }
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setInquiryStatus('');
    setInquiryError(false);
    setIsSubmitting(true);

    // Frontend validation
    if (
      !inquiryFormData.name.trim() ||
      !inquiryFormData.email.trim() ||
      inquiryFormData.selectedServices.length === 0 ||
      !inquiryFormData.message.trim()
    ) {
      setInquiryError(true);
      setInquiryStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/service-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: inquiryFormData.name.trim(),
          email: inquiryFormData.email.trim(),
          services: inquiryFormData.selectedServices,
          message: inquiryFormData.message.trim()
        })
      });

      const data = await response.json();

      if (response.ok) {
        setInquiryStatus('Thank you for your inquiry! We will review your message and get back to you soon.');
        setInquiryFormData({
          name: '',
          email: '',
          selectedServices: [],
          message: ''
        });
      } else {
        setInquiryError(true);
        setInquiryStatus(data.error || 'Failed to send inquiry. Please try again later.');
      }
    } catch (error) {
      setInquiryError(true);
      setInquiryStatus('Failed to send inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      shortDescription: "Strategic Facebook & Instagram advertising campaigns designed to convert and scale.",
      highlights: ["Higher ROI", "Creative ad copies", "Data-driven targeting"],
      gradient: "from-blue-600 to-purple-600",
      hoverGradient: "from-blue-500 to-purple-500",
      detailedDescription: "Facebook & Instagram Ads (now META Ads) are the fastest way to reach highly targeted audiences where they spend most of their time online. Billions of users scroll daily. Without ads, you're invisible to them. With optimized campaigns, you can turn awareness into clicks, clicks into leads, and leads into customers.",
      benefits: [
        "Deep audience research & segmentation (age, interest, behavior, custom lookalikes)",
        "Creative ad development: Scroll-stopping visuals, carousels, and videos",
        "A/B testing for ad creatives and copies",
        "Conversion-focused funnels (landing pages + retargeting)",
        "Performance monitoring & optimization daily"
      ],
      process: [
        "Audience research and customer profiling",
        "Creative strategy and ad development",
        "Campaign setup with precise targeting",
        "Daily monitoring and optimization",
        "Performance analysis and scaling"
      ],
      caseStudy: {
        client: "Local clothing brand",
        result: "Triple online sales within 45 days",
        details: "Launching a META Ads funnel with retargeting ads, increasing CTR by 67%."
      },
      whatItIs: "Facebook & Instagram Ads (now META Ads) are the fastest way to reach highly targeted audiences where they spend most of their time online.",
      whyItMatters: "Billions of users scroll daily. Without ads, you're invisible to them. With optimized campaigns, you can turn awareness into clicks, clicks into leads, and leads into customers.",
      whatWeDo: [
        "Deep audience research & segmentation (age, interest, behavior, custom lookalikes)",
        "Creative ad development: Scroll-stopping visuals, carousels, and videos",
        "A/B testing for ad creatives and copies",
        "Conversion-focused funnels (landing pages + retargeting)",
        "Performance monitoring & optimization daily"
      ],
      deliverables: [
        "Ad creatives (images, carousels, videos)",
        "Audience + campaign setup",
        "Performance reports",
        "Ongoing optimization"
      ],
      cta: "Ready to dominate Facebook & Instagram? Let Xaloc build your next high-performing ad campaign."
    },
    {
      id: 2,
      icon: Search,
      title: "Google Ads Campaigns",
      shortDescription: "Data-driven PPC campaigns that maximize ROI and dominate search results.",
      highlights: ["Smart bidding", "Conversion-focused", "Transparent reporting"],
      gradient: "from-green-600 to-blue-600",
      hoverGradient: "from-green-500 to-blue-500",
      detailedDescription: "Google Ads put your business in front of customers actively searching for your service or product. When someone types 'best dentist near me' or 'buy gaming laptop,' Google Ads decide who they see first. If you're not there, your competitor is.",
      benefits: [
        "Comprehensive keyword research",
        "High-converting ad copy writing",
        "Smart bidding strategies for maximum ROI",
        "Negative keywords to cut waste",
        "Ongoing conversion tracking & adjustments"
      ],
      process: [
        "Comprehensive keyword research and analysis",
        "Compelling ad copy creation and A/B testing",
        "Strategic bid management and budget allocation",
        "Landing page optimization for conversions",
        "Continuous monitoring and performance refinement"
      ],
      caseStudy: {
        client: "Tech retailer",
        result: "42% increase in lead conversions",
        details: "Reduced cost-per-click by 28% through keyword restructuring and bid optimization."
      },
      whatItIs: "Google Ads put your business in front of customers actively searching for your service or product.",
      whyItMatters: "When someone types 'best dentist near me' or 'buy gaming laptop,' Google Ads decide who they see first. If you're not there, your competitor is.",
      whatWeDo: [
        "Comprehensive keyword research",
        "High-converting ad copy writing",
        "Smart bidding strategies for maximum ROI",
        "Negative keywords to cut waste",
        "Ongoing conversion tracking & adjustments"
      ],
      deliverables: [
        "Ad groups + campaigns",
        "Keyword plan & match types",
        "Conversion tracking setup",
        "Weekly reporting"
      ],
      cta: "Show up where your customers are searching. Let Xaloc take your Google Ads to the top."
    },
    {
      id: 3,
      icon: Globe,
      title: "SEO & Website Indexing",
      shortDescription: "Boost organic visibility, dominate rankings, and grow sustainably with SEO.",
      highlights: ["Keyword optimization", "Speed & mobile fixes", "Authority backlinks"],
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-500 to-red-500",
      detailedDescription: "Search Engine Optimization (SEO) makes your site discoverable on Google and drives free, organic traffic. 75% of users never scroll past the first page of Google. Without SEO, you're practically invisible.",
      benefits: [
        "Technical SEO audits (site speed, crawlability, mobile readiness)",
        "Content optimization (keywords, meta tags, structured data)",
        "Link building strategies for authority",
        "Website indexing to ensure Google ranks every page"
      ],
      process: [
        "Technical SEO audit and optimization",
        "Content strategy and keyword mapping",
        "On-page optimization and structure",
        "Link building and authority development",
        "Performance tracking and algorithm adaptation"
      ],
      caseStudy: {
        client: "Fitness academy",
        result: "120% boost in organic leads",
        details: "Improved ranking from page 5 to page 1 for 'fitness coaching online' in under 4 months."
      },
      whatItIs: "Search Engine Optimization (SEO) makes your site discoverable on Google and drives free, organic traffic.",
      whyItMatters: "75% of users never scroll past the first page of Google. Without SEO, you're practically invisible.",
      whatWeDo: [
        "Technical SEO audits (site speed, crawlability, mobile readiness)",
        "Content optimization (keywords, meta tags, structured data)",
        "Link building strategies for authority",
        "Website indexing to ensure Google ranks every page"
      ],
      deliverables: [
        "SEO audit report",
        "On-page optimization",
        "Link outreach plan",
        "Monthly ranking updates"
      ],
      cta: "Stop hiding on page 2. Let Xaloc put your brand in the spotlight."
    },
    {
      id: 4,
      icon: MapPin,
      title: "GMB Management",
      shortDescription: "Optimize your local presence, attract nearby customers, and boost reviews.",
      highlights: ["Local ranking boost", "Review management", "Engaging local posts"],
      gradient: "from-purple-600 to-pink-600",
      hoverGradient: "from-purple-500 to-pink-500",
      detailedDescription: "Google Business Profile is your storefront on Google Maps and local searches. 50% of people who search for local businesses visit within 24 hours. A weak GMB profile = lost customers.",
      benefits: [
        "Profile setup & optimization (NAP consistency, images, categories)",
        "Review management & response strategy",
        "Weekly posts & promotions to engage",
        "Local citation building to boost rankings"
      ],
      process: [
        "Profile setup and complete optimization",
        "High-quality photo and content management",
        "Review monitoring and professional responses",
        "Local citation building and consistency",
        "Performance tracking and local SEO integration"
      ],
      caseStudy: {
        client: "Luxury salon",
        result: "89% increase in calls from Google Maps",
        details: "Optimized GMB profile in 2 months."
      },
      whatItIs: "Google Business Profile is your storefront on Google Maps and local searches.",
      whyItMatters: "50% of people who search for local businesses visit within 24 hours. A weak GMB profile = lost customers.",
      whatWeDo: [
        "Profile setup & optimization (NAP consistency, images, categories)",
        "Review management & response strategy",
        "Weekly posts & promotions to engage",
        "Local citation building to boost rankings"
      ],
      deliverables: [
        "Fully optimized profile",
        "Weekly posts",
        "Review management",
        "Monthly GMB performance report"
      ],
      cta: "Be the top choice when locals search. Xaloc makes your GMB work for you 24/7."
    },
    {
      id: 5,
      icon: Monitor,
      title: "Website Design & Development",
      shortDescription: "Custom websites that look stunning and perform seamlessly across devices.",
      highlights: ["Modern UI/UX", "Mobile-first", "SEO-ready builds"],
      gradient: "from-cyan-600 to-blue-600",
      hoverGradient: "from-cyan-500 to-blue-500",
      detailedDescription: "Custom websites designed for performance, branding, and conversions. Your website is your 24/7 salesperson. If it looks outdated or loads slow, you're losing trust and sales.",
      benefits: [
        "Responsive, mobile-first design",
        "E-commerce store setups with payment integrations",
        "CMS platforms (WordPress, Shopify, custom)",
        "Performance optimization (speed, SEO, security)"
      ],
      process: [
        "Discovery session and requirement analysis",
        "Design mockups and user experience planning",
        "Development with modern frameworks",
        "Testing across devices and browsers",
        "Launch, training, and ongoing maintenance"
      ],
      caseStudy: {
        client: "Real estate website",
        result: "35% increase in inquiries",
        details: "Rebuilt website, cutting load time by 60%."
      },
      whatItIs: "Custom websites designed for performance, branding, and conversions.",
      whyItMatters: "Your website is your 24/7 salesperson. If it looks outdated or loads slow, you're losing trust and sales.",
      whatWeDo: [
        "Responsive, mobile-first design",
        "E-commerce store setups with payment integrations",
        "CMS platforms (WordPress, Shopify, custom)",
        "Performance optimization (speed, SEO, security)"
      ],
      deliverables: [
        "Full website design",
        "CMS setup",
        "Testing + deployment",
        "Maintenance (optional)"
      ],
      cta: "Your website should impress and convert. Xaloc builds sites that do both."
    },
    {
      id: 6,
      icon: Video,
      title: "Video Production & Editing",
      shortDescription: "Compelling video content that tells your story and engages your audience.",
      highlights: ["Professional storytelling", "High-quality editing", "Multi-platform delivery"],
      gradient: "from-red-600 to-orange-600",
      hoverGradient: "from-red-500 to-orange-500",
      detailedDescription: "Professional video content for ads, social media, and branding. Video is the #1 consumed content online, and brands using it grow revenue 49% faster.",
      benefits: [
        "Corporate videos for business branding",
        "Social media content optimized for TikTok/Reels",
        "Motion graphics & animated explainers",
        "Video ads tailored for high CTR"
      ],
      process: [
        "Creative concept development and scripting",
        "Professional filming with latest equipment",
        "Post-production editing and effects",
        "Platform-specific optimization and delivery",
        "Performance tracking and content strategy"
      ],
      caseStudy: {
        client: "Restaurant chain",
        result: "63% boost in reservations",
        details: "Launched a reel campaign."
      },
      whatItIs: "Professional video content for ads, social media, and branding.",
      whyItMatters: "Video is the #1 consumed content online, and brands using it grow revenue 49% faster.",
      whatWeDo: [
        "Corporate videos for business branding",
        "Social media content optimized for TikTok/Reels",
        "Motion graphics & animated explainers",
        "Video ads tailored for high CTR"
      ],
      deliverables: [
        "Script + storyboard",
        "Filming (if applicable)",
        "Professional editing",
        "Multi-platform exports"
      ],
      cta: "Stop scrolling, start watching. Xaloc makes videos that sell."
    },
    {
      id: 7,
      icon: Zap,
      title: "Brand Strategy & Promotions",
      shortDescription: "Build a powerful brand identity that resonates with your target audience.",
      highlights: ["Unique brand positioning", "Creative campaigns", "Market-driven strategies"],
      gradient: "from-yellow-600 to-orange-600",
      hoverGradient: "from-yellow-500 to-orange-500",
      detailedDescription: "Strategic brand-building campaigns to position your business uniquely. A strong brand is what makes people choose you over dozens of similar options.",
      benefits: [
        "Brand identity development (logo, voice, values)",
        "Campaign strategy for launches & promotions",
        "Market analysis & competitive positioning"
      ],
      process: [
        "Market research and competitive analysis",
        "Brand strategy and positioning development",
        "Visual identity and messaging creation",
        "Campaign planning and creative execution",
        "Brand monitoring and strategy refinement"
      ],
      caseStudy: {
        client: "Startup app",
        result: "5,000+ downloads in first 3 months",
        details: "Built a brand presence that secured downloads."
      },
      whatItIs: "Strategic brand-building campaigns to position your business uniquely.",
      whyItMatters: "A strong brand is what makes people choose you over dozens of similar options.",
      whatWeDo: [
        "Brand identity development (logo, voice, values)",
        "Campaign strategy for launches & promotions",
        "Market analysis & competitive positioning"
      ],
      deliverables: [
        "Brand kit",
        "Campaign roadmap",
        "Execution support"
      ],
      cta: "Don't just exist—stand out. Let Xaloc shape your brand story."
    },
    {
      id: 8,
      icon: Palette,
      title: "Creative Design Services",
      shortDescription: "Eye-catching designs that spark interest and drive real action.",
      highlights: ["Modern visuals", "User-friendly design", "Multi-format creatives"],
      gradient: "from-pink-600 to-purple-600",
      hoverGradient: "from-pink-500 to-purple-500",
      detailedDescription: "Designs that speak louder than words and move people to action. In 3 seconds, your audience decides if they like your brand—design makes that decision.",
      benefits: [
        "Graphic design for ads & social",
        "UI/UX design for apps & sites",
        "Print materials (brochures, posters, business cards)"
      ],
      process: [
        "Creative brief and concept development",
        "Design exploration and iterations",
        "Client collaboration and feedback",
        "Final production and file delivery",
        "Brand guidelines and usage support"
      ],
      caseStudy: {
        client: "Festival campaign",
        result: "10,000+ event sign-ups",
        details: "Created a poster set that generated sign-ups."
      },
      whatItIs: "Designs that speak louder than words and move people to action.",
      whyItMatters: "In 3 seconds, your audience decides if they like your brand—design makes that decision.",
      whatWeDo: [
        "Graphic design for ads & social",
        "UI/UX design for apps & sites",
        "Print materials (brochures, posters, business cards)"
      ],
      deliverables: [
        "Creative concepts",
        "Editable source files",
        "Cross-platform-ready designs"
      ],
      cta: "Look good. Be remembered. Xaloc design makes it happen."
    },
    {
      id: 9,
      icon: Headphones,
      title: "24/7 Support & Consultation",
      shortDescription: "Round-the-clock support to keep your digital presence running flawlessly.",
      highlights: ["Always available", "Expert support team", "Proactive solutions"],
      gradient: "from-indigo-600 to-blue-600",
      hoverGradient: "from-indigo-500 to-blue-500",
      detailedDescription: "Always-on support for technical issues, strategy, and growth guidance. The digital world doesn't stop at 6 PM. Neither should your support.",
      benefits: [
        "Technical troubleshooting (web, ads, SEO issues)",
        "Performance reviews with actionable insights",
        "Strategy consultations for growth planning"
      ],
      process: [
        "24/7 monitoring and issue detection",
        "Rapid response and troubleshooting",
        "Strategic consultation sessions",
        "Performance analysis and recommendations",
        "Proactive maintenance and optimization"
      ],
      caseStudy: {
        client: "E-commerce client",
        result: "Handled 3x traffic without downtime",
        details: "Provided continuous support during a festive sale."
      },
      whatItIs: "Always-on support for technical issues, strategy, and growth guidance.",
      whyItMatters: "The digital world doesn't stop at 6 PM. Neither should your support.",
      whatWeDo: [
        "Technical troubleshooting (web, ads, SEO issues)",
        "Performance reviews with actionable insights",
        "Strategy consultations for growth planning"
      ],
      deliverables: [
        "Direct communication",
        "24/7 response team",
        "Monthly performance sessions"
      ],
      cta: "Never stuck, never offline. With Xaloc, help is always a call away."
    }
  ];

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
            <p className="text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-3 bg-xaloc-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Back to Services
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}>
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
                className="absolute bg-white/20 rounded-full animate-pulse"
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

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeIn">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </button>

            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <service.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              {service.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">What We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.highlights.map((highlight, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-xaloc-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{highlight}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-xaloc-orange to-orange-600 mx-auto rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-6">Why Choose This Service</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the key benefits that make our {service.title.toLowerCase()} stand out from the competition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-xaloc-orange to-orange-600 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Here's how we deliver exceptional results with our proven methodology.
              </p>
            </div>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-xaloc-orange to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Step {index + 1}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-6">Success Story</h2>
              <p className="text-xl text-gray-400">Real results from real clients</p>
            </div>
            <div className="glass-dark p-8 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-xaloc-orange mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Client</h3>
                  <p className="text-gray-400">{service.caseStudy.client}</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-xaloc-orange mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Result</h3>
                  <p className="text-xaloc-orange font-bold text-xl">{service.caseStudy.result}</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-xaloc-orange mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
                  <p className="text-gray-400 text-sm">{service.caseStudy.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Inquiry Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tell us about your project and let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="glass-dark p-8 rounded-2xl">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={inquiryFormData.name}
                      onChange={handleInquiryInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-xaloc-orange focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={inquiryFormData.email}
                      onChange={handleInquiryInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-xaloc-orange focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-4">
                    Services of Interest * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((serviceOption) => (
                      <label key={serviceOption.id} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="selectedServices"
                          value={serviceOption.title}
                          checked={inquiryFormData.selectedServices.includes(serviceOption.title)}
                          onChange={handleInquiryInputChange}
                          className="w-4 h-4 text-xaloc-orange bg-gray-800 border-gray-700 rounded focus:ring-xaloc-orange focus:ring-2"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {serviceOption.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={inquiryFormData.message}
                    onChange={handleInquiryInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-xaloc-orange focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-8 py-4 bg-gradient-to-r from-xaloc-orange to-orange-600 text-white rounded-xl font-black text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </span>
                    <Send className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {inquiryStatus && (
                  <div className={`text-center p-4 rounded-lg ${inquiryError ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-green-900/50 text-green-300 border border-green-700'}`}>
                    {inquiryStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Get <span className="text-gradient-xaloc">Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {service.cta}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-xaloc-orange to-orange-600 text-white rounded-xl font-black text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden">
                <span className="relative z-10">Get Free Consultation</span>
                <Phone className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group px-8 py-4 bg-transparent border-2 border-xaloc-orange text-xaloc-orange rounded-xl font-black text-lg hover:bg-xaloc-orange hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <span>Book a Strategy Call</span>
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default ServicesDetailPage;
