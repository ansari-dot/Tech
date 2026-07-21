export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: string;
  clientName?: string;
  image: string;
  cardImage?: string;
  shortDesc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  metrics: string[];
  deliverables: string[];
  technologies: string[];
  timeline: string;
  liveUrl?: string;
  caseStudyPdf?: string;
}

export const projects: Project[] = [
  {
    id: "tmobile-tec-store",
    title: "T-Mobile Tec Store",
    category: "Headless E-commerce",
    filterCategory: "Retail",
    clientName: "Gary Connell",
    image: "/assets/tmobile.png",
    cardImage: "/assets/tmobilecard.png",
    shortDesc: "A headless MERN stack electronics e-commerce store integrating dynamic inventories and secure checkout pipelines.",
    longDesc: "T-Mobile Tec Store is a high-performance, headless e-commerce store custom-built using the MERN stack (MongoDB, Express.js, React, Node.js) and hosted on Hostinger. Designed to manage a wide catalog of gadgets, mobile phones, laptops, and consoles, the platform provides clean interfaces for catalog searches, checkout cart builders, and direct order tracking. The store is equipped with a centralized admin management portal allowing administrators to update stock counts, edit product variants (colors/sizes), monitor order fulfillment pipelines, and access real-time metrics, providing a comprehensive sales command center.",
    challenge: "Managing concurrent inventory state mutations for hot items (like consoles and new phones) and keeping catalog latency extremely low during flash-sale traffic spikes.",
    solution: "Utilized MongoDB indexes for lightning-fast product queries. Implemented dynamic debouncing on cart actions, server-side caching patterns, and a lightweight Express/Node booking controller to process cart orders securely.",
    metrics: [
      "50% faster catalog search speeds",
      "15K+ monthly active shoppers",
      "99.8% order checkout success rate"
    ],
    deliverables: [
      "Headless Shopping Portal UI/UX",
      "Centralized Inventory Management Panel",
      "MERN Order Fulfillment Pipeline",
      "Hostinger Deployment Config"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Hostinger Deploy", "Tailwind CSS"],
    timeline: "3 Months",
    liveUrl: "https://tmobiletecstore.com",
    caseStudyPdf: "/assets/case-studies/tmobile-case-study.pdf"
  },
  {
    id: "edpreps-exam-portal",
    title: "EdPreps MDCAT Platform",
    category: "EdTech Platform",
    filterCategory: "SaaS",
    image: "/assets/edprep.png",
    cardImage: "/assets/edcard.png",
    shortDesc: "A high-performance online test preparation portal serving over 28,000+ MCQs and AI score predictors for MDCAT exams.",
    longDesc: "EdPreps is Pakistan's leading digital test prep platform custom-built for pre-medical students preparing for the MDCAT. The system aggregates over 28,000 board-certified MCQs with province-specific modules for UHS, NUMS, SZABMU, and DUHS. The application features advanced user personalization tools, including an automated 'Mistake Notebook' that records user errors for dedicated recovery cycles, a dynamic study scheduler, and an AI-driven 'Score & Provincial Rank Predictor'. Built using React and Node.js and hosted on AWS Cloud, the portal streamlines preparation cycles for thousands of students.",
    challenge: "Scaling real-time practice simulations for thousands of simultaneous users during peak provincial MDCAT cycles, while maintaining instantaneous progress tracking and mistake cataloging databases.",
    solution: "Designed optimized document indexing pipelines for instant MCQ queries. Implemented localized state synchronization on the React front-end to reduce database roundtrips, and deployed server-side caching patterns on AWS cloud instances to guarantee 99.9% simulation uptime.",
    metrics: [
      "28K+ practice questions cataloged",
      "95% student score prediction accuracy",
      "30K+ active pre-medical users"
    ],
    deliverables: [
      "Automated Mistake Notebook & Re-test Engine",
      "AI Score & Provincial Rank Predictor API",
      "Province-Specific Board Syllabus Customizer",
      "AWS Cloud Infrastructure Deployment"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS Cloud Deploy", "Tailwind CSS", "Redis"],
    timeline: "4 Months",
    liveUrl: "https://edpreps.com",
    caseStudyPdf: "/assets/case-studies/edpreps-case-study.pdf"
  },
  {
    id: "north-paradise-treks",
    title: "North Paradise Treks & Tours",
    category: "Adventure Tour Booking",
    filterCategory: "Retail",
    image: "/assets/trip.png",
    cardImage: "/assets/tripcard.png",
    shortDesc: "A MERN stack tour booking platform deployed on Hostinger for adventure tourism in Northern Pakistan.",
    longDesc: "North Paradise Treks & Tours is a custom-engineered adventure tourism platform designed for international and domestic trekkers seeking expeditions in Gilgit-Baltistan and Skardu. Developed using the MERN stack (MongoDB, Express.js, React, Node.js) and hosted on Hostinger, the platform delivers high-performance itinerary builders, booking inquiry logs, group availability schedules, and direct WhatsApp communication gateways. The back-end handles secure client data capture, expedition package definitions, and seasonal rate scheduling, offering a streamlined digital command center for Skardu's leading tour operator.",
    challenge: "Developing an dynamic itinerary planner capable of mapping variable multi-day high-altitude schedules, handling secure booking captures under Skardu's local network latency constraints, and coordinating transport slots.",
    solution: "Built a robust, lightweight React front-end powered by an Express/Node API and hosted on Hostinger. Designed flat MongoDB schemas optimized for speedy query retrieval, and integrated offline-first caching for high-altitude guides.",
    metrics: [
      "45% increase in tour reservations",
      "12K+ monthly adventure travelers",
      "99.9% booking success rate"
    ],
    deliverables: [
      "Interactive Expedition Booking System",
      "Dynamic Multi-day Itinerary Builder",
      "Admin Reservation & Tour Catalog Console",
      "Hostinger Server Deployment Pipeline"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Hostinger Deploy", "Tailwind CSS"],
    timeline: "3 Months",
    liveUrl: "https://northparadisetreksandtours.com/",
    caseStudyPdf: "/assets/case-studies/northparadise-case-study.pdf"
  }
];
