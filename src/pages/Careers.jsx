import React, { useState, useCallback, useEffect } from 'react'
import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import CareersForm from '../components/CareersForm'
import JourneyAnimation from '../components/JourneyAnimation'
import SalaryAnimation from '../components/SalaryAnimation'
import HealthAnimation from '../components/HealthAnimation'
import LearningAnimation from '../components/LearningAnimation'
import OutdoorAnimation from '../components/OutdoorAnimation'
import FoodAnimation from '../components/FoodAnimation'
import WorklifeAnimation from '../components/WorklifeAnimation'

const CareerCard = ({ title, children, icon, type = "Full-time", location = "Remote", onKnowMore, jobDetails }) => (
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
    <div className="flex gap-3">
      <button
        onClick={() => onKnowMore({ title, description: children, type, location, icon, ...jobDetails })}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
      >
        Know More
      </button>
      <a href="#apply" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
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

// Job Modal component for displaying detailed job information
const JobModal = ({ open, onClose, job }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && open) {
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

  // Don't render if modal is not open
  if (!open || !job) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}
    >
      <div
        className="bg-gradient-to-br from-[#181f29] to-[#1a1f26] rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 relative border border-white/10"
        onClick={e => e.stopPropagation()}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold transition-colors duration-200 z-10"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>

        {/* Job header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 grid place-items-center rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 text-[#f7e839]">
            {job.icon}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{job.title}</h3>
            <div className="flex gap-3">
              <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{job.type}</span>
              <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{job.location}</span>
            </div>
          </div>
        </div>

        {/* Job content */}
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Job Description</h4>
            <p className="text-white/80 text-lg leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          {job.requirements && (
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Requirements</h4>
              <div className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-white/70 leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && (
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Key Responsibilities</h4>
              <div className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-white/70 leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && (
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">What We Offer</h4>
              <div className="space-y-3">
                {job.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-white/70 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          {/* <div className="pt-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200"
            >
              Apply for This Position
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleKnowMore = useCallback((job) => {
    console.log('Opening modal for job:', job.title);
    setSelectedJob(job);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    console.log('Closing modal');
    setModalOpen(false);
    setSelectedJob(null);
  }, []);

  const jobsData = [
    {
      title: "Senior Graphic Designer",
      type: "Full-time",
      location: "Remote",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20h16M6 16h12M8 12h8M10 8h4" stroke="currentColor" strokeWidth="1.8"/></svg>,
      description: "Lead visual design projects from concept to completion. Create compelling graphics for digital campaigns, branding, and marketing materials.",
      requirements: [
        "5+ years of graphic design experience",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio showcasing creative work",
        "Experience with digital marketing materials",
        "Excellent communication and collaboration skills"
      ],
      responsibilities: [
        "Design visual concepts and layouts for various marketing materials",
        "Collaborate with marketing team to develop creative strategies",
        "Create brand guidelines and maintain visual consistency",
        "Manage multiple projects simultaneously",
        "Present design concepts to stakeholders"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible remote work arrangements",
        "Professional development opportunities",
        "Latest design tools and software",
        "Creative freedom and autonomy"
      ]
    },
    {
      title: "Social Media Strategist",
      type: "Full-time",
      location: "Hybrid",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.8"/></svg>,
      description: "Develop and execute social media strategies across multiple platforms. Analyze performance metrics and optimize campaigns for maximum engagement.",
      requirements: [
        "3+ years of social media marketing experience",
        "Experience with major social media platforms",
        "Analytics and reporting skills",
        "Content creation and copywriting abilities",
        "Knowledge of social media advertising"
      ],
      responsibilities: [
        "Develop and implement social media strategies",
        "Create engaging content calendars",
        "Monitor and analyze social media performance",
        "Manage social media advertising campaigns",
        "Engage with online communities and influencers"
      ],
      benefits: [
        "Hybrid work model with office flexibility",
        "Performance-based bonuses",
        "Social media conference attendance",
        "Creative content creation tools",
        "Growth opportunities in digital marketing"
      ]
    },
    {
      title: "Senior Video Editor",
      type: "Contract",
      location: "Remote",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 7l8 5-8 5V7z" fill="currentColor"/></svg>,
      description: "Create high-impact video content for advertising, social media, and corporate communications. Expertise in Adobe Creative Suite required.",
      requirements: [
        "4+ years of video editing experience",
        "Expert proficiency in Adobe Premiere Pro and After Effects",
        "Experience with motion graphics and animation",
        "Strong storytelling and visual communication skills",
        "Portfolio demonstrating diverse video projects"
      ],
      responsibilities: [
        "Edit and produce high-quality video content",
        "Create motion graphics and animations",
        "Collaborate with creative team on video concepts",
        "Manage video production timelines",
        "Optimize videos for different platforms and formats"
      ],
      benefits: [
        "Competitive contract rates",
        "Flexible project-based work",
        "Access to professional video equipment",
        "Creative project variety",
        "Remote work flexibility"
      ]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "On-site",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/></svg>,
      description: "Design intuitive user experiences for web and mobile applications. Conduct user research and create wireframes, prototypes, and final designs.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Experience with user research and testing",
        "Knowledge of design systems and accessibility",
        "Strong portfolio of digital product designs"
      ],
      responsibilities: [
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Collaborate with developers and product managers",
        "Develop and maintain design systems",
        "Ensure designs meet accessibility standards"
      ],
      benefits: [
        "On-site collaboration with design team",
        "Access to user research tools and resources",
        "Professional development and training",
        "Modern office environment",
        "Opportunity to work on diverse projects"
      ]
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
            {jobsData.map((job, index) => (
          <CareerCard 
                key={job.title}
                title={job.title}
                type={job.type}
                location={job.location}
                icon={job.icon}
                onKnowMore={handleKnowMore}
                jobDetails={job}
              >
                {job.description}
          </CareerCard>
            ))}
        </div>
      </div>
    </section>

    {/* Why Choose 4kMedia - Main Section */}
    <section className="py-12 md:py-14 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">4kMedia?</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              We invest in our team's success with comprehensive benefits and a supportive work environment.
            </p>
          </Reveal>
        </div>
        
        {/* Benefits Section - Alternating Illustration and Text Sides */}
        <div className='py-2'>
          <div className="space-y-6 md:space-y-7 max-w-6xl mx-auto">
            {/* 1. Competitive Salary (Image Left) */}
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Animated Illustration */}
                <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                  <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                    <SalaryAnimation />
                  </div>
                </div>
                {/* Right: Text Content */}
                <div className="p-5 md:p-6 order-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1v22" stroke="#f7e839" strokeWidth="1.8"/>
                        <path d="M5 6h14M5 12h14M5 18h14" stroke="#f7e839" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Competitive Salary</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Industry-leading compensation packages that reward your skills and dedication.
                  </p>
                </div>
              </div>
            </Reveal>
            {/* 2. Health Insurance (Image Right) */}
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Text Content */}
                <div className="p-5 md:p-6 order-2 lg:order-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l6 3v5c0 5-3.5 9-6 12-2.5-3-6-7-6-12V5l6-3z" stroke="#f7e839" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Health Insurance</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Comprehensive health coverage for you and your family members.
                  </p>
                </div>
                {/* Right: Animated Illustration */}
                <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                  <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                    <HealthAnimation />
                  </div>
                </div>
              </div>
            </Reveal>
            {/* 3. Work-Life Balance (Image Left) */}
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Animated Illustration */}
                <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                  <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                    <WorklifeAnimation />
                  </div>
                </div>
                {/* Right: Text Content */}
                <div className="p-5 md:p-6 order-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="#f7e839" strokeWidth="1.8"/>
                        <path d="M12 8v4l3 3" stroke="#f7e839" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Work-Life Balance</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Flexible working hours and remote options to help you maintain a healthy lifestyle.
                  </p>
                </div>
              </div>
            </Reveal>
            {/* 4. Learning & Growth (Image Right) */}
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Text Content */}
                <div className="p-5 md:p-6 order-2 lg:order-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="6" width="16" height="12" stroke="#f7e839" strokeWidth="1.8"/>
                        <path d="M4 10h16" stroke="#f7e839" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Learning & Growth</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Continuous learning opportunities, workshops, and skill development programs.
                  </p>
                </div>
                {/* Right: Animated Illustration */}
                <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                  <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                    <LearningAnimation />
                  </div>
                </div>
              </div>
            </Reveal>
            {/* 5. Outdoor Activities (Image Left) */}
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Animated Illustration */}
                <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                  <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                    <OutdoorAnimation />
                  </div>
                </div>
                {/* Right: Text Content */}
                <div className="p-5 md:p-6 order-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="16" width="18" height="5" rx="2" stroke="#f7e839" strokeWidth="1.8"/>
                        <path d="M7 16V8a5 5 0 0 1 10 0v8" stroke="#f7e839" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Outdoor Activities</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Regular team events, outdoor activities, and adventure trips to build stronger bonds.
                  </p>
                </div>
              </div>
            </Reveal>
            {/* 6. Food & Perks (Image Right) */}
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Text Content */}
                <div className="p-5 md:p-6 order-2 lg:order-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="2" width="12" height="20" rx="6" stroke="#f7e839" strokeWidth="1.8"/>
                        <path d="M9 7h6" stroke="#f7e839" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Food & Perks</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Free meals, snacks, and various perks to keep you energized and motivated.
                  </p>
                </div>
                {/* Right: Animated Illustration */}
                <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                  <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                    <FoodAnimation />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section id="apply" className="py-15">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
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
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Application Form */}
          <Reveal>
            <div className="bg-gradient-to-br from-[#11181f] to-[#1a222c] rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <CareersForm />
            </div>
          </Reveal>

            {/* Journey Animation */}
            <Reveal>
              <div className="h-96 lg:h-full min-h-[400px]">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 h-full">
                  <div className="text-center mb-4">
                    <h4 className="text-white font-semibold text-lg mb-2">Your Career Journey</h4>
                    <p className="text-white/70 text-sm">Watch your professional growth unfold</p>
                  </div>
                  <JourneyAnimation />
                </div>
              </div>
            </Reveal>
          </div>
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
              <a href="mailto:team@4kmedia.in" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                team@4kmedia.in
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-[10000]">
          Modal Open: {modalOpen.toString()}
        </div>
      )}

      {/* Job Modal */}
      <JobModal 
        open={modalOpen} 
        onClose={handleCloseModal} 
        job={selectedJob} 
      />
  </main>
  );
};

export default Careers
