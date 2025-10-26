import Hero from '../components/Hero'
import ServicesCard from '../components/ServicesCard'
import Testimonial from '../components/Testimonial'
import FaqItem from '../components/FaqItem'
import Reveal from '../components/Reveal'

const Home = () => (
  <main className="overflow-hidden">
    <Hero />
    
    {/* About Section */}
    <section className="py-15 relative ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f141a] via-[#0f141a] to-[#1a2430]"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#f7e839]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl"></div>
      
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Who We Are
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Strategic Digital <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Growth Partners</span>
          </h2>
          <p className="text-xl text-white/70 mb-4 font-light">Zero to viral, we make it happen.</p>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
          At 4KMedia, we blend creativity and strategy to help brands shine in a noisy world. We're young, bold, and obsessed with results that matter..We specialize in performance-driven digital solutions that deliver measurable results 
            and sustainable growth for forward-thinking brands.
          </p>
          
          <a href="/about" className="px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium text-center">
                Know More About Us
              </a>
        </div>
      </Reveal>
    </section>

    {/* Services Section */}
    <section className="py-15 relative bg-gradient-to-br from-white/5 to-white/2">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f7e839]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#22d3ee]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            End-to-end services designed to elevate your digital presence and drive measurable business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Social Media Marketing",
              description: "Content strategy, community management, and paid amplification across social platforms.",
              icon: "M20 12a8 8 0 11-8-8 M22 2l-8.5 8.5"
            },
            {
              title: "Website Development", 
              description: "Fast, accessible, SEO-friendly websites with modern stacks and CMS options.",
              icon: "M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
            },
            {
              title: "UI/UX Design", 
              description: "Human-centered product design—research, prototypes, and design systems that convert.",
              icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            },
            {
              title: "Video Production", 
              description: "Brand films, reels, and ad creatives from scripting to distribution.",
              icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            },
            {
              title: "Logo Design", 
              description: "Distinctive brand identities with scalable logo systems and guidelines.",
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            },
            // {
            //   title: "SEO Optimization", 
            //   description: "Search engine optimization to increase visibility and organic traffic.",
            //   icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            // },
            {
              title: "Event Organization",
              description: "Complete event planning and management for engaging brand experiences.",
              icon: "M8 7V3h8v4M3 11h18M5 11v10a2 2 0 002 2h10a2 2 0 002-2V11"
            }
          ].map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7e839]/10 to-[#22d3ee]/10 rounded-2xl transform group-hover:scale-105 transition-all duration-300 blur-xl opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-[#f7e839]/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f7e839] to-[#22d3ee] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-7">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="/services"
                    className="text-[#f7e839] text-sm font-medium flex items-center gap-2 hover:underline transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/services');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/services" className="group inline-flex items-center px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium relative overflow-hidden">
            <span className="relative z-10">Explore All Services</span>
            <svg className="ml-3 w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7e839]/0 to-[#f7e839]/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </a>
        </div>
      </Reveal>
    </section>

    {/* Process Section */}
    <section className="py-15 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f141a] to-[#1a2430]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#f7e839]/20 to-transparent"></div>
      
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Our Methodology
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Strategic <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Process Framework</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A structured approach that ensures precision, transparency, and exceptional results at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            { 
              step: '01', 
              title: 'Discovery & Analysis', 
              description: 'Comprehensive audit, market research, and goal alignment to establish strategic foundation.',
              icon: 'M21 21l-4-4M3 11a8 8 0 1116 0 8 8 0 01-16 0z',
              gradient: 'from-[#f7e839] to-[#f7e839]/80'
            },
            { 
              step: '02', 
              title: 'Strategy & Planning', 
              description: 'Custom roadmap development with clear KPIs, timelines, and success metrics.',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              gradient: 'from-[#22d3ee] to-[#22d3ee]/80'
            },
            { 
              step: '03', 
              title: 'Execution & Launch', 
              description: 'Flawless implementation with quality assurance and performance monitoring.',
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              gradient: 'from-[#ec4899] to-[#ec4899]/80'
            },
            { 
              step: '04', 
              title: 'Optimization & Growth', 
              description: 'Continuous improvement through data analysis, testing, and strategic refinement.',
              icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
              gradient: 'from-[#8b5cf6] to-[#8b5cf6]/80'
            }
          ].map((stage, index) => (
            <div
              key={stage.step}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#f7e839]/10 to-[#22d3ee]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stage.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-black font-bold text-lg">{stage.step}</span>
                  </div>
                  <svg className="w-8 h-8 text-white/70 group-hover:text-[#f7e839] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#f7e839] transition-colors duration-300">{stage.title}</h3>
                <p className="text-white/70 leading-7 flex-1">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>

    {/* Brand Partners Section */}
    <div className="bg-gradient-to-br from-white/5 to-white/2 relative py-15 overflow-hidden mt-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#f7e839]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Our <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Brand Partners</span>
        </h2>
        <div className="text-center mb-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          We collaborate with top brands to deliver innovative solutions and measurable growth.
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="brand-marquee flex gap-10 items-center"
            style={{
              width: 'max-content',
              minWidth: '100%',
              willChange: 'transform'
            }}
          >
            {/* Double logo sets for seamless infinite scroll */}
            {[
              {
                src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                alt: "Brand 1"
              },
              {
                src: "/assets/brandLogos/hustleLogo.avif",
                alt: "Brand 2"
              },
              {
                src: "/assets/brandLogos/zeck.png",
                alt: "Brand 3"
              },
              {
                src: "/assets/brandLogos/auxo.avif",
                alt: "Brand 4"
              }
            ].concat([
              {
                src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                alt: "Brand 1"
              },
              {
                src: "/assets/brandLogos/hustleLogo.avif",
                alt: "Brand 2"
              },
              {
                src: "/assets/brandLogos/zeck.png",
                alt: "Brand 3"
              },
              {
                src: "/assets/brandLogos/auxo.avif",
                alt: "Brand 4"
              }
            ]).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain opacity-80 transition"
                draggable="false"
              />
            ))}
          </div>
          <style>
            {`
              .brand-marquee {
                display: flex;
                flex-wrap: nowrap;
                animation: brand-marquee-scroll 20s linear infinite;
              }
              @keyframes brand-marquee-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .brand-marquee img:last-child {
                margin-right: 0 !important;
              }
            `}
          </style>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <section className="py-15 relative bg-gradient-to-br from-white/5 to-white/2">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f7e839]/5 to-[#22d3ee]/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f7e839]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7e839]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#22d3ee]/5 rounded-full blur-xl"></div>
          
          <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Accelerate</span> Your Growth?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Schedule a complimentary strategy session with our experts. We'll analyze your current 
            performance and outline a customized roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-black transition-all duration-300 font-semibold text-lg min-w-[200px] hover:shadow-2xl hover:shadow-[#f7e839]/30 transform hover:scale-105"
            >
              Schedule Strategy Call
            </a>
            <a
              href="/services"
              className="px-10 py-5 rounded-2xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-semibold text-lg min-w-[200px]"
            >
              View Our Services
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">No obligation, just actionable insights</p>
        </div>
      </Reveal>
    </section>
  </main>
)

export default Home