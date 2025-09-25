import Reveal from '../components/Reveal'

const ServiceCard = ({ title, description, image, points, index }) => (
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
      
      <a 
        href="/contact" 
        className="inline-flex items-center gap-2 text-[#f7e839] font-semibold hover:text-[#f5d428] transition-all duration-200 group-hover:gap-3"
      >
        Discuss Project
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>
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

const Services = () => (
  <main className="min-h-screen bg-gradient-to-b from-[#0a0c10] to-[#1a1f26]">
    {/* Hero Section */}
    <section className="relative py-10 lg:py-15 bg-white/3">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              Our Services
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6">
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
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
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
          ].map((service, index) => (
            <div key={service.t} id={service.id}>
              <ServiceCard 
                title={service.t}
                description={service.d}
                image={service.img}
                points={service.pts}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-10 lg:py-15 bg-white/5">
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

    {/* CTA Section */}
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Accelerate Your Growth?</h3>
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

    {/* Additional Services */}
    <section className="py-10 lg:py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Solutions</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              Additional services to support your unique business needs and challenges.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'E-commerce Optimization', desc: 'Boost online sales with tailored strategies for product pages, cart optimization, and customer journey mapping.' },
            { title: 'Marketing Automation', desc: 'Streamline your marketing efforts with automated workflows, email sequences, and lead nurturing programs.' },
            { title: 'Brand Strategy', desc: 'Develop a compelling brand identity and messaging framework that resonates with your target audience.' },
            { title: 'Video Marketing', desc: 'Create engaging video content for ads, social media, and brand storytelling.' },
            { title: 'Email Marketing', desc: 'Build relationships and drive conversions with strategic email campaigns and automation.' },
            { title: 'Marketing Consulting', desc: 'Get expert guidance on your marketing strategy, team structure, and technology stack.' }
          ].map((service, index) => (
            <Reveal key={service.title} as="div" className="bg-white/5 border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300">
              <h4 className="text-white font-semibold mb-3">{service.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </main>
)

export default Services