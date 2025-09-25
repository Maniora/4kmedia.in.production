import Reveal from '../components/Reveal'

const StatCard = ({ number, label, description }) => (
  <Reveal as="div" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 text-center hover-lift transition-all duration-300">
    <div className="text-3xl md:text-4xl font-bold text-[#f7e839] mb-2">{number}</div>
    <div className="text-white font-semibold mb-2">{label}</div>
    <div className="text-white/60 text-sm">{description}</div>
  </Reveal>
)

const ValueCard = ({ title, description, icon }) => (
  <Reveal as="div" className="bg-white/5 border border-white/10 rounded-xl p-8 hover-lift transition-all duration-300 group hover:border-[#f7e839]/30">
    <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-to-br from-[#f7e839] to-[#f5d428] text-[#11181f] mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
    <p className="text-white/70 leading-relaxed">{description}</p>
  </Reveal>
)

const ClientLogo = ({ name }) => (
  <Reveal as="div" className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 hover-lift transition-all duration-300 hover:border-white/20">
    <div className="text-white font-medium opacity-80 hover:opacity-100 transition-opacity">{name}</div>
  </Reveal>
)

const About = () => (
  <main className="min-h-screen bg-gradient-to-b from-[#0a0c10] to-[#1a1f26]">
    {/* Hero Section */}
    <section className="relative py-10 lg:py-15 bg-white/3">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              About Our Agency
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6">
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
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey</h2>
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
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" 
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
    <section className="py-10 lg:py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">By the Numbers</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              Our track record speaks to our commitment to delivering exceptional results for our clients.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard 
            number="10+" 
            label="Projects Delivered" 
            description="Successful campaigns across various industries"
          />
          <StatCard 
            number="12x" 
            label="Average ROI" 
            description="Return on investment for our clients"
          />
          <StatCard 
            number="98%" 
            label="Client Retention" 
            description="Long-term partnerships built on trust"
          />
          <StatCard 
            number="1+ Years" 
            label="Industry Experience" 
            description="Deep expertise in digital transformation"
          />
        </div>
      </div>
    </section>

    {/* Trusted By Section */}
    <section className="py-1 lg:py-15">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              We're proud to partner with innovative companies driving change in their respective industries.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl text-center mx-auto">
          {['ShopHub', 'ScaleX', 'NovaPay', 'Cloudly', 'AcmeAI', 'Brightly'].map((brand) => (
            <ClientLogo key={brand} name={brand} />
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-10 lg:py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              These principles guide every decision we make and every project we undertake.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ValueCard 
            title="Results-Driven Approach"
            description="We measure success by tangible business outcomes and growth metrics, not just deliverables."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/></svg>}
          />
          <ValueCard 
            title="Transparent Communication"
            description="Simple strategies, clear reporting, and honest timelines ensure complete alignment with client goals."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5"/></svg>}
          />
          <ValueCard 
            title="Agile Excellence"
            description="Ship fast with precision, maintain rigorous quality standards, and continuously optimize for peak performance."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          />
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h3>
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
)

export default About