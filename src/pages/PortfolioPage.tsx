import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, X, Send, CheckCircle, Mail, MapPin, 
  Briefcase, BarChart2, Users, Globe, Award, Check,
  Landmark, HeartPulse, Truck, ShoppingCart, Cloud, Zap,
  TrendingUp, Terminal
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Project Data
interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  metrics: string[];
  deliverables: string[];
}

const projects: Project[] = [
  {
    id: "banking-platform",
    title: "NextGen Banking Platform",
    category: "FinTech",
    filterCategory: "FinTech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    shortDesc: "A secure and scalable platform that enhanced digital banking experiences.",
    longDesc: "Our client, a leading regional bank, needed to modernize their legacy online banking system to compete with digital-first neobanks. We designed and implemented a cloud-native banking platform leveraging microservices and secure APIs.",
    challenge: "The existing monolithic infrastructure made it difficult to roll out new features quickly and was prone to outages during high-traffic periods. Data sync between core banking and front-end was slow and insecure.",
    solution: "We implemented a containerized microservices architecture on AWS with a real-time event broker (Kafka) for immediate data sync. Designed a premium, highly responsive user interface with multi-factor authentication (MFA) and biometric log-ins.",
    metrics: [
      "40% increase in mobile engagement",
      "99.99% uptime achieved",
      "Zero security breaches in audits"
    ],
    deliverables: [
      "Secure Web Portal",
      "iOS & Android Mobile Apps",
      "Admin Control Panel",
      "Security Compliance documentation"
    ]
  },
  {
    id: "telehealth-solution",
    title: "Telehealth Solution",
    category: "Healthcare",
    filterCategory: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    shortDesc: "A robust telemedicine platform connecting doctors and patients seamlessly.",
    longDesc: "Designed a HIPAA-compliant virtual healthcare platform that integrates video consultations, patient records (EHR), and prescription management.",
    challenge: "Building a secure platform that complies with HIPAA regulations, integrates with legacy EHR databases, and delivers high-quality video even in low-bandwidth areas.",
    solution: "Created a scalable WebRTC video conferencing gateway. Integrated secure HL7/FHIR APIs for EHR synchronization and implemented end-to-end encryption for all patient-doctor communications.",
    metrics: [
      "1.2M+ virtual visits completed",
      "30% reduction in patient wait time",
      "94% patient satisfaction score"
    ],
    deliverables: [
      "HIPAA Compliant Web Platform",
      "Patient Mobile App",
      "Doctor Consult Portal",
      "HL7 EHR Integrations"
    ]
  },
  {
    id: "smart-logistics",
    title: "Smart Logistics System",
    category: "Logistics",
    filterCategory: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    shortDesc: "Real-time tracking and analytics system that improved delivery efficiency by 40%.",
    longDesc: "Developed an IoT-enabled logistics management platform for real-time fleet tracking, dynamic route optimization, and delivery analytics.",
    challenge: "Managing multi-route coordination dynamically, processing massive IoT sensor data, and predicting delivery delays in real time.",
    solution: "Utilized a serverless ingestion pipeline to handle real-time GPS telemetry data. Designed a dynamic routing algorithm that automatically recalculates routes based on traffic, weather, and cargo priority.",
    metrics: [
      "40% delivery efficiency boost",
      "15% reduction in fuel costs",
      "Real-time tracking accuracy of 99.5%"
    ],
    deliverables: [
      "Dispatcher Dashboard",
      "Driver Mobile App",
      "Customer tracking portal",
      "Analytics Engine"
    ]
  },
  {
    id: "eco-retail-store",
    title: "EcoRetail E-commerce",
    category: "Retail & E-commerce",
    filterCategory: "Retail",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    shortDesc: "A high-performance headless e-commerce store with integrated inventory analytics.",
    longDesc: "Crafted a custom headless commerce platform for an eco-friendly retail brand, integrating real-time carbon offset calculations at checkout.",
    challenge: "The client's previous monolithic shop platform had poor load speeds and low mobile conversion rate, leading to cart abandonment.",
    solution: "Built a headless commerce front-end using Next.js, powered by a high-performance GraphQL API. Integrated custom Shopify APIs and an automated inventory management tool.",
    metrics: [
      "65% faster page loading",
      "24% increase in checkout conversion",
      "500k+ monthly active users"
    ],
    deliverables: [
      "Headless E-commerce Front-end",
      "Custom Cart System",
      "Carbon Offset Integration API",
      "Admin Stock Panel"
    ]
  },
  {
    id: "smart-energy-grid",
    title: "AeroGrid Smart Energy",
    category: "Energy & Utilities",
    filterCategory: "Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    shortDesc: "Smart grid analytics platform monitoring energy distribution in real time.",
    longDesc: "An industrial-grade IoT platform that aggregates and visualizes telemetry from electricity substations to predict overload anomalies.",
    challenge: "Aggregating millions of telemetry signals per second from distributed electrical grids, and alerting operations before outages occur.",
    solution: "Built a robust, distributed stream processing architecture using Apache Flink and a time-series database. Included a high-performance interactive map dashboard for grid operators.",
    metrics: [
      "85% reduction in grid down-time",
      "10M+ daily telemetry events processed",
      "20% lower maintenance overhead"
    ],
    deliverables: [
      "Operations Dashboard",
      "Alert Notification Service",
      "Predictive Maintenance API"
    ]
  },
  {
    id: "cloudscale-saas",
    title: "CloudScale SaaS Platform",
    category: "SaaS & Cloud",
    filterCategory: "SaaS",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    shortDesc: "Enterprise multi-tenant platform for automated cloud infrastructure orchestration.",
    longDesc: "Designed and engineered a multi-tenant software-as-a-service application enabling developers to provision and monitor Kubernetes environments.",
    challenge: "Providing secure isolation between customer environments while simplifying complex Kubernetes configuration and billing tracking.",
    solution: "Created a Kubernetes operator that automates cluster provisioning and namespace separation. Developed an intuitive SaaS billing dashboard integrating Stripe for usage-based billing.",
    metrics: [
      "3.5x faster environment deployments",
      "30% savings on cloud infrastructure",
      "50+ enterprise clients"
    ],
    deliverables: [
      "SaaS Control Plane",
      "Kubernetes Operator",
      "Billing & Analytics Integration",
      "Command Line Interface (CLI)"
    ]
  }
];

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Lead Modal state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState<"quote" | "get-started">("get-started");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  
  // Case study modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "FinTech", "Healthcare", "Logistics", "Retail", "Energy", "SaaS"];

  const handleNavClick = (sectionValue: string) => {
    setActiveSection(sectionValue);
    if (sectionValue === "contact") {
      triggerLeadModal("quote");
    }
  };

  const triggerLeadModal = (type: "quote" | "get-started") => {
    setLeadModalType(type);
    setIsLeadModalOpen(true);
    setFormSubmitted(false);
    setFormState({ name: "", email: "", message: "" });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsLeadModalOpen(false);
      setFormSubmitted(false);
    }, 2800);
  };

  // Filtered projects
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.filterCategory === activeFilter);

  return (
    <div className="bg-white w-full min-h-screen flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      
      {/* 1. NAVBAR */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={() => triggerLeadModal("get-started")}
      />

      <main className="flex-grow">
        
        {/* 2. HERO BANNER */}
        <section className="relative overflow-hidden" style={{ minHeight: '440px' }}>
          {/* Background Banner Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/home/portfoliobanner.png"
              alt="Portfolio Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* White Gradient Overlay for Text Area */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '55%' }}></div>

          {/* Dot Grid Top Left */}
          <div className="absolute left-8 top-16 grid gap-2 z-10" style={{ gridTemplateColumns: 'repeat(6, 8px)', gridTemplateRows: 'repeat(6, 8px)' }}>
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-border"></div>
            ))}
          </div>

          {/* Dot Grid Bottom Left */}
          <div className="absolute left-8 bottom-12 grid gap-2 z-10" style={{ gridTemplateColumns: 'repeat(6, 8px)', gridTemplateRows: 'repeat(4, 8px)' }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-border"></div>
            ))}
          </div>

          <div className="flex items-center justify-between px-20 py-16 max-w-7xl mx-auto relative">
            {/* Left Content */}
            <div className="flex-1 max-w-lg z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-accent-green"></div>
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                  OUR PORTFOLIO
                </span>
              </div>
              
              <h1 className="font-headings font-bold text-4xl text-foreground leading-tight mb-2">
                Crafting Digital Excellence.
              </h1>
              <h1 className="font-headings font-bold text-4xl text-primary leading-tight mb-6">
                Showcasing Our Work.
              </h1>
              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Explore our collection of successful digital transformations, custom enterprise platforms, and innovative applications engineered to scale businesses.
              </p>
            </div>

            {/* Right side spacer */}
            <div className="flex-1 z-10"></div>
          </div>
        </section>

        {/* 3. UNIQUE PORTFOLIO FILTER & ALTERNATING ROW SHOWCASE */}
        <section className="px-6 sm:px-12 md:px-20 py-20 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
              CASE STUDIES
            </span>
            <h2 className="font-headings font-bold text-3xl sm:text-4xl text-foreground">
              Projects That Define <span className="text-primary font-extrabold">Our Expertise</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded mt-3"></div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Alternating Projects Layout Container */}
          <motion.div 
            layout
            className="space-y-28 lg:space-y-40"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.45 }}
                    className={`flex flex-col lg:flex-row ${
                      isEven ? "" : "lg:flex-row-reverse"
                    } gap-12 lg:gap-16 items-center justify-between relative`}
                  >
                    
                    {/* Media Block (Screenshot/Visual Card) */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="w-full lg:w-[52%] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-border cursor-pointer group relative bg-slate-50 flex-shrink-0"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                      {/* Interactive Glass-morphic Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-white/20 text-primary text-xs font-bold tracking-widest uppercase transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          Deep Dive Case Study
                        </div>
                      </div>
                    </div>

                    {/* Text Block */}
                    <div className="w-full lg:w-[42%] relative flex flex-col items-start min-h-[220px]">
                      
                      {/* Giant Modern Outline Index Number */}
                      <div 
                        className="absolute -top-16 -left-6 text-[130px] font-headings font-black select-none pointer-events-none z-0 opacity-[0.06] leading-none"
                        style={{ 
                          WebkitTextStroke: "1.5px var(--color-foreground)", 
                          color: "transparent"
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Floating Category Badge */}
                      <span className="relative z-10 inline-block bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-4 border border-primary/10">
                        {project.category}
                      </span>

                      {/* Project Title */}
                      <h3 className="relative z-10 font-headings font-extrabold text-2xl sm:text-3xl text-foreground mb-4 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="relative z-10 text-muted-foreground text-sm leading-relaxed mb-6">
                        {project.shortDesc}
                      </p>

                      {/* Direct Inline Metrics Spotlights */}
                      <div className="relative z-10 flex flex-wrap gap-2 mb-8">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <div 
                            key={i} 
                            className="flex items-center gap-1.5 bg-[#f0fdf4] border border-[#dcfce7] text-[#16a34a] px-3.5 py-1.5 rounded-full text-xs font-semibold"
                          >
                            <Check className="w-3.5 h-3.5 text-[#16a34a]" strokeWidth={3.5} />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Trigger */}
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="relative z-10 inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase hover:gap-3 transition-all cursor-pointer group"
                      >
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.7} />
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category. We are constantly expanding our portfolio!
            </div>
          )}
        </section>

        {/* 4. INTERACTIVE CTA BANNER */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #eef3fb 0%, #dce8f8 100%)', minHeight: '160px' }}>
          {/* Wave Background */}
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z" fill="#1a4cde" opacity="0.15"></path>
              <path d="M0,100 C480,20 960,140 1440,60 L1440,160 L0,160 Z" fill="#1a4cde" opacity="0.1"></path>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-20 py-12 max-w-7xl mx-auto gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="22,2 40,38 4,38" fill="none" stroke="white" strokeWidth="3"></polygon>
                  <polygon points="14,16 22,4 30,16" fill="#22c55e" opacity="0.9"></polygon>
                  <polygon points="10,36 22,14 34,36" fill="white" opacity="0.7"></polygon>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-0.5 bg-accent-green"></div>
                  <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                    LET'S PARTNER TOGETHER
                  </span>
                </div>
                <h3 className="font-headings font-bold text-2xl text-foreground">
                  Ready to Build Your Success Story?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We're ready to engineer custom solutions that scale with your growth.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => triggerLeadModal("quote")}
                className="bg-primary text-white font-semibold text-sm px-8 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 active:scale-95 transition-all cursor-pointer shadow-md shadow-primary/10"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => triggerLeadModal("get-started")}
                className="bg-white text-foreground border border-border font-semibold text-sm px-8 py-3 rounded-md flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <Footer />

      {/* 6. DETAIL CASE STUDY POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl relative w-full max-w-4xl max-h-[85vh] overflow-y-auto z-10 border border-border"
            >
              {/* Cover Banner */}
              <div className="relative h-64 md:h-80 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-8">
                  <div>
                    <span className="bg-accent-green text-white font-semibold text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-headings font-extrabold text-white mt-2">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/75 p-2 rounded-full transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Side: Detail specifications */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Overview</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">The Solution</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Right Side: Metrics & Deliverables */}
                <div className="space-y-6 lg:border-l lg:border-gray-100 lg:pl-8">
                  {/* Key Metrics */}
                  <div className="bg-[#f0f5ff] rounded-xl p-5 border border-primary/10">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" /> Key Metrics
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-foreground">
                          <Check className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" /> Scope of Work
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Bottom footer button */}
              <div className="bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    triggerLeadModal("quote");
                  }}
                  className="bg-primary text-white hover:bg-opacity-95 text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-md shadow-md shadow-primary/10 transition-all flex items-center gap-2"
                >
                  <span>Inquire About Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. LEAD CAPTURE MODAL PORTAL */}
      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white border border-border rounded-xl shadow-2xl relative w-full max-w-md overflow-hidden z-10"
            >
              {/* Header */}
              <div className="bg-[#0d1b4b] text-white p-6 relative">
                <button
                  onClick={() => setIsLeadModalOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="font-headings font-bold text-lg sm:text-xl">
                  {leadModalType === "quote" ? "Request a Technical Quote" : "Get Started with 3Novator"}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Partner with our veteran system architects to deliver mission-critical digital excellence.
                </p>
              </div>

              {/* Content Form */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleLeadSubmit}
                      className="space-y-4 text-left"
                    >
                      <div>
                        <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Elizabeth Myers"
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded px-3.5 py-2 text-xs outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="elizabeth@company.com"
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded px-3.5 py-2 text-xs outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                          Message / Specifications
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="How can we help? E.g. Cloud scaling, custom databases..."
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded px-3.5 py-2 text-xs outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-opacity-95 text-white font-sans font-bold text-xs tracking-widest uppercase py-3 rounded-[4px] shadow-md shadow-primary/10 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>SEND BRIEF</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>

                      {/* Immediate Contact Information */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-primary" /> hello@3novator.tech
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-accent-green" /> SF, California
                        </span>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-8 flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-14 h-14 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <CheckCircle className="w-7 h-7" />
                      </div>
                      <h4 className="font-headings font-bold text-base text-foreground mb-1">
                        Brief Received Successfully!
                      </h4>
                      <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                        Thank you, <strong>{formState.name}</strong>. A systems lead will contact you shortly with a prepared roadmap blueprint.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
