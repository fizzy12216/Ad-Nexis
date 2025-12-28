export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  process: string[];
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  area: string;
  challenge: string;
  result: string;
  metrics: { label: string; value: string }[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}