import {
  mobile,
  ai,
  laravel,
  php,
  seb,
  dks,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  shopify,
  unity,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: unity,
  },
  {
    title: "Artifitial Intelligence",
    icon: ai,
  },
  {
    title: "PHP Developer",
    icon: php,
  },{
    title: "Laravel Developer",
    icon: laravel,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ai",
    icon: ai,
  },
];

const experiences = [
  {
    title: "SEB'S Institute",
    company_name: "SM",
    icon: seb,
    iconBg: "#383E56",
    date: "4 March 2022 - 30 Sep 2022",
    points: [
      " Social Media Management Developed and executed social media campaigns created engaging content and monitored online interactions.",
      "Graphic Design Designed visually appealing graphics for social media posts marketing materials and other promotional assets.",
      "Video Editing Edited and produced short-form videos for social media platforms including scriptwriting shooting and post-production.",
    ],
  },
  {
    title: "Off-Desk Company",
    company_name: "Seller",
    icon: unity,
    iconBg: "#E6DEDD",
    date: "2 June 2024 – 31 August 2024",
    points: [
      "Increased sales by 15% within the first month.",
      "Achieved a 20% conversion rate from daily outbound calls.",
      "Maintained accurate customer records using CRM software.",
      "Boosted customer engagement by 10% through targeted strategies.",
      "Provided prompt and exceptional customer service.",
    ],
  },

  {
    title: "Digital Konnecter System",
    company_name: "DKS",
    icon: dks,
    iconBg: "#383E56",
    date: "1 September 2024 - Present",
    points: [
      "Developed and maintained web applications using Laravel and PHP, ensuring high performance and scalability.",
      "Implemented advanced functionalities with Backpack Laravel, enhancing administrative interfaces and user experiences.",
      "Designed and customized WordPress themes and plugins for dynamic client projects.",
      "Utilized best practices in coding, debugging, and optimizing web solutions.",
      "Collaborated with cross-functional teams to deliver projects within tight deadlines.",
      "Gained hands-on experience in modern web development tools and techniques.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Marketing & Advertising Agency Website",
    description:
      "Developed a PHP Laravel-based Marketing & Advertising Agency Web App with secure user authentication and ad management.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mekset Cosmetics App",
    description:
      "Developed Mekset Online Cosmetics, a PHP Laravel-based e-commerce platform with an optimized UX/UI. Built a secure backend for catalog management, order processing, and user authentication.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Al-Makki Al-Madni",
    description:
      "A WordPress-based website for Al-Makki Al-Madni Dialysis Center, showcasing dialysis services  welfare activities. User-friendly design with seamless navigation and secure backend management.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
