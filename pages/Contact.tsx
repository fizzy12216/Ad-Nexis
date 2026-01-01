import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    whatsapp: '',
    email: '',
    businessType: '',
    area: 'DHA',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const waMessage = `*New Local SEO Audit Request*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formState.name}%0A` +
      `*WhatsApp:* ${formState.whatsapp}%0A` +
      `*Email:* ${formState.email}%0A` +
      `*Area:* ${formState.area}%0A` +
      `*Business:* ${formState.businessType}%0A` +
      `*Notes:* ${formState.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/923430418776?text=${waMessage}`;
    
    // Forward the data by opening WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full text-center px-6">
          <div className="w-20 h-20 bg-brand-100 text-mgreen rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
          <h2 className="text-3xl font-bold mb-4 text-navy">Forwarded to WhatsApp!</h2>
          <p className="text-slatebrand mb-8">Your details have been sent to our team via WhatsApp. We will review your profile and respond within 2 hours.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all"
          >
            Send Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2 space-y-12">
              <div>
                <h1 className="text-5xl lg:text-6xl font-extrabold font-display mb-6 text-navy">Get Your <span className="text-mgreen">Free Audit</span></h1>
                <p className="text-xl text-slatebrand leading-relaxed">
                  Ready to see why your competitors are outranking you in {`"near me"`} searches? Our experts will manually review your GMB profile and local presence.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl border border-brand-100">📧</div>
                    <div>
                        <h4 className="font-bold text-xl mb-1 text-navy">Email Support</h4>
                        <a href="mailto:adnexismarketingagency@gmail.com" className="text-slatebrand hover:text-mgreen transition-colors">adnexismarketingagency@gmail.com</a>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl border border-brand-100">📞</div>
                    <div>
                        <h4 className="font-bold text-xl mb-1 text-navy">Direct Line</h4>
                        <a href="tel:03430418776" className="text-slatebrand hover:text-mgreen transition-colors">0343 0418776</a>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl border border-brand-100">🕒</div>
                    <div>
                        <h4 className="font-bold text-xl mb-1 text-navy">Working Hours</h4>
                        <p className="text-slatebrand">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                </div>
              </div>

              <div className="p-8 bg-navy rounded-3xl text-white shadow-2xl shadow-navy/20">
                <p className="font-bold text-lg mb-4 text-neon">Fast Local Support:</p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/923430418776" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-neon text-navy px-6 py-4 rounded-xl font-black hover:bg-mgreen hover:text-white transition-all"
                  >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.277 0-4.125 1.848-4.125 4.125 0 .882.278 1.701.75 2.375l-.8 2.381 2.455-.788c.613.385 1.332.613 2.103.613 2.277 0 4.125-1.848 4.125-4.125s-1.848-4.125-4.125-4.125zm4.126 5.86c-.163.411-.842.827-1.163.874-.321.047-.643.074-1.854-.423-1.442-.591-2.352-2.046-2.423-2.14-.07-.094-.575-.76-.575-1.45s.361-1.031.488-1.163c.127-.132.278-.163.37-.163h.276c.091 0 .215-.034.33.245.116.278.4 1.002.434 1.071.034.07.058.15.011.245-.047.094-.07.152-.14.232-.07.081-.148.18-.211.242-.07.07-.143.146-.062.285.081.139.362.597.777.967.535.477.986.625 1.125.694.139.07.22.058.3-.035.081-.093.348-.405.441-.544.093-.139.186-.116.313-.07.127.047.808.382.947.452.139.07.232.104.266.163.035.058.035.336-.128.747zM12 2C6.477 2 2 6.477 2 12c0 2.136.673 4.116 1.82 5.74L2 22l4.35-1.785A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>
                      Consult on WhatsApp
                  </a>
                  <a 
                    href="https://www.facebook.com/adnexis/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10"
                  >
                      Facebook Page
                  </a>
                  <a 
                    href="https://www.instagram.com/adnexislocalseo/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10"
                  >
                      Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 lg:p-14 border border-gray-100 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-neon text-navy px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Karachi Experts</div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slatebrand uppercase tracking-widest">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="John Doe" 
                          className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-neon" 
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          value={formState.name}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slatebrand uppercase tracking-widest">WhatsApp Number</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+92" 
                          className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-neon" 
                          onChange={(e) => setFormState({...formState, whatsapp: e.target.value})}
                          value={formState.whatsapp}
                        />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slatebrand uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@business.pk" 
                      className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-neon" 
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      value={formState.email}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slatebrand uppercase tracking-widest">Business Area</label>
                        <select 
                          className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-neon"
                          onChange={(e) => setFormState({...formState, area: e.target.value})}
                          value={formState.area}
                        >
                            <option value="DHA">DHA</option>
                            <option value="Clifton">Clifton</option>
                            <option value="Saddar">Saddar</option>
                            <option value="Gulshan">Gulshan</option>
                            <option value="North Nazimabad">North Nazimabad</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slatebrand uppercase tracking-widest">Business Type</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Dental Clinic" 
                          className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-neon" 
                          onChange={(e) => setFormState({...formState, businessType: e.target.value})}
                          value={formState.businessType}
                        />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slatebrand uppercase tracking-widest">Message / Notes</label>
                    <textarea 
                      rows={4} 
                      placeholder="Anything else we should know?" 
                      className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-neon resize-none"
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      value={formState.message}
                    ></textarea>
                  </div>

                  <button className="w-full bg-navy text-white py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl shadow-navy/20">
                    Send My Audit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;