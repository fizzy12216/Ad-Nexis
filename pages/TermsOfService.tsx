import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-navy mb-4 leading-tight">AdNexis Terms of Service & Business Agreement</h1>
          <p className="text-slatebrand font-medium">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-slatebrand space-y-8 leading-relaxed">
            <p className="text-xl">
              Welcome to AdNexis. By accessing our website and utilizing our Local SEO, GMB Optimization, or AEO services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Scope of Digital Marketing Services</h2>
              <p className="mb-4">AdNexis provides a variety of digital marketing solutions tailored for the Karachi market, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Business Profile (GMB) Management and verification assistance.</li>
                <li>Hyper-local SEO strategies for neighborhoods like DHA, Clifton, and Saddar.</li>
                <li>Answer Engine Optimization (AEO) for AI search visibility.</li>
                <li>Conversion rate optimization for WhatsApp-led business models.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">2. User Responsibilities</h2>
              <p>Users must provide accurate business information for local search auditing. Any misuse of the AdNexis platform for automated scraping, disruption of services, or unauthorized commercial reproduction of our proprietary frameworks is strictly prohibited and governed by the laws of Pakistan.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Intellectual Property Rights</h2>
              <p>The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. Unless expressly permitted in writing by AdNexis, you may not copy, distribute, or create derivative works from any part of our site.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Limitation of Liability and Rankings</h2>
              <p>While AdNexis employs industry-leading practices to improve search rankings, search engines frequently update algorithms. We do not guarantee specific positions in the local 3-pack or organic search, as these are controlled by third-party platforms like Google.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Governing Law</h2>
              <p>These terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes arising from these terms will be resolved in the courts of Karachi.</p>
            </div>

            <div className="bg-navy rounded-3xl p-10 text-white mt-12 shadow-xl">
              <h2 className="text-2xl font-bold text-neon mb-4">Questions Regarding Terms?</h2>
              <p className="mb-6">If you have any questions about these Terms of Service, please reach out to our legal compliance team in Karachi.</p>
              <div className="space-y-3">
                <p><strong>Email:</strong> <a href="mailto:adnexismarketingagency@gmail.com" className="hover:text-neon underline">adnexismarketingagency@gmail.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/923430418776" className="hover:text-neon underline">+92 343 0418776</a></p>
                <Link to="/contact" className="inline-block mt-4 bg-neon text-navy px-6 py-2 rounded-xl font-bold">Contact Support</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;