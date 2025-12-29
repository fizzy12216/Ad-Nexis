import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, AREAS } from '../constants.tsx';

const Sitemap: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold font-display text-navy mb-6">Website Sitemap</h1>
          <p className="text-xl text-slatebrand">A comprehensive guide to all pages and resources on AdNexis.pk.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 border-b-2 border-neon pb-2 inline-block">Main Navigation</h2>
            <ul className="space-y-4 text-lg">
              <li><Link to="/" className="text-slatebrand hover:text-mgreen transition-colors font-medium">Home</Link></li>
              <li><Link to="/portfolio" className="text-slatebrand hover:text-mgreen transition-colors font-medium">Portfolio & Case Studies</Link></li>
              <li><Link to="/blog" className="text-slatebrand hover:text-mgreen transition-colors font-medium">Blog & SEO Insights</Link></li>
              <li><Link to="/contact" className="text-slatebrand hover:text-mgreen transition-colors font-medium">Contact & Free Audit</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 border-b-2 border-neon pb-2 inline-block">Our Services</h2>
            <ul className="space-y-4 text-lg">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="text-slatebrand hover:text-mgreen transition-colors font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 border-b-2 border-neon pb-2 inline-block">Karachi Service Areas</h2>
            <ul className="space-y-4 text-lg">
              {AREAS.map(area => (
                <li key={area.id}>
                  <Link to={`/areas/${area.slug}`} className="text-slatebrand hover:text-mgreen transition-colors font-medium">
                    SEO in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 border-b-2 border-neon pb-2 inline-block">Legal & Compliance</h2>
            <ul className="space-y-4 text-lg">
              <li><Link to="/privacy-policy" className="text-slatebrand hover:text-mgreen transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-slatebrand hover:text-mgreen transition-colors font-medium">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;