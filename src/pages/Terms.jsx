import React from 'react';
import Reveal from '../components/Reveal';
import AnimatedIllustrations from '../components/AnimatedIllustrations';

const Terms = () => {
  return (
    <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
      <AnimatedIllustrations />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white/3">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
              <p className="text-white/70 text-lg">
                Please read these terms carefully before using our services
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-white text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
                <p className="text-white/70 mb-6">
                  By accessing and using 4kMedia's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">2. Use License</h2>
                <p className="text-white/70 mb-4">
                  Permission is granted to temporarily download one copy of the materials on 4kMedia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-white text-2xl font-bold mb-6">3. Service Description</h2>
                <p className="text-white/70 mb-6">
                  4kMedia provides digital marketing services including but not limited to SEO, paid media, content creation, web design, and social media management. We reserve the right to modify or discontinue any service at any time without notice.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">4. Client Responsibilities</h2>
                <p className="text-white/70 mb-4">
                  As a client, you agree to:
                </p>
                <ul className="text-white/70 mb-6 list-disc list-inside space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Make timely payments as agreed</li>
                  <li>Provide necessary access to accounts and platforms</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                </ul>

                <h2 className="text-white text-2xl font-bold mb-6">5. Payment Terms</h2>
                <p className="text-white/70 mb-6">
                  Payment terms will be specified in individual service agreements. Late payments may result in service suspension. All fees are non-refundable unless otherwise specified in writing.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">6. Intellectual Property</h2>
                <p className="text-white/70 mb-6">
                  All content, trademarks, and intellectual property on this website are owned by 4kMedia or its licensors. Work created for clients will be owned by the client upon full payment, except for proprietary methodologies and tools.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">7. Limitation of Liability</h2>
                <p className="text-white/70 mb-6">
                  In no event shall 4kMedia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 4kMedia's website, even if 4kMedia or a 4kMedia authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">8. Privacy Policy</h2>
                <p className="text-white/70 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">9. Termination</h2>
                <p className="text-white/70 mb-6">
                  Either party may terminate services with 30 days written notice. Upon termination, all outstanding payments become due immediately.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">10. Governing Law</h2>
                <p className="text-white/70 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">11. Changes to Terms</h2>
                <p className="text-white/70 mb-6">
                  4kMedia reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-white text-2xl font-bold mb-6">12. Contact Information</h2>
                <p className="text-white/70 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/70 mb-2"><strong>Email:</strong>team@4kmedia.in</p>
                  <p className="text-white/70 mb-2"><strong>Website:</strong> https://4kmedia.in</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f7e839]/10 to-[#f7e839]/5">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                If you have any questions or need clarification about our terms of service, we're here to help.
              </p>
              <a 
                href="/contact" 
                className="bg-[#f7e839] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#f7e839]/90 transition-colors inline-block"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Terms;
