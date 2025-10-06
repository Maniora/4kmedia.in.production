// pages/about.jsx
import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import AnimatedIllustrations from '../components/AnimatedIllustrations';
import FaqItem from '../components/FaqItem';

// Count up hook
function useCountUp(to, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start;
    let animationFrame;
    const target = typeof to === 'number' ? to : 0;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const currentValue = Math.floor(progress * target);
      setValue(currentValue);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, duration]);

  return value;
}

// Stats Section Component
const StatsSection = () => {
  // Stats config
  const stats = [
    { n: 1, suffix: '+ Years', l: 'Industry Experience', d: 'Deep expertise in digital transformation', duration: 700 },
    { n: 10, suffix: '+', l: 'Projects Delivered', d: 'Successful campaigns across various industries', duration: 2200 },
    { n: 98, suffix: '%', l: 'Client Retention', d: 'Long-term partnerships built on trust', duration: 2200 },
    { n: 12, suffix: 'x', l: 'Average ROI', d: 'Return on investment for our clients', duration: 2200 },

  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {stats.map((s, idx) => {
        // Use count up for each stat
        const count = useCountUp(s.n, s.duration);
        return (
          <Reveal key={s.l} as="div" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 text-center hover-lift transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#f7e839] mb-2">
              {count}
              {typeof s.suffix === 'string' && <span>{s.suffix}</span>}
            </div>
            <div className="text-white font-semibold mb-2">{s.l}</div>
            <div className="text-white/60 text-sm">{s.d}</div>
  </Reveal>
);
      })}
    </div>
  );
};

