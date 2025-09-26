import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import CareersForm from '../components/CareersForm'

const CareerCard = ({ title, children, icon, type = "Full-time", location = "Remote" }) => (
  <Reveal as="div" className="bg-white/5 border border-white/10 rounded-xl p-8 hover-lift transition-all duration-300 hover:border-white/20">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 text-[#f7e839]">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <div className="flex gap-3 mt-1">
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{type}</span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{location}</span>
          </div>
        </div>
      </div>
    </div>
    <p className="text-white/70 text-sm mb-6 leading-relaxed">{children}</p>
    <div className="flex items-center justify-between">
      <a href="#apply" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] hover:shadow-lg transition-all duration-200">
        Apply Now
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </a>
    </div>
  </Reveal>
)

const BenefitCard = ({ title, children, icon }) => (
  <Reveal as="div" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300">
    <div className="flex items-center gap-3 mb-3">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-[#f7e839] text-[#11181f]">
        {icon}
      </div>
      <h4 className="font-semibold text-white text-lg">{title}</h4>
    </div>
    <p className="text-white/70 text-sm leading-relaxed">{children}</p>
  </Reveal>
)

const StatCard = ({ number, label }) => (
  <Reveal as="div" className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-[#f7e839] mb-2">{number}</div>
    <div className="text-white/70 text-sm uppercase tracking-wider">{label}</div>
  </Reveal>
)

const Careers = () => (
  <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
    <AnimatedIllustrations />
    {/* Hero Section */}
    <section className="relative py-15 bg-white/3">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              Join Our Team
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl mb-6">
              <span className="text-white">Build Your Career at </span>
              <span className="text-[#f7e839]">4kMedia</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Join a team of innovators shaping the future of digital media. Your talent combined with our vision can create extraordinary results.
            </p>
          </Reveal>
    {/* Stats Section */}
    <section className="pt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="50+" label="Team Members" />
          <StatCard number="15+" label="Countries" />
          <StatCard number="200+" label="Projects" />
          <StatCard number="98%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
        </div>
      </div>
    </section>


    {/* Open Positions */}
    <section className="py-15">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">Open <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Positions</span></h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              We're constantly seeking exceptional talent to join our growing team. Explore current opportunities below.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <CareerCard 
            title="Senior Graphic Designer" 
            type="Full-time" 
            location="Remote"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20h16M6 16h12M8 12h8M10 8h4" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Lead visual design projects from concept to completion. Create compelling graphics for digital campaigns, branding, and marketing materials.
          </CareerCard>
          
          <CareerCard 
            title="Social Media Strategist" 
            type="Full-time" 
            location="Hybrid"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Develop and execute social media strategies across multiple platforms. Analyze performance metrics and optimize campaigns for maximum engagement.
          </CareerCard>
          
          <CareerCard 
            title="Senior Video Editor" 
            type="Contract" 
            location="Remote"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 7l8 5-8 5V7z" fill="currentColor"/></svg>}
          >
            Create high-impact video content for advertising, social media, and corporate communications. Expertise in Adobe Creative Suite required.
          </CareerCard>
          
          <CareerCard 
            title="UI/UX Designer" 
            type="Full-time" 
            location="On-site"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Design intuitive user experiences for web and mobile applications. Conduct user research and create wireframes, prototypes, and final designs.
          </CareerCard>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">4kMedia?</span></h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              We invest in our team's success with comprehensive benefits and a supportive work environment.
            </p>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BenefitCard 
            title="Competitive Compensation"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 1v22M5 6h14M5 12h14M5 18h14" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Industry-leading salary packages with performance bonuses and equity opportunities for key roles.
          </BenefitCard>
          
          <BenefitCard 
            title="Flexible Work Arrangements"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Remote, hybrid, and flexible scheduling options to support your work-life balance needs.
          </BenefitCard>
          
          <BenefitCard 
            title="Professional Development"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8"/><path d="M4 10h16" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Annual learning budget, conference attendance, and mentorship programs for continuous growth.
          </BenefitCard>
          
          <BenefitCard 
            title="Health & Wellness"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l6 3v5c0 5-3.5 9-6 12-2.5-3-6-7-6-12V5l6-3z" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Comprehensive medical, dental, and vision insurance for you and your family.
          </BenefitCard>
          
          <BenefitCard 
            title="Team Culture"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="M2 20c1.5-3 4-5 6-5s4.5 2 6 5" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Regular team-building events, annual retreats, and collaborative work environment.
          </BenefitCard>
          
          <BenefitCard 
            title="Modern Equipment"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h16M7 4v16M12 4v16M17 4v16" stroke="currentColor" strokeWidth="1.8"/></svg>}
          >
            Latest technology and tools provided to ensure you can do your best work efficiently.
          </BenefitCard>
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section id="apply" className="py-15">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Reveal>
              <h3 className="text-4xl font-bold text-white mb-4">Start Your <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Journey</span> With Us</h3>
            </Reveal>
            <Reveal>
              <p className="text-white/70 text-lg">
                Ready to take the next step in your career? Submit your application and we'll be in touch shortly.
              </p>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="bg-gradient-to-br from-[#11181f] to-[#1a222c] rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <CareersForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-15 bg-gradient-to-r from-[#1a1f26] to-[#2d3748]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h3 className="text-4xl font-bold text-white mb-4">
              Don't See the <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Perfect Role?</span>
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-white/80 text-lg mb-8">
              We're always interested in connecting with exceptional talent. If you don't see a current opening that matches your skills, we'd still love to hear from you.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#f7e839] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                Send Us Your Portfolio
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="mailto:info@4kmedia.com" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                info@4kmedia.com
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </main>
)

export default Careers