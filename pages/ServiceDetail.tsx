import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '../constants.tsx';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <Navigate to="/" />;

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5">
              <Link to="/" className="text-brand-400 font-bold mb-4 inline-block hover:underline">← All Services</Link>
              <h1 className="text-4xl lg:text-6xl font-extrabold font-display mb-6">{service.title}</h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                {service.shortDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-bold transition-all">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="md:w-2/5 text-9xl text-center opacity-20 select-none">
              {service.icon}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold font-display mb-6">Why It Matters for Your Karachi Business</h2>
              <div className="prose prose-lg text-gray-600 mb-12">
                <p>{service.fullDesc}</p>
              </div>
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-1">✓</span>
                    <span className="text-gray-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-12 border border-gray-100">
              <h3 className="text-2xl font-bold mb-8">Our Optimization Process</h3>
              <div className="space-y-12">
                {service.process.map((p, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl relative z-10">
                      {i + 1}
                    </div>
                    {i < service.process.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px bg-brand-200 z-0 h-16"></div>
                    )}
                    <div>
                      <p className="text-lg font-bold text-slate-900">{p}</p>
                      <p className="text-gray-500 mt-1">Specialized strategy for the Karachi local market.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to scale your {service.title} in Karachi?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all">Book Audit Now</Link>
             <a 
              href="https://wa.me/923430418776" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all"
             >
                WhatsApp Consultation
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;