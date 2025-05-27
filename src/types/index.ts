export interface Employee {
  name: string;
  title: string;
  profileImage: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  achievements: Achievement[];
}

export interface Achievement {
  label: string;
  value: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image: string;
}