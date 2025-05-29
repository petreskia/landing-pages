export interface HomePage {
  heroSection: HeroSectionProps;
  departmentInfo: string;
}

export interface HeroSectionProps {
  preTitle: string;
  title: string;
  desc: string;
}

export interface Filter {
  name: string;
  slug: string;
  id: string;
}

export interface ProductI {
  id: string;
  title: string;
  type: string;
  description: string;
  filename: string;
  size: string;
  price: number;
  information: string;
}

export interface Blog {
  id: string;
  title: string;
  published: string;
  excerpt: string;
  image: string;
}
