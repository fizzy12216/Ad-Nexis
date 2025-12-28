
import React from 'react';

const TermsOfService: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-navy mb-4">Terms of Service</h1>
          <p className="text-slatebrand font-medium">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-slatebrand space-y-8">
            <p className="text-xl leading-relaxed">
              These Terms govern your use of the AdNexis website and services. By using our website, you agree to these terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Local SEO, Google Maps Marketing, GMB Optimization, Hyper-Local Marketing, AEO/AI Search.</li>
                <li>Website content, blogs, and AI/voice search optimization consulting.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">2. Use of Website</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lawful use only.</li>
                <li>No hacking, disruption, or misuse.</li>
                <li>No unauthorized copying or commercial use of content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All website content and branding are property of AdNexis.</li>
                <li>No reproduction or derivative works without permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Payments & Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paid services as per agreement.</li>
                <li>Services start after payment confirmation.</li>
                <li>Refunds and cancellations follow contract terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Third-Party Links</h2>
              <p>External links may exist; AdNexis is not responsible for external content.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">6. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Not liable for indirect or consequential damages.</li>
                <li>Accuracy of rankings/results not guaranteed.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">7. Termination</h2>
              <p>Services or access may be suspended for violating terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">8. Governing Law</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pakistan laws apply.</li>
                <li>Jurisdiction: Karachi.</li>
              </ul>
            </div>

            <div className="bg-navy rounded-3xl p-8 text-white mt-12">
              <h2 className="text-2xl font-bold text-neon mb-4">Contact us</h2>
              <div className="space-y-2">
                <p>Email: <a href="mailto:adnexismarketingagency@gmail.com" className="hover:text-neon underline">adnexismarketingagency@gmail.com</a></p>
                <p>Phone / WhatsApp: <a href="tel:+923430418776" className="hover:text-neon underline">+92 343 0418776</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">9. Updates</h2>
              <p>Terms may be updated; latest version on website.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
