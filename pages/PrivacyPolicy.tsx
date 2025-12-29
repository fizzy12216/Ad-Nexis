import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-navy mb-4 leading-tight">AdNexis Privacy Policy & Data Protection</h1>
          <p className="text-slatebrand font-medium">Last Updated: {effectiveDate}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-slatebrand space-y-8 leading-relaxed">
            <p className="text-xl">
              At AdNexis Digital Marketing, based in Karachi, we are committed to maintaining the trust and confidence of our visitors. This policy outlines how we handle your personal information across our local SEO and digital marketing consultancy services.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect and Process</h2>
              <p className="mb-4">We collect information to provide better services to all our users. The types of personal information we collect include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Details:</strong> Your name, professional email address, and WhatsApp contact number provided via our audit forms.</li>
                <li><strong>Business Insights:</strong> Information about your business category, location (DHA, Clifton, etc.), and current search visibility.</li>
                <li><strong>Technical Analytics:</strong> IP addresses, browser types, and behavioral data to optimize our hyper-local marketing content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">2. Strategic Use of Your Data</h2>
              <p className="mb-4">Your information is used strictly for professional purposes, specifically to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conduct comprehensive GMB and Google Maps audits for your Karachi-based business.</li>
                <li>Improve our proprietary AEO (Answer Engine Optimization) frameworks.</li>
                <li>Communicate critical search engine algorithm updates that affect your local ranking.</li>
                <li>Personalize your experience with neighborhood-specific marketing insights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Data Integrity and Sharing</h2>
              <p>AdNexis does not sell, trade, or rent user personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Security Measures</h2>
              <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>
            </div>

            <div className="bg-navy rounded-3xl p-10 text-white mt-12 shadow-xl">
              <h2 className="text-2xl font-bold text-neon mb-4">Data Access Requests</h2>
              <p className="mb-6">Under relevant data protection laws, you have the right to request access to the data we hold about you. For any inquiries, please contact our Karachi office.</p>
              <div className="space-y-3">
                <p><strong>Email:</strong> <a href="mailto:adnexismarketingagency@gmail.com" className="hover:text-neon underline">adnexismarketingagency@gmail.com</a></p>
                <p><strong>Support:</strong> <a href="tel:+923430418776" className="hover:text-neon underline">+92 343 0418776</a></p>
                <Link to="/" className="inline-block mt-4 text-neon font-bold hover:underline">← Return to Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;