import React, { useState } from 'react';
// Fixed: Explicit extension for consistent import resolution
import { BLOG_POSTS } from '../constants.tsx';

const Blog: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend.
      // We'll show a success state.
      setIsSubscribed(true);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold font-display mb-6 text-navy">AdNexis Intelligence</h1>
          <p className="text-xl text-slatebrand max-w-2xl mx-auto">
            Insights on Local SEO, Google Business Profile updates, and the evolution of AI search for the Karachi market.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-mgreen/20 transition-all flex flex-col group">
                <div className="aspect-video relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-mgreen text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{post.category}</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-slatebrand mb-4 font-bold uppercase tracking-widest gap-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight text-navy group-hover:text-mgreen transition-colors cursor-pointer">{post.title}</h3>
                  <p className="text-slatebrand mb-8 flex-grow line-clamp-3 leading-relaxed text-sm">{post.excerpt}</p>
                  <button className="text-mgreen font-bold flex items-center group/btn">
                    Read Full Guide <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </article>
            ))}
            
            {/* Newsletter Card */}
            <div className="bg-navy rounded-3xl p-8 text-white flex flex-col justify-center text-center relative overflow-hidden shadow-2xl shadow-navy/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                {isSubscribed ? (
                  <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="text-5xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold">You're In!</h3>
                    <p className="text-gray-400">Welcome to the AdNexis inner circle. Watch your inbox for Karachi SEO secrets.</p>
                    <button 
                      onClick={() => {setIsSubscribed(false); setEmail('');}}
                      className="text-neon text-sm font-bold hover:underline"
                    >
                      Reset
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-5xl mb-6">📬</div>
                    <h3 className="text-2xl font-bold mb-4">Stay AI-Ready</h3>
                    <p className="text-gray-400 mb-8 text-sm">Join 500+ Karachi business owners getting weekly local SEO tips.</p>
                    <form className="space-y-4" onSubmit={handleSubscribe}>
                        <input 
                          type="email" 
                          required
                          placeholder="Your Email" 
                          className="w-full bg-white/10 border border-white/20 p-4 rounded-xl placeholder-gray-500 outline-none focus:bg-white/20 focus:border-neon transition-all" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="w-full bg-neon text-navy py-4 rounded-xl font-black hover:bg-white transition-all shadow-lg shadow-neon/10">
                          Subscribe Now
                        </button>
                    </form>
                  </>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;