import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants.tsx';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold font-display mb-6 text-navy">Karachi Success Stories</h1>
          <p className="text-xl text-slatebrand max-w-3xl mx-auto leading-relaxed">
            From local clinics to large-scale restaurants, we help Karachi businesses scale their revenue through strategic local search dominance.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="lg:w-1/2 w-full">
                <img src={cs.image} alt={cs.client} className="rounded-3xl shadow-2xl w-full border-4 border-white" />
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <div className="inline-block bg-brand-50 text-mgreen px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide">
                    {cs.industry} • {cs.area}
                </div>
                <h2 className="text-4xl font-extrabold font-display text-navy">{cs.client} Dominance</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-navy">The Challenge:</h4>
                    <p className="text-slatebrand">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">The Solution:</h4>
                    <p className="text-slatebrand">{cs.result}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <p className="text-3xl font-black text-mgreen">{m.value}</p>
                      <p className="text-sm font-bold text-slatebrand uppercase tracking-widest">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-navy text-white mt-24 relative overflow-hidden">
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8">Ready to become our next success story?</h2>
            <p className="text-xl text-gray-400 mb-12">Your Karachi neighborhood is waiting. Claim your #1 spot today.</p>
            <Link 
              to="/contact" 
              className="bg-neon text-navy px-12 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-neon/20 hover:bg-mgreen hover:text-white inline-block"
            >
              Start Your Journey
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Portfolio;