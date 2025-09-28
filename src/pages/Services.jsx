import React, { useState, useCallback, useEffect } from 'react'
import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import Lottie from 'lottie-react'
// We'll load the animation data dynamically

const ServiceCard = ({ title, description, image, points, index, onReadMore }) => (
  <Reveal as="div" className="group bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden hover-lift transition-all duration-300 hover:border-[#f7e839]/30">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f7e839] text-[#11181f]">
          0{index + 1}
        </span>
      </div>
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-bold text-xl">{title}</h3>
      </div>
    </div>
    
    <div className="p-8">
      <p className="text-white/80 leading-relaxed mb-6">{description}</p>
      
      <div className="space-y-3 mb-6">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-white/70 text-sm leading-relaxed">{point}</span>
          </div>
        ))}
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={() => onReadMore({ title, description, image, points })}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
        >
          Read More
        </button>
      <a 
        href="/contact" 
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200"
      >
        Discuss Project
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>
      </div>
    </div>
  </Reveal>
)

const ProcessStep = ({ number, title, description }) => (
  <Reveal as="div" className="text-center">
    <div className="h-16 w-16 grid place-items-center rounded-full bg-gradient-to-br from-[#f7e839] to-[#f5d428] text-[#11181f] font-bold text-xl mb-4 mx-auto">
      {number}
    </div>
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <p className="text-white/70 text-sm leading-relaxed">{description}</p>
  </Reveal>
)

// Coming Soon Animation Component
const ComingSoonAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the animation data from the public directory
    fetch('/assets/illustrations/comingsoon.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load animation:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f7e839]"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f7e839]/10 to-[#f7e839]/5 rounded-full">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#f7e839] rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#11181f]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-[#f7e839] text-sm font-semibold">Coming Soon</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
};

// Modal component for displaying more info about a service
const ServiceModal = ({ open, onClose, service }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#181f29] to-[#1a1f26] rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 relative border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Service image */}
        <div className="relative overflow-hidden rounded-xl mb-6">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Service content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-white/80 text-lg leading-relaxed">{service.description}</p>
          </div>

          {/* Features list */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">What's Included:</h4>
            <div className="space-y-3">
              {service.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-white/70 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200"
            >
              Discuss This Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = useCallback((service) => {
    setSelectedService(service);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setSelectedService(null);
  }, []);

  const servicesData = [
            {
              id: 'smm',
              t: 'Social Media Marketing',
              d: 'Content strategy, community management, and paid amplification across social platforms.',
              img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
              pts: ['Strategy & content pillars', 'Community management', 'Paid boosts & partnerships']
            },
            {
              id: 'website-development',
              t: 'Website Development',
              d: 'Fast, accessible, SEO-friendly websites with modern stacks and CMS options.',
              img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
              pts: ['UX wireframes & components', 'Responsive builds', 'On-page SEO & analytics']
            },
            {
              id: 'ui-ux',
              t: 'UI/UX Design',
              d: 'Human-centered product design—research, prototypes, and design systems that convert.',
              img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
              pts: ['User research & flows', 'High-fidelity designs', 'Design systems & handoff']
            },
            {
              id: 'video-production',
              t: 'Video Production',
              d: 'Brand films, reels, and ad creatives from scripting to distribution.',
              img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
              pts: ['Scripting & storyboarding', 'Shoots & edits', 'Captions & distribution']
            },
            {
              id: 'logo-design',
              t: 'Logo Design',
              d: 'Distinctive brand identities with scalable logo systems and guidelines.',
              img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
              pts: ['Brand discovery', 'Logo concepts & revisions', 'Brand guidelines & assets']
            }
  ];

  return (
    <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
      <AnimatedIllustrations />
      
      {/* Hero Section */}
      <section className="relative py-15 bg-white/3">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                Our Services
              </span>
            </Reveal>
            <Reveal>
              <h1 className="font-extrabold tracking-tight text-5xl mb-6">
                <span className="text-white">Comprehensive </span>
                <span className="text-[#f7e839]">Digital Solutions</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-white/70 mb-4">Zero to viral, we make it happen.</p>
            </Reveal>
            <Reveal>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                End-to-end digital marketing services designed to drive growth, enhance visibility, 
                and deliver measurable results for your business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-15">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service, index) => (
            <div key={service.t} id={service.id}>
              <ServiceCard 
                title={service.t}
                description={service.d}
                image={service.img}
                points={service.pts}
                index={index}
                  onReadMore={handleReadMore}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              A structured approach to ensure every project delivers maximum impact and measurable results.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ProcessStep 
            number="01"
            title="Discovery & Strategy"
            description="Deep dive into your business goals, audience, and competitive landscape to develop a tailored strategy."
          />
          <ProcessStep 
            number="02"
            title="Planning & Execution"
            description="Detailed project planning with clear milestones, followed by precise implementation of strategies."
          />
          <ProcessStep 
            number="03"
            title="Optimization & Testing"
            description="Continuous monitoring, A/B testing, and optimization to maximize performance and ROI."
          />
          <ProcessStep 
            number="04"
            title="Reporting & Growth"
            description="Comprehensive reporting with insights and recommendations for ongoing growth and improvement."
          />
        </div>
      </div>
    </section>

    {/* More Services Coming Soon */}
    <section className="py-15">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">
              More <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Services</span> Coming Soon...
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              We're working on expanding our offerings. Stay tuned for new specialized solutions to help your business grow!
            </p>
          </Reveal>
        </div>
        <div className="flex justify-center mt-10">
          <div className="max-w-md w-full flex flex-col items-center">
            <div className="w-64 h-64 mb-6">
              <ComingSoonAnimation />
            </div>
            <span className="text-white/70 text-lg font-medium">Exciting new services are on the way!</span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
      <section className="py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-4">Ready to <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Accelerate Your Growth?</span></h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your objectives and create a customized strategy that aligns with your business goals and delivers tangible results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                Get Custom Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

      {/* Service Modal */}
      <ServiceModal 
        open={modalOpen} 
        onClose={handleCloseModal} 
        service={selectedService} 
      />
  </main>
  );
};

export default Services

