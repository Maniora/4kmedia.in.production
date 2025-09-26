import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'

const ContactCard = ({ icon, title, value, description, delay, href, bgColor = "bg-[#1a1f26]" }) => (
  <Reveal as="div" className={`${bgColor} border border-white/10 rounded-xl p-8 hover-lift transition-all duration-300 hover:border-[#f7e839]/30`} delay={delay}>
    <div className="flex items-start gap-4">
      <div className={`h-12 w-12 rounded-lg ${bgColor} border border-white/10 grid place-items-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <a href={href} className="text-[#f7e839] hover:text-[#f5d428] font-semibold text-base transition-colors duration-200">
          {value}
        </a>
        <div className="text-white/60 text-sm mt-1">{description}</div>
      </div>
    </div>
  </Reveal>
)

const SocialCard = ({ platform, handle, href, icon, color }) => (
  <Reveal as="a" 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300 hover:border-[#f7e839]/30"
  >
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 grid place-items-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-semibold mb-1">{platform}</h4>
        <p className="text-white/70 text-sm">{handle}</p>
      </div>
    </div>
  </Reveal>
)

const Contact = () => (
  <main className="min-h-screen bg-gradient-to-b from-[#0a0c10] to-[#1a1f26]">
    {/* Hero Section */}
    <section className="relative py-10 lg:py-15 bg-white/3">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Let's Start Your </span>
              <span className="text-[#f7e839]">Project</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-white/70 mb-4">Zero to viral, we make it happen.</p>
          </Reveal>
          <Reveal>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your digital presence? Share your vision with us, and we'll craft a tailored strategy 
              to drive measurable results for your business.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Reveal as="div" className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start a Conversation</h2>
              <p className="text-white/70 text-lg">
                Tell us about your project goals and we'll get back to you within 24 hours with initial thoughts.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#11181f] to-[#1a222c] rounded-2xl p-8 border border-white/10 shadow-2xl">
              <ContactForm />
            </div>
          </Reveal>

          {/* Contact Information */}
          <div className="space-y-8">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-white/70 text-lg">
                  Multiple ways to connect with our team. We're here to help you succeed.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6">
              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#f7e839" strokeWidth="1.6"/>
                    <path d="M4 7l8 6 8-6" stroke="#f7e839" strokeWidth="1.6"/>
                  </svg>
                }
                title="Email Us"
                value="info@4kmedia.in"
                description="Typically respond within 2-4 hours"
                delay={100}
                href="mailto:info@4kmedia.in"
                bgColor="bg-[#1a1f26]"
              />

              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.92V20a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3.09a2 2 0 012 1.72 12.66 12.66 0 00.7 2.81 2 2 0 01-.45 2.11L9 10a16 16 0 006 6l.36-.36a2 2 0 012.11-.45 12.66 12.66 0 002.81.7A2 2 0 0121 16.92z" stroke="#f7e839" strokeWidth="1.6"/>
                  </svg>
                }
                title="Call Us"
                value="+91 99899 58238"
                description="Hyderabad, India • Monday-Friday, 9:00 AM - 6:00 PM IST"
                delay={200}
                href="tel:+919989958238"
                bgColor="bg-[#113126]"
              />

              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" stroke="#f7e839" strokeWidth="1.6"/>
                    <circle cx="12" cy="10" r="3" stroke="#f7e839" strokeWidth="1.6"/>
                  </svg>
                }
                title="Visit Us"
                value="Hyderabad, India"
                description="Schedule an in-person meeting"
                delay={300}
                href="https://maps.google.com"
                bgColor="bg-[#241b1b]"
              />
            </div>

            {/* Why Choose Us moved below as full-width card */}
          </div>
        </div>
      </div>
    </section>

    {/* Social Media Section */}
    <section className="mb-15 mt-0">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 max-w-6xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">Why Partner With 4kMedia?</h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white/80">Performance-driven strategies with measurable ROI</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white/80">Transparent reporting and clear KPI alignment</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white/80">Agile execution with rigorous quality assurance</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#f7e839] flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#11181f" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white/80">Dedicated account management and support</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Social Media Section */}
    <section className="py-10 lg:py-15 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect With Us</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">
              Follow our journey and stay updated with the latest digital marketing insights and success stories.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <SocialCard
            platform="Instagram"
            handle="@4kmediax"
            href="https://instagram.com/4kmediax"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="#f7e839" strokeWidth="1.6"/>
                <circle cx="12" cy="12" r="4" stroke="#f7e839" strokeWidth="1.6"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#f7e839"/>
              </svg>
            }
          />

          <SocialCard
            platform="YouTube"
            handle="@4kmediax"
            href="https://youtube.com/@4kmediax"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="3" stroke="#f7e839" strokeWidth="1.6"/>
                <path d="M10 9l5 3-5 3V9z" fill="#f7e839"/>
              </svg>
            }
          />

          <SocialCard
            platform="LinkedIn"
            handle="4KMEDIA"
            href="https://www.linkedin.com/company/4kmedia-in"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="#f7e839" strokeWidth="1.6"/>
              </svg>
            }
          />

          <SocialCard
            platform="WhatsApp"
            handle="+91 99899 58238"
            href="https://wa.me/919989958238"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 11a8 8 0 10-14.9 4.1L4 21l6-1.1A8 8 0 0020 11z" stroke="#f7e839" strokeWidth="1.6"/>
                <path d="M8.5 9.5c.5 2 2.5 3.5 3.5 4l1.5-1.2c.3-.2.7-.1.9.2l1 1.2" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin Your Digital Transformation?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's schedule a discovery call to discuss your project requirements and explore how we can help you achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                Schedule a Call
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="mailto:info@4kmedia.in" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                Send Quick Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
)

export default Contact