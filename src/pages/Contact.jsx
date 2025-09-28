import React from 'react'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import ContactAnimation from '../components/ContactAnimation'

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

const Contact = () => (
  <main className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
    <AnimatedIllustrations />

    {/* Hero Section */}
    <section className="relative py-15 bg-white/3 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-gradient-to-r from-[#f7e839] to-[#f5d428] bg-clip-text text-white text-transparent font-semibold border border-[#f7e839]/20 px-6 py-3 rounded-full mb-8">
              Professional Services
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl mb-8">
              <span className="text-white">Transform Your </span>
              <span className="text-[#f7e839]">Digital Presence</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12">
              Partner with industry experts to drive measurable growth, enhance brand visibility, and achieve sustainable business success through strategic digital solutions.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-15">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-stretch">
          {/* Contact Form */}
          <Reveal as="div" className="space-y-8">
            <div className='mb-8'>
              <h2 className="text-4xl font-bold text-white mb-6">Let's Discuss <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Your Project</span></h2>
              <p className="text-white/70 leading-relaxed">
                Share your vision with our experts. We'll provide strategic insights and a customized roadmap within 24 hours.
              </p>
            </div>
              <ContactForm />
            
          </Reveal>

          {/* Contact Information */}
          <div className="flex h-full">
            <Reveal>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 h-full">
                  <div className="text-center mb-4">
                    <h4 className="text-white font-semibold text-lg mb-2">Your Contact Journey</h4>
                    <p className="text-white/70 text-sm">Reach our team and get a response within 24 hours</p>
                  </div>
                  <ContactAnimation />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;