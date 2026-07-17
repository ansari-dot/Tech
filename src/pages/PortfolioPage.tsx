import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, X, Send, CheckCircle, Mail, MapPin, 
  Briefcase, BarChart2, Users, Globe, Award, Check,
  Landmark, HeartPulse, Truck, ShoppingCart, Cloud, Zap,
  TrendingUp, Terminal
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { projects, Project } from "../data/projectsData";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  
  // Lead Modal state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState<"quote" | "get-started">("get-started");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

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
        <section className="relative overflow-hidden" style={{ minHeight: '550px' }}>
          {/* Background Banner Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/home/portfolio.png"
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

          <div className="flex items-center justify-between pl-8 sm:pl-16 md:pl-24 pr-8 py-16 max-w-7xl w-full relative">
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
                      onClick={() => navigate(`/portfolio/${project.id}`)}
                      className="w-full lg:w-[52%] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-border cursor-pointer group relative bg-slate-50 flex-shrink-0"
                    >
                      <img
                        src={project.cardImage || project.image}
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
                        onClick={() => navigate(`/portfolio/${project.id}`)}
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
