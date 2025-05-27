import { Employee, Experience, Education, Skill, Testimonial } from '../types';

export const employeeData: Employee = {
  name: "Sanju Dhiman",
  title: "Senior Investment Advisor",
  profileImage: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  bio: "With over 15 years of experience in the banking sector, I specialize in portfolio management and wealth preservation strategies. My approach combines traditional banking principles with innovative financial solutions to help clients achieve their long-term financial goals.",
  email: "s.dhiman@financialfirm.com",
  phone: "(555) 123-4567",
  location: "New York, NY",
  linkedin: "linkedin.com/in/sanjudhiman",
  achievements: [
    { label: "Client Portfolio Value", value: "$350M+" },
    { label: "Client Retention", value: "97%" },
    { label: "Annual Growth", value: "12.8%" }
  ]
};

export const experiences: Experience[] = [
  {
    position: "Senior Investment Advisor",
    company: "Atlantic Trust Bank",
    duration: "2019 - Present",
    description: "Lead a team of investment advisors managing high-net-worth client portfolios. Developed custom investment strategies resulting in a 15% average annual return for premium clients.",
    achievements: [
      "Grew client asset base by $120M through new client acquisition",
      "Implemented an AI-driven risk assessment model reducing portfolio volatility by 22%",
      "Recipient of the 2022 Excellence in Client Relations Award"
    ]
  },
  {
    position: "Investment Advisor",
    company: "Morgan Financial Services",
    duration: "2015 - 2019",
    description: "Managed diverse investment portfolios for 75+ clients with assets ranging from $500K to $10M. Specialized in retirement planning and tax-efficient investment strategies.",
    achievements: [
      "Consistently exceeded quarterly targets by 18%",
      "Developed a streamlined client onboarding process reducing paperwork by 60%",
      "Selected for advanced wealth management training program"
    ]
  },
  {
    position: "Financial Analyst",
    company: "First National Bank",
    duration: "2012 - 2015",
    description: "Conducted comprehensive financial analyses and due diligence for potential investments. Prepared detailed reports and presentations for senior management.",
    achievements: [
      "Identified investment opportunities that generated $12M in new revenue",
      "Streamlined reporting processes saving 15 hours weekly",
      "Mentored 5 junior analysts who advanced to senior positions"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "MBA, Finance",
    institution: "Columbia Business School",
    year: "2012",
    highlights: ["Graduated with honors", "Financial Markets specialization"]
  },
  {
    degree: "BS, Economics",
    institution: "University of Pennsylvania",
    year: "2008",
    highlights: ["Cum Laude", "Minor in Business Administration"]
  },
  {
    degree: "Certified Financial Planner (CFP®)",
    institution: "CFP Board",
    year: "2014",
    highlights: []
  },
  {
    degree: "Chartered Financial Analyst (CFA®)",
    institution: "CFA Institute",
    year: "2016",
    highlights: []
  }
];

export const skills: Skill[] = [
  { name: "Wealth Management", proficiency: 95 },
  { name: "Portfolio Analysis", proficiency: 90 },
  { name: "Risk Assessment", proficiency: 85 },
  { name: "Estate Planning", proficiency: 80 },
  { name: "Financial Modeling", proficiency: 85 },
  { name: "Tax Strategy", proficiency: 75 },
  { name: "Client Relations", proficiency: 95 },
  { name: "Regulatory Compliance", proficiency: 90 }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Sanju's strategic approach to wealth management has transformed our financial outlook. Her dedication to understanding our goals and crafting personalized solutions has been invaluable.",
    author: "Robert & Linda Chen",
    title: "Clients since 2016",
    image: "https://images.pexels.com/photos/5326953/pexels-photo-5326953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Working with Sanju has been one of the best financial decisions we've made. Her insights and proactive approach have consistently delivered results that exceed our expectations.",
    author: "Michael Thompson",
    title: "Client since 2018",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Sanju's expertise in navigating complex financial situations is remarkable. She helped us restructure our investment portfolio during market volatility, and we emerged stronger than before.",
    author: "Jennifer Wu",
    title: "Client since 2020",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];