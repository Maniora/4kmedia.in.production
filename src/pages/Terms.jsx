import Reveal from '../components/Reveal'

const TermsSection = ({ number, title, children, delay = 0 }) => (
  <Reveal as="section" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 mb-6" delay={delay}>
    <div className="flex items-start gap-4 mb-4">
      <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-[#f7e839] to-[#f5d428] text-[#11181f] font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
    <div className="text-white/80 leading-relaxed space-y-3">
      {children}
    </div>
  </Reveal>
)

const TermsList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <div className="h-1.5 w-1.5 rounded-full bg-[#f7e839] mt-2 flex-shrink-0"></div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Terms = () => (
  <main className="min-h-screen bg-gradient-to-b from-[#0a0c10] to-[#1a1f26]">
    {/* Hero Section */}
    <section className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              Legal Documentation
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">Terms & </span>
              <span className="text-[#f7e839]">Conditions</span>
            </h1>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-10 lg:pt-0 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Reveal as="div" className="bg-gradient-to-br from-[#11181f] to-[#1a222c] rounded-2xl p-8 border border-white/10 shadow-2xl mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              These Terms & Conditions govern your engagement with 4kMedia and outline the rules and regulations 
              for accessing our digital marketing services. By using our services, you acknowledge that you have 
              read, understood, and agree to be bound by these terms.
            </p>
          </Reveal>

          {/* Terms Sections */}
          <div className="space-y-6">
            <TermsSection number="01" title="Enrollment & Service Usage" delay={30}>
              <TermsList items={[
                "Clients must provide accurate and complete information during registration and service inquiries",
                "4kMedia reserves the right to modify service offerings, pricing structures, and delivery schedules as necessary",
                "All services are subject to availability and acceptance of our service agreement"
              ]} />
            </TermsSection>

            <TermsSection number="02" title="Service-Related Terms" delay={60}>
              <TermsList items={[
                "Services are provided according to the specifications outlined in the signed contract or engagement letter",
                "While we ensure professional execution of digital strategies, specific marketing outcomes cannot be guaranteed",
                "Clients must adhere to agreed timelines for content approvals, feedback, and revision cycles"
              ]} />
            </TermsSection>

            <TermsSection number="03" title="Pricing and Payment Terms" delay={90}>
              <TermsList items={[
                "Full payment is required before service commencement unless otherwise specified in the contract",
                "All payments are non-refundable except under circumstances outlined in our refund policy",
                "Quoted fees exclude third-party costs including advertising budgets, hosting, domain registration, SSL certificates, and premium software licenses"
              ]} />
            </TermsSection>

            <TermsSection number="04" title="Refund Policy" delay={120}>
              <TermsList items={[
                "Refunds are granted only when services are not delivered as per agreed terms and specifications",
                "No refunds are provided for completed services or ongoing monthly retainer agreements",
                "Refund requests must be submitted in writing within 4 business days of service commencement"
              ]} />
            </TermsSection>

            <TermsSection number="05" title="Intellectual Property Rights" delay={150}>
              <TermsList items={[
                "All creative content, strategic plans, designs, and proprietary methodologies developed by 4kMedia remain our intellectual property",
                "Clients receive limited license to use delivered content exclusively for their business operations",
                "Additional usage rights require explicit written agreement and may involve additional fees"
              ]} />
            </TermsSection>

            <TermsSection number="06" title="Client Responsibilities" delay={180}>
              <TermsList items={[
                "Timely provision of necessary materials, feedback, and approvals for campaign progression",
                "Adherence to content guidelines and brand standards throughout the engagement",
                "Prohibition of unauthorized reproduction, reselling, or misuse of delivered work products"
              ]} />
            </TermsSection>

            <TermsSection number="07" title="Data Protection and Privacy" delay={210}>
              <TermsList items={[
                "Client data is handled in accordance with our comprehensive Privacy Policy",
                "By engaging our services, you consent to necessary data processing for service delivery",
                "We implement industry-standard security measures to protect client information"
              ]} />
            </TermsSection>

            <TermsSection number="08" title="Third-Party Services" delay={240}>
              <TermsList items={[
                "We may utilize third-party tools and platforms for analytics, advertising, and service enhancement",
                "4kMedia is not liable for service interruptions, policy changes, or failures of third-party providers",
                "Clients are responsible for maintaining their accounts with third-party service providers"
              ]} />
            </TermsSection>

            <TermsSection number="09" title="Indemnification" delay={270}>
              <p>
                Clients agree to indemnify and hold harmless 4kMedia, its officers, directors, and employees from 
                any claims, damages, liabilities, and expenses arising from service use, violation of these terms, 
                or infringement of third-party rights.
              </p>
            </TermsSection>

            <TermsSection number="10" title="Limitation of Liability" delay={300}>
              <p>
                4kMedia's total liability for any claims shall not exceed the total fees paid by the client for 
                the specific service giving rise to the claim. We are not liable for indirect, incidental, 
                special, or consequential damages arising from service use.
              </p>
            </TermsSection>

            <TermsSection number="11" title="Modification of Terms" delay={330}>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Continued use of our services 
                after changes constitutes acceptance of the modified terms. Clients are responsible for regularly 
                reviewing this document for updates.
              </p>
            </TermsSection>

            <TermsSection number="12" title="Governing Law and Jurisdiction" delay={360}>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any legal disputes 
                shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </TermsSection>

              <TermsSection number="13" title="Dispute Resolution" delay={390}>
              <TermsList items={[
                "Parties agree to attempt resolution of disputes through good-faith negotiations",
                "If unresolved, disputes shall proceed to mediation before pursuing legal action",
                "Arbitration proceedings, if necessary, will be conducted in New Delhi, India"
              ]} />
            </TermsSection>

              <TermsSection number="14" title="Termination" delay={420}>
              <TermsList items={[
                "Either party may terminate services with 30 days written notice for material breaches",
                "Termination does not relieve clients of outstanding payment obligations",
                "Upon termination, clients must cease using all proprietary materials provided by 4kMedia"
              ]} />
            </TermsSection>

          <TermsSection number="15" title="Force Majeure" delay={450}>
              <p>
                4kMedia is not liable for failure to perform obligations due to circumstances beyond our 
                reasonable control, including natural disasters, acts of government, internet outages, 
                or other force majeure events.
              </p>
            </TermsSection>
          </div>

          {/* Contact Section */}
          <Reveal as="div" className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-8 text-center border border-white/10 shadow-2xl mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions or concerns regarding these Terms & Conditions, 
              please don't hesitate to contact our legal team.
            </p>
            <a 
              href="mailto:legal@4kmedia.in" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200"
            >
              Contact Legal Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  </main>
)

export default Terms