import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, AREAS, CASE_STUDIES } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
          <svg width="800" height="800" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-neon" /></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-brand-50 text-mgreen px-4 py-2 rounded-full text-sm font-bold mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-mgreen"></span>
                </span>
                <span>Karachi's #1 Local SEO Agency</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold font-display leading-tight mb-6 text-navy">
                Dominating <span className="text-mgreen">Local Search</span> in Karachi.
              </h1>
              <p className="text-xl text-slatebrand mb-10 max-w-2xl">
                We put your Karachi business in front of customers exactly when they search. From DHA to North Nazimabad, dominate Google Maps, GMB, and AI-driven voice search.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="bg-neon text-navy px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-neon/20 hover:bg-mgreen hover:text-white transform transition-all hover:scale-105">
                  Get My Free Audit
                </Link>
                <a 
                  href="https://wa.me/923430418776" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-100 px-8 py-4 rounded-full font-bold text-lg text-navy hover:border-mgreen transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 text-mgreen" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.277 0-4.125 1.848-4.125 4.125 0 .882.278 1.701.75 2.375l-.8 2.381 2.455-.788c.613.385 1.332.613 2.103.613 2.277 0 4.125-1.848 4.125-4.125s-1.848-4.125-4.125-4.125zm4.126 5.86c-.163.411-.842.827-1.163.874-.321.047-.643.074-1.854-.423-1.442-.591-2.352-2.046-2.423-2.14-.07-.094-.575-.76-.575-1.45s.361-1.031.488-1.163c.127-.132.278-.163.37-.163h.276c.091 0 .215-.034.33.245.116.278.4 1.002.434 1.071.034.07.058.15.011.245-.047.094-.07.152-.14.232-.07.081-.148.18-.211.242-.07.07-.143.146-.062.285.081.139.362.597.777.967.535.477.986.625 1.125.694.139.07.22.058.3-.035.081-.093.348-.405.441-.544.093-.139.186-.116.313-.07.127.047.808.382.947.452.139.07.232.104.266.163.035.058.035.336-.128.747z"></path></svg>
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-mgreen/10 absolute -inset-4 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Karachi Digital Marketing Strategy" 
                className="relative rounded-3xl shadow-2xl border-4 border-white object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neon/20 rounded-full flex items-center justify-center text-mgreen text-xl font-bold">↗</div>
                  <div>
                    <p className="text-sm font-bold text-slatebrand uppercase tracking-wider">Local Calls</p>
                    <p className="text-2xl font-extrabold text-navy">+240% Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-16">
            <h2 className="text-neon font-bold uppercase tracking-widest text-sm mb-4">Our Vision</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold font-display text-white mb-6">The Future of Local Search</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how AdNexis is transforming local business visibility in Karachi through cutting-edge AI and hyper-local SEO strategies.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative group cursor-pointer aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-neon/10 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Generative Search Technology" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://share.google/vpXUratORMMynjOXU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-24 h-24 bg-neon text-navy rounded-full flex items-center justify-center shadow-2xl shadow-neon transform group-hover:scale-110 transition-all duration-300 relative z-20"
                >
                  <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-mgreen font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl font-extrabold font-display text-navy">Hyper-Local Growth Framework</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-neon/20 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-navy">{s.title}</h4>
                <p className="text-slatebrand mb-6 text-sm leading-relaxed">{s.shortDesc}</p>
                <Link to={`/services/${s.slug}`} className="text-mgreen font-bold flex items-center hover:translate-x-2 transition-transform">
                  View Service <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold font-display mb-8 text-navy">Serving Karachi's Neighborhoods</h2>
              <p className="text-lg text-slatebrand mb-10 leading-relaxed">
                Local search intent varies by neighborhood. A restaurant in Clifton needs a different strategy than a real estate office in Gulshan. Our hyper-local expertise ensures you dominate your specific zip code.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {AREAS.map(a => (
                  <Link key={a.id} to={`/areas/${a.slug}`} className="bg-gray-50 hover:bg-neon hover:text-navy p-4 rounded-xl border border-gray-100 text-center font-bold transition-all text-navy">
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-navy rounded-2xl aspect-square flex flex-col items-center justify-center text-white p-6 shadow-xl">
                  <p className="text-4xl font-black mb-2 text-neon">94%</p>
                  <p className="text-center font-bold text-gray-300 text-sm">Customers find local businesses via Google Maps</p>
                </div>
                <div className="bg-mgreen rounded-2xl aspect-square flex flex-col items-center justify-center text-white p-6 shadow-xl">
                  <p className="text-4xl font-black mb-2">3X</p>
                  <p className="text-center font-bold text-brand-100 text-sm">More calls from optimized GMB profiles</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white border-4 border-gray-50 rounded-2xl aspect-square flex flex-col items-center justify-center text-navy p-6 shadow-xl">
                  <p className="text-4xl font-black mb-2 text-mgreen">1st</p>
                  <p className="text-center font-bold text-slatebrand text-sm">Page placement for local keywords</p>
                </div>
                <div className="bg-navy rounded-2xl aspect-square flex flex-col items-center justify-center text-white p-6 shadow-xl border-t-4 border-neon">
                  <p className="text-4xl font-black mb-2 text-neon">50%</p>
                  <p className="text-center font-bold text-gray-300 text-sm">Traffic coming from voice & AI search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-mgreen font-bold uppercase tracking-widest text-sm mb-4">Case Studies</h2>
              <h3 className="text-4xl font-extrabold font-display text-navy">Real Results in Karachi</h3>
            </div>
            <Link to="/portfolio" className="hidden md:block bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-navy hover:bg-neon hover:text-navy hover:border-neon transition-all">
              View All Results
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CASE_STUDIES.map(cs => (
              <div key={cs.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row group hover:border-mgreen/30 transition-all">
                <div className="lg:w-1/2 overflow-hidden">
                  <img src={cs.image} alt={cs.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="text-mgreen font-bold text-sm mb-2 uppercase tracking-wide">{cs.area} • {cs.industry}</div>
                  <h4 className="text-2xl font-bold mb-4 text-navy">{cs.client} Success</h4>
                  <p className="text-slatebrand mb-6 line-clamp-2 text-sm leading-relaxed">{cs.result}</p>
                  <div className="flex gap-4">
                    {cs.metrics.map((m, i) => (
                      <div key={i}>
                        <p className="text-2xl font-black text-navy">{m.value}</p>
                        <p className="text-xs font-bold text-slatebrand uppercase tracking-tighter">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-navy/20">
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display mb-8 relative z-10">Ready to rank #1 in your neighborhood?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Stop losing customers to competitors who have better GMB visibility. Get your free local SEO audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/contact" className="bg-neon text-navy px-10 py-5 rounded-full font-black text-xl hover:bg-mgreen hover:text-white transition-all shadow-xl shadow-neon/10">
                Get Free SEO Audit
              </Link>
              <a 
                href="https://wa.me/923430418776" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;