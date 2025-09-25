import Hero from '../components/Hero'
import ServicesCard from '../components/ServicesCard'
import Testimonial from '../components/Testimonial'
import FaqItem from '../components/FaqItem'
import Reveal from '../components/Reveal'

const Home = () => (
  <main className="overflow-hidden">
    <Hero />
    
    {/* About Section */}
    <section className="py-15">
      <Reveal as="div" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-[#f7e839] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            About Our Agency
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Strategic Digital Growth Partners
          </h2>
          <p className="text-white/70 mb-2">Zero to viral, we make it happen.</p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            We specialize in performance-driven digital solutions that deliver measurable results 
            and sustainable growth for forward-thinking brands.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <p className="text-white/80 text-lg leading-8">
              4kMedia is a premier digital studio that transforms brands through data-informed 
              strategies and cutting-edge execution. We bridge the gap between creative excellence 
              and technical precision to drive meaningful business outcomes.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f7e839] flex items-center justify-center mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Conversion-Optimized Design</h4>
                  <p className="text-white/70 text-sm">User-centric experiences engineered for maximum engagement and conversions</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22d3ee] flex items-center justify-center mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Technical Excellence</h4>
                  <p className="text-white/70 text-sm">SEO-optimized, lightning-fast builds with enterprise-grade infrastructure</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ec4899] flex items-center justify-center mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Continuous Optimization</h4>
                  <p className="text-white/70 text-sm">Data-driven insights and iterative improvements for sustained growth</p>
                </div>
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3 pt-4 sm:flex sm:flex-wrap sm:gap-4">
              <a href="/about" className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium text-center">
                Know More About Us
              </a>
              <a href="/contact" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#f7e839] text-black hover:bg-yellow-300 transition-all duration-300 font-medium text-center">
                Start Your Project
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[500px] object-cover"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                alt="4kMedia Team Collaboration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* Services Section */}
    <section className="py-15 bg-white/5">
      <Reveal as="div" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-[#f7e839] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            End-to-end services designed to elevate your digital presence and drive measurable business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServicesCard 
            title="Social Media Marketing" 
            description="Content strategy, community management, and paid amplification across social platforms."
            icon={
              <div className="flex items-center justify-center w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12a8 8 0 11-8-8" stroke="#f7e839" strokeWidth="1.6"/>
                  <path d="M22 2l-8.5 8.5" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            } 
          />
          <ServicesCard 
            title="Website Development" 
            description="Fast, accessible, SEO-friendly websites with modern stacks and CMS options."
            icon={
              <div className="flex items-center justify-center w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="14" rx="2" stroke="#f7e839" strokeWidth="1.6"/>
                  <path d="M3 10h18" stroke="#f7e839" strokeWidth="1.6"/>
                </svg>
              </div>
            } 
          />
          <ServicesCard 
            title="UI/UX Design" 
            description="Human-centered product design—research, prototypes, and design systems that convert."
            icon={
              <div className="flex items-center justify-center w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="12" rx="2" stroke="#f7e839" strokeWidth="1.6"/>
                  <path d="M8 8h8M8 12h5" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
            } 
          />
          <ServicesCard 
            title="Video Production" 
            description="Brand films, reels, and ad creatives from scripting to distribution."
            icon={
              <div className="flex items-center justify-center w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="14" height="10" rx="2" stroke="#f7e839" strokeWidth="1.6"/>
                  <path d="M17 9l4-2v10l-4-2V9z" stroke="#f7e839" strokeWidth="1.6"/>
                </svg>
              </div>
            } 
          />
          <ServicesCard 
            title="Logo Design" 
            description="Distinctive brand identities with scalable logo systems and guidelines."
            icon={
              <div className="flex items-center justify-center w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="7" stroke="#f7e839" strokeWidth="1.6"/>
                  <path d="M12 5v14M5 12h14" stroke="#f7e839" strokeWidth="1.6"/>
                </svg>
              </div>
            } 
          />
        </div>

        <div className="text-center mt-10">
          <a href="/services" className="inline-flex items-center px-8 py-3 rounded-lg border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium">
            Explore All Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>

    {/* Process Section */}
    <section className="py-15">
      <Reveal as="div" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-[#f7e839] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Strategic Process Framework
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A structured approach that ensures precision, transparency, and exceptional results at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              step: '01', 
              title: 'Discovery & Analysis', 
              description: 'Comprehensive audit, market research, and goal alignment to establish strategic foundation.',
              icon: 'M21 21l-4-4M3 11a8 8 0 1116 0 8 8 0 01-16 0z'
            },
            { 
              step: '02', 
              title: 'Strategy & Planning', 
              description: 'Custom roadmap development with clear KPIs, timelines, and success metrics.',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
            },
            { 
              step: '03', 
              title: 'Execution & Launch', 
              description: 'Flawless implementation with quality assurance and performance monitoring.',
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            },
            { 
              step: '04', 
              title: 'Optimization & Growth', 
              description: 'Continuous improvement through data analysis, testing, and strategic refinement.',
              icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            }
          ].map((stage, index) => (
            <div key={stage.step} className="group relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#f7e839]/20 border border-[#f7e839]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#f7e839] font-bold text-lg">{stage.step}</span>
                </div>
                <svg className="w-8 h-8 text-[#f7e839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{stage.title}</h3>
              <p className="text-white/70 leading-7">{stage.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>

    {/* Testimonials Section */}
    <section className="py-15 bg-white/5">
      <Reveal as="div" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-[#f7e839] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Discover how our strategic partnerships have driven exceptional results for businesses across sectors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial 
            name="Sarah Chen" 
            role="Chief Marketing Officer" 
            company="TechInnovate Solutions" 
            quote="4kMedia transformed our digital presence with data-driven strategies that delivered a 3x ROI within six months. Their expertise in conversion optimization is unparalleled."
            avatarUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" 
          />
          <Testimonial 
            name="Michael Rodriguez" 
            role="CEO" 
            company="Nexus Enterprises" 
            quote="The team's attention to detail and strategic approach helped us scale our SaaS platform efficiently. A true partnership focused on our business objectives."
            avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" 
          />
          <Testimonial 
            name="Emily Thompson" 
            role="Director of Growth" 
            company="Global Retail Group" 
            quote="From SEO to paid media, 4kMedia's integrated approach has consistently driven measurable growth and exceeded our performance expectations."
            avatarUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop" 
          />
        </div>
      </Reveal>
    </section>

    {/* FAQ Section */}
    <section className="py-15">
      <Reveal as="div" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-[#f7e839] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Get answers to the most common questions about our process, timelines, and partnership model
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FaqItem 
            question="What is the typical project timeline?" 
            answer="Most engagements begin within 1-2 weeks post-discovery. Project duration varies based on scope, but we prioritize efficient execution without compromising quality."
            delay={0} 
            defaultOpen 
          />
          <FaqItem 
            question="Which industries do you specialize in?" 
            answer="We have extensive experience across e-commerce, SaaS, professional services, education, healthcare, and technology sectors, with tailored strategies for each vertical."
            delay={100} 
          />
          <FaqItem 
            question="Do you offer customized service packages?" 
            answer="Yes, we develop bespoke solutions aligned with your specific business objectives, growth stage, and budget requirements for optimal results."
            delay={200} 
          />
          <FaqItem 
            question="How do you measure and report success?" 
            answer="We establish clear KPIs upfront and provide comprehensive bi-weekly reports with transparent attribution and actionable insights for continuous improvement."
            delay={300} 
          />
        </div>
      </Reveal>
    </section>

    {/* CTA Section */}
    <section className="py-15 bg-white/5">
      <Reveal as="div" className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h3>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary strategy session with our experts. We'll analyze your current 
            performance and outline a customized roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 rounded-lg bg-[#f7e839] text-black hover:bg-yellow-300 transition-all duration-300 font-semibold text-lg">
              Schedule Strategy Call
            </a>
            <a href="/portfolio" className="px-8 py-4 rounded-lg border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-semibold text-lg">
              Work with us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  </main>
)

export default Home