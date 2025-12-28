import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, AREAS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold font-display bg-gradient-to-r from-navy to-mgreen bg-clip-text text-transparent">
                ADNEXIS
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-mgreen font-medium transition-colors">Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-navy group-hover:text-mgreen font-medium transition-colors">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-0">
                  {SERVICES.map((s) => (
                    <Link key={s.id} to={`/services/${s.slug}`} className="block px-4 py-3 hover:bg-brand-50 text-sm font-medium text-navy">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('areas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-navy group-hover:text-mgreen font-medium transition-colors">
                Areas
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {activeDropdown === 'areas' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-0">
                  {AREAS.map((a) => (
                    <Link key={a.id} to={`/areas/${a.slug}`} className="block px-4 py-3 hover:bg-brand-50 text-sm font-medium text-navy">
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="text-navy hover:text-mgreen font-medium transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-navy hover:text-mgreen font-medium transition-colors">Blog</Link>
            
            <Link to="/contact" className="bg-navy hover:bg-black text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-navy/20 transition-all transform hover:scale-105">
              Free Audit
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-navy focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-navy font-medium">Home</Link>
          <div className="px-3 py-2 font-bold text-xs uppercase text-slatebrand">Services</div>
          {SERVICES.map(s => <Link key={s.id} to={`/services/${s.slug}`} onClick={toggleMenu} className="block px-3 py-2 text-gray-600 pl-6">{s.title}</Link>)}
          <div className="px-3 py-2 font-bold text-xs uppercase text-slatebrand">Areas</div>
          {AREAS.map(a => <Link key={a.id} to={`/areas/${a.slug}`} onClick={toggleMenu} className="block px-3 py-2 text-gray-600 pl-6">{a.name}</Link>)}
          <Link to="/portfolio" onClick={toggleMenu} className="block px-3 py-2 text-navy font-medium">Portfolio</Link>
          <Link to="/blog" onClick={toggleMenu} className="block px-3 py-2 text-navy font-medium">Blog</Link>
          <Link to="/contact" onClick={toggleMenu} className="block w-full text-center bg-navy text-white px-3 py-3 rounded-xl font-bold mt-4">Free Audit</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;