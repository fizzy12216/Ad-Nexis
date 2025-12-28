import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, AREAS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="text-2xl font-extrabold font-display text-white mb-6 block bg-gradient-to-r from-white to-neon bg-clip-text text-transparent italic">ADNEXIS</span>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Karachi's leading Local SEO and GMB Optimization agency. We help local businesses dominate maps and AI search across DHA, Clifton, and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/adnexis/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-neon hover:text-navy transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map(s => (
                <li key={s.id}><Link to={`/services/${s.slug}`} className="hover:text-neon transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Hyper-Local Area SEO</h4>
            <ul className="space-y-3 text-sm">
              {AREAS.map(a => (
                <li key={a.id}><Link to={`/areas/${a.slug}`} className="hover:text-neon transition-colors">{a.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-neon font-bold">📧</span>
                <a href="mailto:adnexismarketingagency@gmail.com" className="hover:text-neon transition-colors">adnexismarketingagency@gmail.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-neon font-bold">📞</span>
                <a href="tel:03430418776" className="hover:text-neon transition-colors">0343 0418776</a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-neon font-bold">📍</span>
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="block text-center border border-neon text-neon hover:bg-neon hover:text-navy px-4 py-2 rounded-lg font-bold transition-all">
                Book Free Audit
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 AdNexis Digital Marketing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;