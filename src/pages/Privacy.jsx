import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'

const PrivacySection = ({ number, title, children, delay = 0 }) => (
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

const PrivacyList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <div className="h-1.5 w-1.5 rounded-full bg-[#f7e839] mt-2 flex-shrink-0"></div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Privacy = () => (
  <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
    <AnimatedIllustrations />
    {/* Hero Section */}
    <section className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              Privacy & Data Protection
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Privacy </span>
              <span className="text-[#f7e839]">Policy</span>
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
              At 4kMedia, we are committed to protecting your privacy and safeguarding your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and protect your data when you interact 
              with our website and services. By using our services, you consent to the practices described in this policy.
            </p>
          </Reveal>

          {/* Privacy Sections */}
          <div className="space-y-6">
            <PrivacySection number="01" title="Information We Collect" delay={30}>
              <p className="font-semibold text-white mb-2">Personal Information:</p>
              <PrivacyList items={[
                "Contact details: Name, email address, phone number, and business information",
                "Payment information: Billing details and transaction history",
                "Communication data: Messages, inquiries, and feedback provided through our channels",
                "Account information: Usernames, passwords, and preferences for service access"
              ]} />
              
              <p className="font-semibold text-white mt-4 mb-2">Non-Personal Information:</p>
              <PrivacyList items={[
                "Technical data: IP address, browser type, device information, and operating system",
                "Usage data: Pages visited, time spent, click patterns, and referral sources",
                "Analytics data: Website performance metrics and user behavior patterns",
                "Cookies and tracking data: Information collected through cookies and similar technologies"
              ]} />
            </PrivacySection>

            <PrivacySection number="02" title="How We Use Your Information" delay={60}>
              <PrivacyList items={[
                "Service delivery: Providing and maintaining our digital marketing services",
                "Client communication: Responding to inquiries, sending updates, and providing support",
                "Business operations: Processing payments, managing accounts, and improving services",
                "Marketing and analytics: Sending promotional materials and analyzing service usage",
                "Legal compliance: Meeting regulatory requirements and preventing fraudulent activities",
                "Service improvement: Enhancing user experience and developing new features"
              ]} />
            </PrivacySection>

            <PrivacySection number="03" title="Data Sharing and Disclosure" delay={90}>
              <PrivacyList items={[
                "We do not sell, trade, or rent your personal information to third parties",
                "Trusted service providers: Data processors who assist in service delivery under strict confidentiality",
                "Legal requirements: When required by law, court order, or governmental authorities",
                "Business transfers: In connection with mergers, acquisitions, or business transfers",
                "With your consent: When you explicitly authorize specific data sharing arrangements"
              ]} />
            </PrivacySection>

            <PrivacySection number="04" title="Data Security Measures" delay={120}>
              <PrivacyList items={[
                "Encryption technologies: Protecting data in transit and at rest using industry standards",
                "Access controls: Limiting data access to authorized personnel on a need-to-know basis",
                "Regular security assessments: Continuous monitoring and vulnerability testing",
                "Employee training: Ensuring staff understand and adhere to data protection protocols",
                "Incident response: Established procedures for addressing data security breaches"
              ]} />
            </PrivacySection>

            <PrivacySection number="05" title="Your Data Protection Rights" delay={150}>
              <PrivacyList items={[
                "Right to access: Request copies of your personal information we hold",
                "Right to rectification: Correct inaccurate or incomplete personal data",
                "Right to erasure: Request deletion of your personal information under certain conditions",
                "Right to restrict processing: Limit how we use your data in specific circumstances",
                "Right to data portability: Receive your data in a structured, machine-readable format",
                "Right to object: Opt-out of certain data processing activities, including marketing"
              ]} />
            </PrivacySection>

            <PrivacySection number="06" title="Cookies and Tracking Technologies" delay={180}>
              <PrivacyList items={[
                "Essential cookies: Required for basic website functionality and security",
                "Analytics cookies: Helping us understand how visitors interact with our website",
                "Marketing cookies: Used to deliver relevant advertisements and track campaign performance",
                "Preferences cookies: Remembering your settings and preferences for enhanced experience",
                "You can manage cookie preferences through your browser settings or our consent manager"
              ]} />
            </PrivacySection>

            <PrivacySection number="07" title="Data Retention Periods" delay={210}>
              <PrivacyList items={[
                "Client data: Retained for the duration of our business relationship and as required by law",
                "Marketing data: Kept until you unsubscribe or request deletion",
                "Analytics data: Anonymous data may be retained indefinitely for statistical purposes",
                "Legal requirements: Certain data may be retained to comply with regulatory obligations",
                "We regularly review retention periods and delete unnecessary data securely"
              ]} />
            </PrivacySection>

            <PrivacySection number="08" title="International Data Transfers" delay={240}>
              <PrivacyList items={[
                "We primarily store and process data within India",
                "When international transfers occur, we ensure adequate protection measures are in place",
                "We use standard contractual clauses and other approved mechanisms for cross-border transfers",
                "Third-party service providers are vetted for compliance with international data protection standards"
              ]} />
            </PrivacySection>

            <PrivacySection number="09" title="Third-Party Websites and Services" delay={270}>
              <p>
                Our website may contain links to third-party websites and services. This Privacy Policy 
                does not apply to those third-party sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
            </PrivacySection>

            <PrivacySection number="10" title="Children's Privacy" delay={300}>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children. If we become aware that we have collected 
                personal data from a child without parental consent, we will take steps to delete that information.
              </p>
            </PrivacySection>

            <PrivacySection number="11" title="Policy Updates and Changes" delay={330}>
              <PrivacyList items={[
                "We may update this Privacy Policy to reflect changes in our practices or legal requirements",
                "Significant changes will be communicated through our website or direct notifications",
                "Continued use of our services after changes constitutes acceptance of the updated policy",
                "We encourage regular review of this policy to stay informed about how we protect your data"
              ]} />
            </PrivacySection>

            <PrivacySection number="12" title="User-Generated Content" delay={360}>
              <PrivacyList items={[
                "Users are solely responsible for content they submit through our platforms",
                "We reserve the right to moderate, edit, or remove content that violates our guidelines",
                "Prohibited content includes hate speech, harassment, illegal activities, and misinformation",
                "By submitting content, users grant 4kMedia a license to use, modify, and display it as necessary"
              ]} />
            </PrivacySection>

            <PrivacySection number="13" title="Data Protection Officer" delay={390}>
              <p>
                We have designated a Data Protection Officer to oversee compliance with data protection laws. 
                For any privacy-related concerns or requests, please contact our DPO at the information provided below.
              </p>
            </PrivacySection>
          </div>

          {/* Contact Section */}
          <Reveal as="div" className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-8 text-center border border-white/10 shadow-2xl mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Privacy Concerns or Questions?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions about this Privacy Policy, wish to exercise your data protection rights, 
              or have concerns about how we handle your personal information, please contact our Data Protection Officer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:team@4kmedia.in" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200"
              >
                Contact DPO
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a 
                href="mailto:team@4kmedia.in" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                General Inquiries
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#f7e839] text-[#f7e839] font-semibold hover:bg-[#f7e839]/10 transition-all duration-200"
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </main>
)

export default Privacy
