
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-navy mb-4">Privacy Policy</h1>
          <p className="text-slatebrand font-medium">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-slatebrand space-y-8">
            <p className="text-xl leading-relaxed">
              At AdNexis, your privacy is important. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email, phone, WhatsApp number, business details.</li>
                <li><strong>Usage Data:</strong> Pages visited, clicks, time on site.</li>
                <li><strong>Cookies & Tracking:</strong> To improve site performance, understand trends, and deliver relevant content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver and improve our services.</li>
                <li>Respond to inquiries and support requests.</li>
                <li>Send updates, newsletters, or promotional content (if opted-in).</li>
                <li>Analyze site usage to enhance user experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Information Sharing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not sell or rent your information.</li>
                <li>May share with trusted third-party service providers (WhatsApp integrations, email services).</li>
                <li>May disclose if required by law or to protect rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Cookies</h2>
              <p>Improve functionality, understand user behavior, and enhance hyper-local content. Users can manage cookies via browser settings.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Security</h2>
              <p>We implement standard security measures; however, absolute protection cannot be guaranteed.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">6. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your personal data.</li>
                <li>Opt-out of communications.</li>
                <li>Withdraw consent at any time.</li>
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
              <h2 className="text-2xl font-bold text-navy mb-4">7. Updates</h2>
              <p>We may update this policy; latest version available on our website.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