const About = () => (
  <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
    <AnimatedIllustrations />
    {/* Hero Section */}
    <section className="relative py-15 bg-white/3">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              About Our Agency
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl mb-6">
              <span className="text-white">Driving Digital </span>
              <span className="text-[#f7e839]">Excellence</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-white/70 mb-4">Zero to viral, we make it happen.</p>
          </Reveal>
          <Reveal>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              4kMedia is a performance-driven digital studio specializing in high-converting websites and comprehensive marketing systems. 
              We bridge the gap between innovative design and measurable business growth.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-15">
      <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-white mb-8">Our <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Journey</span></h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Founded with a vision to transform digital marketing, 4kMedia has evolved from a boutique studio into a full-service 
                agency trusted by industry leaders. Our journey is built on a foundation of innovation, transparency, and relentless 
                pursuit of client success.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Today, we partner with forward-thinking brands to create digital experiences that not only captivate audiences 
                but also drive sustainable growth and measurable ROI.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#f7e839] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Expert Team Leadership</h4>
                    <p className="text-white/70 text-sm">Senior professionals across SEO, paid media, content strategy, and analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#22d3ee] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transparent Partnership</h4>
                    <p className="text-white/70 text-sm">Clear reporting, KPI alignment, and honest communication at every step</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#ec4899] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Agile Execution</h4>
                    <p className="text-white/70 text-sm">Rapid iterations with rigorous quality assurance and continuous improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full aspect-[4/3] object-cover" 
                  src="/assets/images/aboutus.jpg" 
                  alt="4kMedia team collaboration" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-[#f7e839] rounded-2xl rotate-12 opacity-20"></div>
              <div className="absolute -top-6 -right-6 h-20 w-20 bg-[#22d3ee] rounded-2xl -rotate-12 opacity-20"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Reveal>
            <h2 className="text-4xl font-bold text-center text-white mb-8">By the <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Numbers</span></h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">Our track record speaks to our commitment to delivering exceptional results for our clients.</p>
          </Reveal>
        </div>
         {/* Animated Stats with count up effect */}
         <StatsSection />
      </div>
    </section>

    {/* Brand Partners Section */}
    <section className="py-15 relative bg-gradient-to-br from-white/5 to-white/2">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#f7e839]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
              Brand Partners
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Brand Partners</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We collaborate with top brands to deliver innovative solutions and measurable growth.
            </p>
          </div>
          <div className="overflow-hidden w-full">
            {/* Smooth infinite marquee loop for brand logos */}
            <div className="relative w-full overflow-hidden">
              <div
                className="marquee flex items-center gap-10"
                style={{
                  width: 'max-content',
                  minWidth: '100%',
                  willChange: 'transform'
                }}
              >
                {/* Define the logo set */}
                {[
                  {
                    src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                    alt: "Brand 1"
                  },
                  {
                    src: "/assets/brandLogos/logo2.png",
                    alt: "Brand 2"
                  },
                  {
                    src: "/assets/brandLogos/logo3.png",
                    alt: "Brand 3"
                  }
                ].map((logo, idx) => (
                  <img
                    key={`logo1-${idx}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 w-auto object-contain grayscale opacity-80 hover:grayscale-0 transition"
                    draggable="false"
                  />
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  {
                    src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                    alt: "Brand 1"
                  },
                  {
                    src: "/assets/brandLogos/logo2.png",
                    alt: "Brand 2"
                  },
                  {
                    src: "/assets/brandLogos/logo3.png",
                    alt: "Brand 3"
                  }
                ].map((logo, idx) => (
                  <img
                    key={`logo2-${idx}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 w-auto object-contain grayscale opacity-80 hover:grayscale-0 transition"
                    draggable="false"
                  />
                ))}
              </div>
            </div>
            <style>
              {`
                .marquee {
                  display: flex;
                  flex-wrap: nowrap;
                  animation: marquee 20s linear infinite;
                }
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                /* Remove any margin or padding on the last image to avoid a gap */
                .marquee img:last-child {
                  margin-right: 0 !important;
                }
              `}
            </style>
        </div>
      </div>
        {/* Marquee animation keyframes */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
    </section>


    {/* Values Section */}
    <section className="py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Core Values</span></h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">These principles guide every decision we make and every project we undertake.</p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              t: 'Results-Driven Approach',
              d: 'We measure success by tangible business outcomes and growth metrics, not just deliverables.',
              i: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/></svg>)
            },
            {
              t: 'Transparent Communication',
              d: 'Simple strategies, clear reporting, and honest timelines ensure complete alignment with client goals.',
              i: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5"/></svg>)
            },
            {
              t: 'Agile Excellence',
              d: 'Ship fast with precision, maintain rigorous quality standards, and continuously optimize for peak performance.',
              i: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>)
            },
          ].map((v) => (
            <Reveal key={v.t} as="div" className="bg-white/5 border border-white/10 rounded-xl p-8 hover-lift transition-all duration-300 group hover:border-[#f7e839]/30">
              <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-to-br from-[#f7e839] to-[#f5d428] text-[#11181f] mb-4 group-hover:scale-110 transition-transform duration-300">
                {v.i}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{v.t}</h3>
              <p className="text-white/70 leading-relaxed">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

        {/* FAQ Section */}
        <section className="py-15 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f141a] to-[#1a2430]"></div>
      
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Common Questions
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our process, timelines, and partnership model
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              question: "What is the typical project timeline?",
              answer: "Most engagements begin within 1-2 weeks post-discovery. Project duration varies based on scope, but we prioritize efficient execution without compromising quality."
            },
            {
              question: "Which industries do you specialize in?",
              answer: "We have extensive experience across e-commerce, SaaS, professional services, education, healthcare, and technology sectors, with tailored strategies for each vertical."
            },
            {
              question: "Do you offer customized service packages?",
              answer: "Yes, we develop bespoke solutions aligned with your specific business objectives, growth stage, and budget requirements for optimal results."
            },
            {
              question: "How do you measure and report success?",
              answer: "We establish clear KPIs upfront and provide comprehensive bi-weekly reports with transparent attribution and actionable insights for continuous improvement."
            },
            {
              question: "What makes 4kMedia different from other agencies?",
              answer: "Our unique blend of creative excellence, technical expertise, and data-driven strategies ensures we deliver measurable results that directly impact your bottom line."
            },
            {
              question: "Do you provide ongoing support after project completion?",
              answer: "Absolutely. We offer comprehensive maintenance and optimization packages to ensure your digital assets continue to perform at their peak."
            }
          ].map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question} 
              answer={faq.answer}
              delay={index * 100}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Reveal>
    </section>

    {/* CTA Section */}
    <section className="py-15">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Transform Your Digital </span>Presence?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a tailored strategy that drives measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="/careers" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                Work with us...
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
);

export default About;