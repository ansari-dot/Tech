import { useParams, useNavigate } from "react-router-dom";
import { 
  Layers, ShieldCheck, Cpu, Clock, Settings, LayoutDashboard, Shield, 
  TrendingUp, Users, Code, PenTool, FlaskConical, Rocket, Search, 
  ArrowRight, ArrowLeft, Check, X, Send, CheckCircle, Mail, MapPin, 
  Zap, ChevronRight, Monitor, Database, Smartphone, Sparkles, Terminal, 
  Briefcase, Tag, Download, ShoppingBag, Heart, ShoppingCart, Globe, Calendar
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { getStartedWithWhatsApp } from "../utils/whatsapp";
import { projects } from "../data/projectsData";
import { motion, AnimatePresence } from "motion/react";
import { generateCaseStudyPdf } from "../utils/generateCaseStudyPdf";

export default function PortfolioDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("portfolio");
  
  // Lead modal state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState<"quote" | "get-started">("get-started");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const project = projects.find(p => p.id === projectId);

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Handle invalid project redirect
  useEffect(() => {
    if (!project && projectId) {
      navigate("/portfolio");
    }
  }, [project, projectId, navigate]);

  if (!project) {
    return null;
  }

  // Next project navigation calculations
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    if (section === "contact") {
      triggerLeadModal("quote");
    } else {
      navigate("/portfolio");
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
      setFormState({ name: "", email: "", message: "" });
    }, 2800);
  };

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 2800);
  };

  // Split title into two lines to match Hero layout
  const titleWords = project.title.split(" ");
  const halfLength = Math.ceil(titleWords.length / 2);
  const titleFirst = titleWords.slice(0, halfLength).join(" ");
  const titleLast = titleWords.slice(halfLength).join(" ");

  // Custom 6 features mapping for the overview section
  const featuresList = getProjectFeatures(project.id);

  // Parsed metrics mapping for Key Results
  const metricColors = [
    { text: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", icon: TrendingUp },
    { text: "text-primary", bg: "bg-blue-50", border: "border-blue-100", icon: Users },
    { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", icon: ShoppingCart },
    { text: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100", icon: Layers }
  ];

  return (
    <div className="bg-[#fcfdfd] w-full font-body text-slate-800 min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary">
      {/* NavBar */}
      <NavBar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={getStartedWithWhatsApp}
      />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION - Full Screen Background Screenshot Banner */}
        <section className="relative overflow-hidden min-h-[450px] flex items-center border-b border-slate-100 animate-fade-in">
          {/* Background Banner Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '55%' }}></div>

          {/* Decorative Dots */}
          <div className="absolute left-4 top-8 flex flex-col gap-1.5 opacity-20 z-10">
            {Array.from({ length: 8 }).map((_, row) => (
              <div key={row} className="flex gap-1.5">
                {Array.from({ length: 3 }).map((_, col) => (
                  <div key={col} className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                ))}
              </div>
            ))}
          </div>

          <div className="max-w-6xl pl-8 sm:pl-16 md:pl-24 w-full relative z-10 py-16 text-left">
            <div className="max-w-xl space-y-6">
              
              {/* Green badge line */}
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2.5px] bg-emerald-500 rounded"></span>
                <span className="text-emerald-500 font-extrabold text-[11px] tracking-widest uppercase">
                  PROJECT DETAILS
                </span>
              </div>

              {/* Split title */}
              <h1 className="font-headings font-extrabold text-4xl sm:text-5xl leading-[1.1] text-slate-900 tracking-tight">
                {titleFirst} <br />
                <span className="text-primary">{titleLast}</span>
              </h1>

              {/* Short description */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-md font-normal">
                {project.shortDesc}
              </p>

              {/* Technical specs icons row */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-t border-slate-200/80">
                {project.clientName && (
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-slate-400" strokeWidth={2} />
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Client</div>
                      <div className="text-xs font-bold text-slate-700">{project.clientName}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-slate-400" strokeWidth={2} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Duration</div>
                    <div className="text-xs font-bold text-slate-700">{project.timeline}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-slate-400" strokeWidth={2} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Category</div>
                    <div className="text-xs font-bold text-slate-700">{project.category}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400" strokeWidth={2} />
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Live</div>
                    <div className="text-xs font-bold text-slate-700">Live Project</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary hover:bg-opacity-95 text-white font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 rounded-md shadow-md shadow-primary/10 transition-all cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <Globe className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={getStartedWithWhatsApp}
                    className="flex items-center gap-2 bg-primary hover:bg-opacity-95 text-white font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 rounded-md shadow-md shadow-primary/10 transition-all cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {project.caseStudyPdf || true ? (
                  <button
                    onClick={() => generateCaseStudyPdf(project)}
                    className="flex items-center gap-2 border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 rounded-md transition-all cursor-pointer bg-white"
                  >
                    <span>Case Study</span>
                    <Download className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => triggerLeadModal("quote")}
                    className="flex items-center gap-2 border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 rounded-md transition-all cursor-pointer bg-white"
                  >
                    <span>Case Study</span>
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* 2. OVERVIEW OF THE PROJECT SECTION */}
        <section className="py-20 px-6 sm:px-12 md:px-16 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Center Header */}
            <div className="text-primary font-bold text-[11px] tracking-widest uppercase mb-1">
              PROJECT OVERVIEW
            </div>
            <div className="w-10 h-[2.5px] bg-emerald-500 mx-auto rounded-full mb-4"></div>
            
            <h2 className="font-headings font-extrabold text-2xl sm:text-3xl text-slate-900 mb-6">
              Overview <span className="text-primary">of the Project</span>
            </h2>
            
            <p className="text-slate-500 text-[13px] leading-relaxed max-w-2xl mx-auto mb-16 font-normal">
              {project.longDesc}
            </p>

            {/* Split Content (Mockup Device & Features List) */}
            <div className="flex flex-col lg:flex-row gap-16 items-center text-left">
              
              {/* Left Column Browser Device Mockup */}
              <div className="flex-1 w-full max-w-[500px] mx-auto relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl scale-[1.03] blur-lg transition-transform duration-500"></div>
                <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden aspect-[16/10] flex flex-col relative z-10">
                  {/* Browser top header */}
                  <div className="h-6 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5 rounded-t-3xl flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  {/* Browser screen area */}
                  <div className="flex-grow overflow-hidden bg-slate-50">
                    <img 
                      src={project.cardImage || project.image} 
                      alt="Interface Screenshot" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                </div>
              </div>

              {/* Right Column Features Grid */}
              <div className="flex-[1.5] w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {featuresList.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className={`w-11 h-11 rounded-full ${feat.bg} flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100`}>
                        <FeatIcon className={`w-5 h-5 ${feat.text}`} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-headings font-bold text-sm text-slate-800 group-hover:text-primary transition-colors">
                          {feat.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-normal">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* 3. TECHNOLOGIES USED SECTION */}
        <section className="py-16 px-6 sm:px-12 md:px-16 bg-[#f8fafc] border-b border-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="text-primary font-bold text-[11px] tracking-widest uppercase mb-1">
              TECHNOLOGIES USED
            </div>
            <div className="w-10 h-[2.5px] bg-emerald-500 mx-auto rounded-full mb-10"></div>

            {/* Square Badges Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
              {project.technologies.map((tech, idx) => {
                const emblem = getTechEmblem(tech);
                return (
                  <div key={idx} className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center shadow-xs group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                      <div className="select-none flex items-center justify-center">{emblem}</div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 group-hover:text-primary transition-colors">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. KEY RESULTS SECTION */}
        <section className="py-20 px-6 sm:px-12 md:px-16 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="text-primary font-bold text-[11px] tracking-widest uppercase mb-1">
              KEY RESULTS
            </div>
            <div className="w-10 h-[2.5px] bg-emerald-500 mx-auto rounded-full mb-12"></div>

            {/* Horizontal outcomes grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {project.metrics.map((metric, idx) => {
                const colorConfig = metricColors[idx % metricColors.length];
                const StatIcon = colorConfig.icon;
                const numberMatch = metric.match(/^(\d+(?:\.\d+)?%?[M\+k]?)/);
                const metricNumber = numberMatch ? numberMatch[1] : "100%";
                const metricDesc = numberMatch ? metric.replace(numberMatch[1], "").trim() : metric;

                return (
                  <div 
                    key={idx}
                    className={`bg-white border ${colorConfig.border} rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 text-left`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${colorConfig.bg} flex items-center justify-center text-slate-800 flex-shrink-0`}>
                      <StatIcon className={`w-5 h-5 ${colorConfig.text}`} />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className={`font-headings font-black text-2xl ${colorConfig.text}`}>
                        {metricNumber}
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 leading-snug">
                        {metricDesc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. DYNAMIC CAROUSEL - Explore Next Case */}
        <section className="py-16 px-6 sm:px-12 md:px-16 bg-[#f8fafc] border-b border-slate-100">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => navigate('/portfolio')}
              className="flex items-center gap-2 text-xs font-extrabold text-slate-500 hover:text-primary uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            
            <div 
              onClick={() => navigate(`/portfolio/${nextProject.id}`)}
              className="flex items-center gap-4 bg-white border border-slate-200/80 rounded-xl p-4 cursor-pointer hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="text-right">
                <span className="text-[9px] text-slate-400 font-bold tracking-wider uppercase block mb-0.5">Explore Next Case</span>
                <span className="text-xs font-extrabold text-slate-800 group-hover:text-primary transition-colors">{nextProject.title}</span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA BANNER CARD */}
        <section className="py-10 px-6 sm:px-12 md:px-16 max-w-6xl mx-auto">
          <div className="bg-white border border-[#dbebff] rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-stretch text-left">
            
            {/* Left Rocket Illustration Frame - Edge-to-Edge full-height (fixed compact width) */}
            <div className="w-full md:w-[220px] shrink-0 min-h-[160px] md:min-h-0 relative bg-slate-900">
              <img 
                src="/assets/rocket_launch_cta.png" 
                alt="Rocket Blast" 
                className="absolute inset-0 w-full h-full object-cover object-center" 
              />
            </div>

            {/* Right Content Block (Text & Actions) */}
            <div className="flex-grow p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Middle text description */}
              <div className="space-y-2.5">
                <div className="text-[#10b981] font-bold text-[10px] tracking-widest uppercase">
                  LIKE WHAT YOU SEE?
                </div>
                <h3 className="font-headings font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                  Let's Build Something <br/>
                  <span className="text-primary">Amazing Together!</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                  Have a project in mind? We'd love to hear about it and help you bring your ideas to life.
                </p>
              </div>

              {/* Right Button */}
              <div className="flex-shrink-0">
                <button 
                  onClick={getStartedWithWhatsApp} 
                  className="flex items-center gap-2 bg-primary hover:bg-[#0047df] text-white font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-lg shadow-md shadow-primary/10 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Start Your Project</span>
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* LEAD CAPTURE MODAL PORTAL */}
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
              className="bg-white border border-border rounded-xl shadow-2xl relative w-full max-w-md overflow-hidden z-10 text-left"
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
              <div className="p-6 text-slate-800 bg-white">
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
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white text-foreground rounded px-3.5 py-2 text-xs outline-none transition-all"
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
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white text-foreground rounded px-3.5 py-2 text-xs outline-none transition-all"
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
                          placeholder={`How can we help? Inquiring regarding "${project.title}"...`}
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white text-foreground rounded px-3.5 py-2 text-xs outline-none transition-all resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-opacity-95 text-white font-sans font-bold text-xs tracking-widest uppercase py-3 rounded-[4px] shadow-md shadow-primary/10 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>SEND BRIEF</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>

                      {/* Contact details footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-primary" /> threenovator@gmail.com
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-3 h-3 text-accent-green" /> Remote-first
                        </span>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-8 flex flex-col items-center justify-center text-center bg-white"
                    >
                      <div className="w-14 h-14 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <CheckCircle className="w-7 h-7" />
                      </div>
                      <h4 className="font-headings font-bold text-base text-foreground mb-1">
                        Brief Received Successfully!
                      </h4>
                      <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                        Thank you, <strong>{formState.name}</strong>. A systems lead will contact you shortly.
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

// Helper: Custom features getter mapping 6 specialized features per project
function getProjectFeatures(id: string) {
  switch (id) {
    case "tmobile-tec-store":
      return [
        { title: "Dynamic Product Catalog", desc: "Interactive grid panels for categorizing phones, laptops, and consoles.", icon: ShoppingBag, bg: "bg-blue-50", text: "text-primary" },
        { title: "Headless Checkout Cart", desc: "Local state synchronization routing orders seamlessly without database lags.", icon: Layers, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Variant Spec Selectors", desc: "Select custom colorways and storage specifications in dynamic item views.", icon: Settings, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "MERN Fulfillment Pipeline", desc: "Instant checkout controllers registering transactions records.", icon: Zap, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Client Security Locks", desc: "Secure client authentication protocols mapping customer credentials.", icon: ShieldCheck, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Omni-device Scaling", desc: "Fluid storefront viewports designed for standard smartphones and viewports.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "edpreps-exam-portal":
      return [
        { title: "28K+ Board MCQs", desc: "Access customized prep questions with province-specific modules for MDCAT.", icon: ShoppingBag, bg: "bg-blue-50", text: "text-primary" },
        { title: "Mistake Notebook Recovery", desc: "Automated notebook logs isolating user errors for targeted re-testing.", icon: Layers, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "AI Rank Predictor API", desc: "Algorithms processing mock metrics to predict provincial aggregate ratings.", icon: Monitor, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Dynamic Study Schedulers", desc: "Personalized study calendars scheduling target timelines around exam dates.", icon: Clock, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Exam Simulators viewports", desc: "Realistic mock portals replicating actual medical entry exam boards layout.", icon: ShieldCheck, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Professional Explanations", desc: "Step-by-step mathematical solutions and textbook reasoning lists.", icon: Settings, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "north-paradise-treks":
      return [
        { title: "Interactive Tour Catalog", desc: "Dynamic adventure booking catalogs with honeymoon and expedition packages.", icon: ShoppingBag, bg: "bg-blue-50", text: "text-primary" },
        { title: "Multi-day Itinerary Builder", desc: "Interactive timeline layouts mapping camps, durations, and terrain difficulty.", icon: Layers, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Live Booking Inquiry Gateways", desc: "Seamless MERN booking capture linked directly to Hostinger mail channels.", icon: Mail, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Offline Cache Synchronization", desc: "Offline-first itinerary reviews for high-altitude trekking coordinators.", icon: ShieldCheck, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Centralized Admin Dashboard", desc: "Management consoles adjusting packages pricing and group slot status.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Fluid Mobile Customizations", desc: "Fluid layouts formatted for adventure-seeking mobile browser users.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "banking-platform":
      return [
        { title: "Biometric Security Audit", desc: "Multi-factor fingerprint and tokenized API transactions validation.", icon: ShieldCheck, bg: "bg-blue-50", text: "text-primary" },
        { title: "Real-Time Ledger Sync", desc: "Instant ledger balances updates with Apache Kafka pipeline streams.", icon: Layers, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Fraud Prevention Analytics", desc: "Machine Learning anomaly triggers identifying risky transfers.", icon: Shield, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Fast QR Transfers", desc: "Instant peer-to-peer sending with integrated QR scanner feeds.", icon: Zap, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Admin Configuration Desk", desc: "Centralized controls to manage transactions parameters.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Fluid Multi-device Sync", desc: "Seamless banking application scaling on tablet and mobile viewports.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "telehealth-solution":
      return [
        { title: "WebRTC Patient Calls", desc: "Low-latency HD audio/video consultation feeds directly inside browsers.", icon: Monitor, bg: "bg-blue-50", text: "text-primary" },
        { title: "HIPAA Protected Files", desc: "Encrypted healthcare summaries, prescription lists, and medical history.", icon: ShieldCheck, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Instant Chat channels", desc: "Direct real-time communications channels linking staff and patient logs.", icon: Mail, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Automated Prescriptions", desc: "Digital transfer of validated orders to partnered local pharmacies.", icon: Zap, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Insurance Billing Integrations", desc: "Direct claim processing and automated invoices calculations.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Omni-device Scaling", desc: "Responsive layout adjustments for consultations on mobile web views.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "smart-logistics":
      return [
        { title: "Route Optimization Engine", desc: "Machine learning algorithms modeling fuel consumption and routing traffic.", icon: MapPin, bg: "bg-blue-50", text: "text-primary" },
        { title: "Fleet Telemetry Hub", desc: "Live GPS cargo coordinates updates plotted on interactive maps grids.", icon: Monitor, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Time-Tracking Logger", desc: "Digital logs documenting driver travel hours and stop parameters.", icon: Clock, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Automated Waypoint Alerts", desc: "Waypoints proximity alerts notifying client receivers of arrival status.", icon: Zap, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Dispatcher Overrides", desc: "Centralized administrator console adjusting route variables.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Field Operations Access", desc: "Fluid viewport scaling designed for on-road courier tablet applications.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "eco-retail-store":
      return [
        { title: "User-friendly shopping experience", desc: "Clean UI/UX with smooth catalog navigation and seamless checkout flow.", icon: ShoppingBag, bg: "bg-blue-50", text: "text-primary" },
        { title: "Admin Dashboard", desc: "Powerful dashboard to manage products, orders, users, and reports.", icon: LayoutDashboard, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Secure Payments", desc: "Multiple payment gateway integration for safe and fast transactions.", icon: ShieldCheck, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Product Management", desc: "Add, update, and manage products with categories, variants, and inventory.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Order Management", desc: "Real-time order tracking and status updates for users.", icon: Zap, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Responsive Design", desc: "Fully responsive across all devices for a consistent experience.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    case "smart-energy-grid":
      return [
        { title: "Substation Telemetry Map", desc: "Visual geographic representations mapping live substation loads feeds.", icon: MapPin, bg: "bg-blue-50", text: "text-primary" },
        { title: "Usage Spikes Predictions", desc: "Time-series predictive modeling forecasting consumption demands.", icon: Monitor, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Outage Emergency Alarms", desc: "Immediate warning distribution sending SMS pings to local repair crews.", icon: ShieldCheck, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Battery Status Logs", desc: "Track charge capacity and input indicators on energy reservoirs.", icon: Layers, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Energy Redirect Switches", desc: "Admin overrides allowing manual load balancing rerouting.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Mobile Field Layouts", desc: "Fluid layouts formatted for technician tablet grid management.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
    default: // cloudscale-saas
      return [
        { title: "Workspace Integration Panel", desc: "Unified dashboards plotting integration credentials and workspace status.", icon: LayoutDashboard, bg: "bg-blue-50", text: "text-primary" },
        { title: "REST API Credentials Desk", desc: "User console to toggle webhook alerts and view developer documentation.", icon: Monitor, bg: "bg-purple-50", text: "text-purple-600" },
        { title: "Secure Stripe Subscriptions", desc: "Invoicing pipeline managing seat licenses and account tiers.", icon: ShieldCheck, bg: "bg-emerald-50", text: "text-emerald-600" },
        { title: "Audit Trail Ledger", desc: "Searchable activity tables document administrative modifications.", icon: Layers, bg: "bg-orange-50", text: "text-orange-500" },
        { title: "Organization Controls", desc: "Settings panel to configure tenant capabilities and seats.", icon: Settings, bg: "bg-rose-50", text: "text-rose-500" },
        { title: "Cross-platform Client View", desc: "Responsive workspace layout options adjusting on all viewport width specs.", icon: Smartphone, bg: "bg-cyan-50", text: "text-cyan-500" }
      ];
  }
}

// Helper: Custom tech stack emoji indicators
function getTechEmblem(tech: string): React.ReactNode {
  const t = tech.toLowerCase();
  if (t.includes("react")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 841.9 595.3"
        className="w-10 h-10 animate-[spin_20s_linear_infinite]"
      >
        <g fill="none" stroke="#61DAFB" strokeWidth="30">
          <ellipse cx="420.9" cy="296.5" rx="170" ry="70"/>
          <ellipse cx="420.9" cy="296.5" rx="170" ry="70" transform="rotate(60 420.9 296.5)"/>
          <ellipse cx="420.9" cy="296.5" rx="170" ry="70" transform="rotate(120 420.9 296.5)"/>
        </g>
        <circle cx="420.9" cy="296.5" r="35" fill="#61DAFB"/>
      </svg>
    );
  }
  if (t.includes("node")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10">
        <polygon points="128,16 224,72 224,184 128,240 32,184 32,72" fill="#539E43" />
        <text x="128" y="150" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="72" fontWeight="bold" fill="white">JS</text>
      </svg>
    );
  }
  if (t.includes("mongo")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10">
        <path d="M128 20 C108 52, 92 92, 98 136 C104 178, 118 212, 128 236 C138 212, 152 178, 158 136 C164 92, 148 52, 128 20Z" fill="#13AA52" />
        <path d="M128 24 C126 68, 124 118, 128 236" stroke="#ffffff" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  if (t.includes("tailwind")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" className="w-10 h-6">
        <path fill="#38BDF8" d="M128 38 C111 17 83 17 68 38 C60 48 52 54 38 54 C52 73 74 83 91 73 C101 67 108 57 120 57 C137 57 147 73 155 89 C172 110 200 110 215 89 C223 79 231 73 245 73 C231 54 209 44 192 54 C182 60 175 70 163 70 C146 70 136 54 128 38Z" />
      </svg>
    );
  }
  if (t.includes("aws")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10">
        <path d="M180 190H78c-28 0-50-21-50-48 0-24 18-44 42-47 8-28 33-49 63-49 36 0 65 29 65 65 18 3 32 19 32 38 0 23-19 41-42 41Z" fill="#FF9900" />
        <path d="M74 205c28 18 80 18 108 0" fill="none" stroke="#232F3E" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }
  if (t.includes("hostinger")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10">
        <g fill="#673DE6">
          <path d="M56 36h40v184H56z"/>
          <path d="M160 36h40v184h-40z"/>
          <path d="M96 88h64v32H96z"/>
          <path d="M96 136h64v32H96z"/>
        </g>
      </svg>
    );
  }
  if (t.includes("redis")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10">
        <polygon points="128,40 42,76 128,112 214,76" fill="#D82C20" />
        <polygon points="42,76 42,126 128,162 214,126 214,76 128,112" fill="#C6302B" />
        <polygon points="42,126 42,176 128,216 214,176 214,126 128,162" fill="#A41E22" />
        <rect x="92" y="70" width="72" height="10" rx="5" fill="#FFFFFF"/>
        <rect x="82" y="104" width="92" height="10" rx="5" fill="#FFFFFF"/>
        <rect x="92" y="138" width="72" height="10" rx="5" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (t.includes("express")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10">
        <g fill="#000000">
          <circle cx="128" cy="128" r="96" fill="none" stroke="#000000" strokeWidth="12"/>
          <path d="M88 128c0-22 16-38 40-38 20 0 36 13 36 34 0 5-1 8-2 10H108c2 18 15 28 33 28 10 0 19-3 27-9l6 9c-10 8-22 13-36 13-29 0-50-20-50-47zm64-8c-1-13-10-21-24-21s-24 8-26 21h50z"/>
        </g>
      </svg>
    );
  }

  let emoji = "💻";
  if (t.includes("stripe")) emoji = "💳";
  else if (t.includes("next")) emoji = "▲";
  else if (t.includes("docker")) emoji = "🐳";
  else if (t.includes("python")) emoji = "🐍";
  else if (t.includes("postgresql")) emoji = "🐘";
  else if (t.includes("kafka")) emoji = "⚙️";
  else if (t.includes("graphql")) emoji = "🚀";
  else if (t.includes("webrtc")) emoji = "📞";
  else if (t.includes("kubernetes")) emoji = "⚓";
  else if (t.includes("shopify")) emoji = "🛍️";

  return <span className="text-3xl">{emoji}</span>;
}
