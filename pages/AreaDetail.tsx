import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { AREAS, SERVICES } from '../constants.tsx';

const AreaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = AREAS.find(a => a.slug === slug);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    businessName: '',
    phone: '',
    industry: 'Restaurant'
  });

  if (!area) return <Navigate to="/" />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `*New ${area.name} Area Audit Request*%0A` +
      `--------------------------%0A` +
      `*Business:* ${formState.businessName}%0A` +
      `*Phone:* ${formState.phone}%0A` +
      `*Industry:* ${formState.industry}%0A` +
      `*Area:* ${area.name}`;
    const whatsappUrl = `https://wa.me/923430418776?text=${waMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
          <h2 className="text-2xl font-bold mb-4">Request Forwarded!</h2>
          <p className="text-gray-600 mb-8">We have received your request for {area.name}. Check your WhatsApp for a confirmation message from our team.</p>
          <button onClick={() => setIsSubmitted(false)} className="text-brand-600 font-bold">New Audit Request</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-brand-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold font-display mb-6">Local SEO in <span className="text-brand-400">{area.name}</span></h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto mb-10">
            Capture high-intent traffic in {area.name} Karachi. We specialize in neighborhood dominance and lead generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {area.keywords.map((k, i) => (
                <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/10">#{k.replace(/\s+/g, '')}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold font-display mb-6">Hyper-Local Marketing Expertise for {area.name}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {area.description} Businesses in {area.name} face unique competition. We don't just "do SEO"; we build a digital moat around your physical location.
              </p>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-2xl">📍</div>
                    <div>
                        <h4 className="font-bold text-lg">Google Maps Dominance</h4>
                        <p className="text-gray-500">Optimizing for local {area.name} search clusters.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-2xl">💬</div>
                    <div>
                        <h4 className="font-bold text-lg">WhatsApp Lead Funnels</h4>
                        <p className="text-gray-500">Directly converting {area.name} searchers into customers.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
               <h3 className="text-2xl font-bold mb-6 text-center">Get Your {area.name} SEO Audit</h3>
               <form className="space-y-4" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    required
                    placeholder="Business Name" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none" 
                    value={formState.businessName}
                    onChange={(e) => setFormState({...formState, businessName: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none" 
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                  <button type="submit" className="w-full bg-brand-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all">Submit Audit Request</button>
               </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Core Services in {area.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map(s => (
                    <div key={s.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-4xl mb-4">{s.icon}</div>
                        <h4 className="font-bold mb-2">{s.title}</h4>
                        <Link to={`/services/${s.slug}`} className="text-brand-600 text-sm font-bold">Learn More →</Link>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AreaDetail;