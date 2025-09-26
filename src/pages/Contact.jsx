import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#f7e839] focus:ring-1 focus:ring-[#f7e839] transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Business Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#f7e839] focus:ring-1 focus:ring-[#f7e839] transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#f7e839] focus:ring-1 focus:ring-[#f7e839] transition-all"
            placeholder="Your Company Ltd."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#f7e839] focus:ring-1 focus:ring-[#f7e839] transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Project Budget Range</label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f7e839] focus:ring-1 focus:ring-[#f7e839] transition-all"
        >
          <option value="">Select budget range</option>
          <option value="5k-15k">$5,000 - $15,000</option>
          <option value="15k-30k">$15,000 - $30,000</option>
          <option value="30k-50k">$30,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Project Details *</label>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#f7e839] focus:ring-1 focus:ring-[#f7e839] transition-all resize-none"
          placeholder="Tell us about your project goals, timeline, and specific requirements..."
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold px-8 py-4 rounded-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
      >
        Submit Project Inquiry
      </button>
    </div>
  );
};

const Reveal = ({ children, className = "", as = "div", delay = 0, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  const Component = as;
  
  return (
    <Component 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// Animated Illustration Components
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <div 
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );
};

const PulsingCircle = ({ size = 'w-4 h-4', color = 'bg-[#f7e839]', delay = 0 }) => {
  return (
    <div 
      className={`${size} ${color} rounded-full`}
      style={{
        animation: `pulse 2s infinite ${delay}s`,
      }}
    />
  );
};

const AnimatedGraph = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-32 h-24 bg-white/5 rounded-lg p-3 border border-white/10">
      <div className="flex items-end justify-between h-full gap-1">
        {[65, 45, 78, 92, 56, 88].map((height, index) => (
          <div key={index} className="flex-1 bg-gradient-to-t from-[#f7e839] to-[#f5d428] rounded-sm transition-all duration-1000"
            style={{
              height: `${height * (progress / 100)}%`,
              transitionDelay: `${index * 100}ms`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedNetwork = () => {
  return (
    <div className="relative w-32 h-24">
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e839" />
            <stop offset="100%" stopColor="#f5d428" />
          </linearGradient>
        </defs>
        
        {/* Animated connecting lines */}
        <path
          d="M20 20 L60 40 L100 20"
          stroke="url(#networkGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M20 60 L60 40 L100 60"
          stroke="url(#networkGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Nodes */}
        <circle cx="20" cy="20" r="4" fill="#f7e839" className="animate-pulse" />
        <circle cx="60" cy="40" r="4" fill="#f7e839" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="100" cy="20" r="4" fill="#f7e839" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="20" cy="60" r="4" fill="#f7e839" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
        <circle cx="100" cy="60" r="4" fill="#f7e839" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
      </svg>
    </div>
  );
};

const ContactCard = ({ icon, title, value, description, delay, href, bgColor = "bg-[#1a1f26]" }) => (
  <Reveal as="div" className={`${bgColor} border border-white/10 rounded-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:border-[#f7e839]/30 group`} delay={delay}>
    <div className="flex items-start gap-6">
      <div className={`h-14 w-14 rounded-xl ${bgColor} border border-white/10 grid place-items-center flex-shrink-0 group-hover:bg-[#f7e839]/10 transition-all duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
        <a href={href} className="text-[#f7e839] hover:text-[#f5d428] font-semibold text-lg transition-colors duration-200 block mb-2">
          {value}
        </a>
        <div className="text-white/60 text-sm leading-relaxed">{description}</div>
      </div>
    </div>
  </Reveal>
);

const SocialCard = ({ platform, handle, href, icon }) => (
  <Reveal as="a" 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 hover:border-[#f7e839]/30 hover:bg-white/10"
  >
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-white/10 to-white/20 border border-white/10 grid place-items-center group-hover:scale-110 group-hover:bg-[#f7e839]/20 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{platform}</h4>
        <p className="text-white/70 text-sm">{handle}</p>
      </div>
    </div>
  </Reveal>
);

const StatsCard = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < number) {
            return prev + Math.ceil(number / 50);
          }
          return number;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <Reveal delay={delay}>
      <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
        <div className="text-4xl font-bold text-[#f7e839] mb-2">{count}+</div>
        <div className="text-white/70">{label}</div>
      </div>
    </Reveal>
  );
};

const Contact = () => (
  <main className="min-h-screen bg-gradient-to-b from-[#0a0c10] to-[#1a1f26] relative overflow-hidden">
    {/* Background Animation Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 opacity-10">
        <FloatingElement delay={0}>
          <PulsingCircle size="w-8 h-8" />
        </FloatingElement>
      </div>
      <div className="absolute top-40 right-32 opacity-10">
        <FloatingElement delay={1}>
          <PulsingCircle size="w-6 h-6" />
        </FloatingElement>
      </div>
      <div className="absolute bottom-40 left-32 opacity-10">
        <FloatingElement delay={2}>
          <PulsingCircle size="w-10 h-10" />
        </FloatingElement>
      </div>
    </div>

    {/* Hero Section */}
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-gradient-to-r from-[#f7e839] to-[#f5d428] bg-clip-text text-transparent font-semibold border border-[#f7e839]/20 px-6 py-3 rounded-full mb-8">
              Professional Services
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl md:text-7xl lg:text-8xl mb-8">
              <span className="text-white">Transform Your </span>
              <span className="text-[#f7e839]">Digital Presence</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12">
              Partner with industry experts to drive measurable growth, enhance brand visibility, and achieve sustainable business success through strategic digital solutions.
            </p>
          </Reveal>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            <StatsCard number={150} label="Projects Completed" delay={100} />
            <StatsCard number={98} label="Client Satisfaction" delay={200} />
            <StatsCard number={5} label="Years Experience" delay={300} />
            <StatsCard number={24} label="Hour Support" delay={400} />
          </div>
        </div>
      </div>
      
      {/* Floating Animated Elements */}
      <div className="absolute top-32 right-20 opacity-20">
        <FloatingElement delay={0.5}>
          <AnimatedGraph />
        </FloatingElement>
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <FloatingElement delay={1.5}>
          <AnimatedNetwork />
        </FloatingElement>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Reveal as="div" className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Discuss Your Project</h2>
              <p className="text-white/70 text-xl leading-relaxed">
                Share your vision with our experts. We'll provide strategic insights and a customized roadmap within 24 hours.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#11181f] via-[#1a222c] to-[#11181f] rounded-3xl p-10 border border-white/10 shadow-2xl backdrop-blur-sm">
              <ContactForm />
            </div>
          </Reveal>

          {/* Contact Information */}
          <div className="space-y-10">
            <Reveal>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect With Our Team</h2>
                <p className="text-white/70 text-xl leading-relaxed">
                  Multiple channels to reach our dedicated professionals. We're committed to your success.
                </p>
              </div>
            </Reveal>

            <div className="space-y-8">
              <ContactCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f7e839" strokeWidth="2"/>
                    <path d="M4 7l8 6 8-6" stroke="#f7e839" strokeWidth="2"/>
                  </svg>
                }
                title="Business Inquiries"
                value="info@4kmedia.in"
                description="Strategic partnerships and project consultations • Response within 4 hours"
                delay={100}
                href="mailto:info@4kmedia.in"
                bgColor="bg-gradient-to-br from-[#1a1f26] to-[#2d3748]"
              />

              <ContactCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.92V20a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3.09a2 2 0 012 1.72 12.66 12.66 0 00.7 2.81 2 2 0 01-.45 2.11L9 10a16 16 0 006 6l.36-.36a2 2 0 012.11-.45 12.66 12.66 0 002.81.7A2 2 0 0121 16.92z" stroke="#f7e839" strokeWidth="2"/>
                  </svg>
                }
                title="Direct Consultation"
                value="+91 99899 58238"
                description="Schedule strategic consultations • Hyderabad, India • Business Hours: 9 AM - 6 PM IST"
                delay={200}
                href="tel:+919989958238"
                bgColor="bg-gradient-to-br from-[#113126] to-[#1a4d3a]"
              />

              <ContactCard
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" stroke="#f7e839" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#f7e839" strokeWidth="2"/>
                  </svg>
                }
                title="Office Location"
                value="Hyderabad, Telangana"
                description="Schedule in-person meetings and workshops • Modern facility with latest technology"
                delay={300}
                href="https://maps.google.com"
                bgColor="bg-gradient-to-br from-[#241b1b] to-[#3d2a2a]"
              />
            </div>
                  </div>
                </div>
                  </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-white/5">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-sm">
            <h3 className="text-white font-bold text-3xl mb-8 text-center">Why Partner With 4kMedia?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Data-driven strategies with proven ROI and performance metrics",
                "Transparent reporting with real-time analytics and insights",
                "Agile methodology with rapid execution and quality assurance",
                "Dedicated account management with 24/7 professional support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#f7e839] to-[#f5d428] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-white/90 text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
                </div>
              </div>
            </Reveal>
      </div>
    </section>

    {/* Social Media Section */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Connected</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-xl leading-relaxed">
              Follow our professional journey and access exclusive insights, case studies, and industry trends.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <SocialCard
            platform="Instagram"
            handle="@4kmediax"
            href="https://instagram.com/4kmediax"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="#f7e839" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#f7e839" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#f7e839"/>
              </svg>
            }
          />

          <SocialCard
            platform="YouTube"
            handle="@4kmediax"
            href="https://youtube.com/@4kmediax"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="3" stroke="#f7e839" strokeWidth="2"/>
                <path d="M10 9l5 3-5 3V9z" fill="#f7e839"/>
              </svg>
            }
          />

          <SocialCard
            platform="LinkedIn"
            handle="4KMEDIA"
            href="https://www.linkedin.com/company/4kmedia-in"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="#f7e839" strokeWidth="2"/>
              </svg>
            }
          />

          <SocialCard
            platform="WhatsApp"
            handle="+91 99899 58238"
            href="https://wa.me/919989958238"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 11a8 8 0 10-14.9 4.1L4 21l6-1.1A8 8 0 0020 11z" stroke="#f7e839" strokeWidth="2"/>
                <path d="M8.5 9.5c.5 2 2.5 3.5 3.5 4l1.5-1.2c.3-.2.7-.1.9.2l1 1.2" stroke="#f7e839" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] via-[#2d3748] to-[#1a1f26] rounded-3xl p-16 text-center border border-white/10 shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8">
                <PulsingCircle size="w-4 h-4" delay={0} />
              </div>
              <div className="absolute bottom-8 right-8">
                <PulsingCircle size="w-6 h-6" delay={1} />
              </div>
              <div className="absolute top-1/2 left-1/4">
                <PulsingCircle size="w-3 h-3" delay={2} />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h3>
              <p className="text-white/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Schedule a comprehensive strategy session with our experts. We'll analyze your current position and develop a customized roadmap for sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#contact-form" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-bold text-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300">
                  Schedule Strategy Session
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
                <a href="mailto:info@4kmedia.in" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-[#f7e839]/50 transition-all duration-300">
                  Send Direct Message
              </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
);

export default Contact;