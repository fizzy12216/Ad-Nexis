import React from 'react';
import { Service, Area, CaseStudy, BlogPost } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'g-maps',
    title: 'Google Maps Marketing Karachi',
    slug: 'google-maps-marketing',
    shortDesc: 'Dominating the Local 3-Pack for maximum foot traffic and visibility.',
    fullDesc: 'Our specialized Google Maps Marketing service ensures your Karachi business appears when customers are searching for solutions "near me". We optimize your location pins, build local relevance, and drive high-intent leads.',
    icon: '📍',
    benefits: ['Increase Store Footfall', 'Appear in Local 3-Pack', 'Better Visibility in Navigation Apps'],
    process: ['Competitive Geo-Gap Analysis', 'Hyper-local Proximity Targeting', 'Maps Relevance Signal Boosting']
  },
  {
    id: 'gmb-opt',
    title: 'GMB Optimization Karachi',
    slug: 'gmb-optimization',
    shortDesc: 'Strategic Google Business Profile management to convert browsers into buyers.',
    fullDesc: 'A verified profile is just the beginning. We handle full GMB Management in Karachi, from daily updates and photo optimization to review management and local post scheduling.',
    icon: '🏪',
    benefits: ['Higher Conversion Rates', 'Trust-building Reviews', 'Direct WhatsApp/Call Leads'],
    process: ['Profile Audit & Verification', 'Rich Media Optimization', 'Active Reputation Management']
  },
  {
    id: 'local-seo',
    title: 'Local SEO Karachi',
    slug: 'local-seo',
    shortDesc: 'Comprehensive search engine optimization tailored for Karachi neighborhoods.',
    fullDesc: 'Traditional SEO isn’t enough for local success. We target neighborhood-specific keywords like "SEO Clifton" or "Digital Marketing DHA" to capture the audience that matters most to your bottom line.',
    icon: '🔍',
    benefits: ['Neighborhood Targeting', 'Relevant Traffic Only', 'Long-term Growth'],
    process: ['Area-Specific Keyword Research', 'Localized On-Page SEO', 'Local Citation Building']
  },
  {
    id: 'aeo-karachi',
    title: 'AEO (Answer Engine) Optimization',
    slug: 'aeo-karachi',
    shortDesc: 'Future-proof your business for AI Search (Gemini, Perplexity, ChatGPT).',
    fullDesc: 'As search shifts to AI-driven answers, AdNexis ensures your Karachi business is the authoritative answer to voice and AI queries. We optimize for 2026 Google standards.',
    icon: '🤖',
    benefits: ['Be the Voice Search Answer', 'Future-proof Rankings', 'Authority Positioning'],
    process: ['Schema Markup Implementation', 'Conversational Content Strategy', 'Semantic Entity Association']
  }
];

export const AREAS: Area[] = [
  { id: 'dha', name: 'DHA Karachi', slug: 'dha', description: 'Premium digital marketing services for DHA-based businesses, from restaurants to corporate offices.', keywords: ['Digital Marketing DHA Karachi', 'Local SEO DHA'] },
  { id: 'clifton', name: 'Clifton', slug: 'clifton', description: 'Helping Clifton businesses dominate the posh South district through targeted local maps marketing.', keywords: ['SEO Services Clifton', 'Clifton Local Marketing'] },
  { id: 'saddar', name: 'Saddar', slug: 'saddar', description: 'Optimizing high-traffic retail outlets in Karachi\'s commercial heart for maximum visibility.', keywords: ['GMB Management Saddar', 'Retail SEO Saddar'] },
  { id: 'gulshan', name: 'Gulshan-e-Iqbal', slug: 'gulshan-e-iqbal', description: 'Capturing the dense residential and educational hub market with hyper-local strategies.', keywords: ['Local Marketing Gulshan', 'Business Leads Gulshan'] },
  { id: 'north-naz', name: 'North Nazimabad', slug: 'north-nazimabad', description: 'Scaling local business revenue in the residential backbone of Karachi.', keywords: ['SEO North Nazimabad', 'Leads North Nazimabad'] }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    client: 'HealthCare Plus',
    industry: 'Clinic',
    area: 'DHA Phase 6',
    challenge: 'Low appointment volume despite prime location.',
    result: 'Dominance in "Doctors near me" searches and 3x monthly appointments.',
    metrics: [{ label: 'Call Volume', value: '+210%' }, { label: 'Map Views', value: '45k/mo' }],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cs2',
    client: 'Spice Route',
    industry: 'Restaurant',
    area: 'Clifton Block 4',
    challenge: 'Losing customers to competitors in the local 3-pack.',
    result: 'Ranked #1 for "Best Steaks Clifton" within 60 days.',
    metrics: [{ label: 'Foot Traffic', value: '+85%' }, { label: 'Reviews', value: '4.8★ Avg' }],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post1',
    title: 'The Future of Local SEO in Karachi: 2026 Trends',
    category: 'SEO Strategy',
    date: 'March 15, 2024',
    author: 'AdNexis Team',
    excerpt: 'As AI search engines like Gemini and Perplexity gain traction, local businesses in Karachi must adapt. Here is how AEO is changing the game for DHA and Clifton businesses.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post2',
    title: 'GMB Optimization: Dominating the Local 3-Pack',
    category: 'Google Maps',
    date: 'March 10, 2024',
    author: 'Zain Ahmed',
    excerpt: 'Simple tweaks to your Google Business Profile that can increase your foot traffic by up to 85%. Learn the secrets of Karachi\'s top-ranking pins.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post3',
    title: 'Voice Search: Is Your Business AI-Ready?',
    category: 'Innovation',
    date: 'March 5, 2024',
    author: 'Marketing Desk',
    excerpt: 'How people search in Karachi is changing. Voice commands are replacing typing. Discover how to position your brand as the primary answer.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800'
  }
];