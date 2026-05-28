import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-6.png";

export const ABOUT_TEXT = `A motivated software developer with 1 year and 5 months of professional experience specializing in building intelligent and scalable web applications. Proficient in developing and integrating Large Language Model (LLM) solutions using Python, creating dynamic front-end applications with Angular, and building robust backend APIs with Spring Boot and FastAPI. Experienced in leading front-end development, component design, API integration, Angular version upgrades, and integrating complex systems including custom Video SDK solutions. Passionate about leveraging AI and modern web technologies to deliver innovative, efficient, and user-centric applications.`;

export const SKILLS = [
  { name: "Angular", icon: "angular", color: "text-red-500", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", color: "text-blue-500", category: "Frontend" },
  { name: "RxJS", icon: "rxjs", color: "text-pink-500", category: "Frontend" },
  { name: "HTML", icon: "html", color: "text-orange-500", category: "Frontend" },
  { name: "SASS", icon: "sass", color: "text-pink-400", category: "Frontend" },
  { name: "Java", icon: "java", color: "text-orange-400", category: "Backend" },
  { name: "Python", icon: "python", color: "text-blue-400", category: "Backend" },
  { name: "Spring Boot", icon: "springboot", color: "text-green-400", category: "Backend" },
  { name: "FastAPI", icon: "fastapi", color: "text-teal-400", category: "Backend" },
  { name: "MongoDB", icon: "mongodb", color: "text-green-500", category: "Database" },
  { name: "MySQL", icon: "mysql", color: "text-sky-600", category: "Database" },
  { name: "LLM / AI", icon: "ai", color: "text-purple-400", category: "AI & Tools" },
  { name: "Docker", icon: "docker", color: "text-blue-400", category: "AI & Tools" },
  { name: "Git", icon: "git", color: "text-red-400", category: "AI & Tools" },
  { name: "Postman", icon: "postman", color: "text-orange-500", category: "AI & Tools" },
];

export const STATS = [
  { label: "Years Experience", value: "1.5+" },
  { label: "Technologies", value: "15+" },
  { label: "Certifications", value: "5" },
];

export const EXPERIENCES = [
  {
    year: "Mar 2025 - Present",
    role: "Software Developer",
    company: "Ibytes Bits and Bots Pvt Ltd, Chennai",
    description: "Leading frontend architecture and full-stack development for AI-driven enterprise applications in the oil & gas domain.",
    highlights: [
      "Led frontend architecture for Angular applications, improving scalability and maintainability.",
      "Designed reusable component libraries, reducing code duplication by 40%.",
      "Improved application performance by 30% using lazy loading and optimized change detection.",
      "Led Angular upgrade from v8+ to v15–21, improving performance and fixing security vulnerabilities.",
      "Developed backend APIs using Python and REST architecture; implemented CRUD and PATCH operations.",
      "Created AI tools and service layers for LLM-based applications and intelligent workflows.",
    ],
    technologies: ["Angular", "Python", "FastAPI", "MongoDB", "LLM", "WebSockets", "RBAC"],
  },
];

export const EDUCATION = [
  {
    year: "2024 - 2026",
    degree: "Master of Science in Computer Science",
    institution: "Anna University College, Chennai",
    grade: "CGPA: 8.0",
  },
  {
    year: "2021 - 2024",
    degree: "Bachelor of Science in Computer Science",
    institution: "Sri Muthukumaran Arts and Science College, Chennai",
    grade: "CGPA: 8.0",
  },
];

export const PROJECTS = [
  {
    title: "Drilling AI (Aarya Senior Drilling Engineer)",
    subtitle: "Oil & Gas Platform",
    image: project1,
    description:
      "AI-driven platform for real-time drilling data visualization. Built WebSocket-based live dashboards, RBAC secure access control, and MongoDB data management with Angular 21.",
    technologies: ["Angular 21", "MongoDB", "WebSockets", "RBAC", "AI"],
    link: "#",
  },
  {
    title: "WDDI (Well Delivery Difficulty Index)",
    subtitle: "Oil & Gas Platform",
    image: project2,
    description:
      "Enterprise-grade scalable UI architecture using Angular 19. Delivered within a 160-day deadline with MongoDB integration and seamless backend API connectivity.",
    technologies: ["Angular 19", "MongoDB", "REST APIs", "Enterprise UI"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Project",
    image: project3,
    description:
      "Modern personal portfolio with 3D effects, smooth animations, and responsive design showcasing projects, skills, and professional experience.",
    technologies: ["React", "Tailwind CSS", "Three.js", "Framer Motion"],
    link: "#",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Java Full Stack Development",
    issuer: "NIIT, Chennai",
    date: "Jan 2023 - May 2024",
    type: "Software Engineering",
  },
  {
    title: "Mastering Postman: A Comprehensive API Testing Course",
    issuer: "Udemy",
    date: "Online",
    type: "API Testing",
  },
  {
    title: "Database Application Development with Spring Boot and Angular",
    issuer: "Udemy",
    date: "Online",
    type: "Full Stack",
  },
  {
    title: "Introduction To Artificial Intelligence",
    issuer: "Infosys | Springboard",
    date: "Online",
    type: "AI",
  },
  {
    title: "Introduction To Data Science",
    issuer: "Infosys | Springboard",
    date: "Online",
    type: "Data Science",
  },
];

export const ACHIEVEMENTS = [
  "Improved application performance by 30% through optimization techniques",
  "Reduced code duplication by 40% by designing reusable components",
  "Successfully led Angular upgrades improving system performance and security",
  "Delivered enterprise-grade WDDI application within 160-day deadline",
];

export const CONTACT = {
  address: "Chennai, Tamil Nadu, India",
  phoneNo: "+91 90808 57401",
  email: "nagandhrapasupathy@gmail.com",
  website: "https://nagandhraprasad.dev",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/Nagandhra-Prasad",
  github: "https://github.com/Nagandhra-Prasad",
  instagram: "https://www.instagram.com/nagendra_prasad05/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
