import { Employee, Experience, Education, Skill, Testimonial } from '../types';

export const employeeData: Employee = {
  name: "Sanju Dhiman",
  title: "Dynamic Branch Credit Manager at Muthoot Microfin Ltd",
  profileImage: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  bio: "Hi, I’m a dynamic and results-driven Branch Credit Manager at Muthoot Microfin Ltd, with a strong background in credit analysis, team management, and risk management. I excel at streamlining loan approval processes, enhancing efficiency, and minimizing losses through effective strategies. Let’s connect and explore how I can bring value to your organization!",
  email: "sanjudhiman141@gmail.com",
  phone: "+91 9991850096",
  location: " VPO Balu, District Kaithal, India 136117",
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
    degree: "MBA (Finance)",
    institution: "University: Kuk University, Kurukshetra (May 2023)",
    year: "2023",
    highlights: ["Graduated with honors", "Financial Markets specialization"]
  },
  {
    degree: "B.A. (Bachelor of Art)",
    institution: "College: R.K.S.D Pg College, Kaithal (March 2018)",
    year: "2018",
    highlights: ["Cum Laude", "Minor in Business Administration"]
  },
  {
    degree: "12th Grade",
    institution: "Board: HBSE, Kaithal (March 2016)",
    year: "2016",
    highlights: []
  },
  {
    degree: "10th Grade",
    institution: "Board: HBSE, Kaithal (March 2016)",
    year: "2016",
    highlights: []
  }
];

export const skills: Skill[] = [
  { name: "Team management", proficiency: 95 },
  { name: "Loan underwriting", proficiency: 90 },
  { name: "Credit analysis", proficiency: 85 },
  { name: "Sales strategies", proficiency: 80 },
  { name: "Credit reports", proficiency: 85 },
  { name: "Credit risk management", proficiency: 75 },
  { name: "Client Relations", proficiency: 95 },
  { name: "Financial analysis and reporting", proficiency: 90 }
];

export const testimonials: Testimonial[] = [
  {
    quote: "A reliable and highly knowledgeable professional. Helped us restructure our credit cases with precision.",
    author: "Robert & Linda Chen",
    title: "Client A",
    image: "https://images.pexels.com/photos/5326953/pexels-photo-5326953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Excellent leadership and management skills. Always focused on improving processes and minimizing risk.",
    author: "Michael Thompson",
    title: "– Colleague B",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Helped our organization navigate complex loan approvals efficiently.",
    author: "Jennifer Wu",
    title: "Client C",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
