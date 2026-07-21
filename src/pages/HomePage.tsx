import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStartedWithWhatsApp } from "../utils/whatsapp";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle, Mail, Phone, Globe } from "lucide-react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TrustedBar from "../components/TrustedBar";
import AboutUs from "../components/AboutUs";
import IndustriesWeServe from "../components/IndustriesWeServe";
import OurProcess from "../components/OurProcess";
import SuccessStories from "../components/SuccessStories";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function HomePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"quote" | "get-started">("get-started");
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNavClick = (sectionValue: string) => {
    setActiveSection(sectionValue);
    if (sectionValue === "contact") {
      triggerModal("quote");
    } else if (sectionValue !== "home") {
      // For other links in the premium header, open the interactive portal to explain the concept
      triggerModal("get-started");
    }
  };

  const triggerModal = (type: "quote" | "get-started") => {
    setModalType(type);
    setIsModalOpen(true);
    setFormSubmitted(false);
    setFormState({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      
      {/* 1. STICKY PREMIUM NAVBAR */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={getStartedWithWhatsApp}
      />

      {/* 2. CORE VIEWPORT CONTAINER */}
      <main className="flex-grow flex flex-col justify-center">
        
        {/* HERO SECTION */}
        <div id="home" className="w-full">
          <HeroSection 
            onQuoteClick={() => navigate("/contact")}
            onWorkClick={() => navigate("/portfolio")}
          />
        </div>

        {/* TRUSTED BY COMPANIES BAR (Temporarily Hidden) */}
        {/* <TrustedBar /> */}
 {/* Services SECTION */}
        <Services />
        {/* ABOUT US SECTION */}
        <AboutUs />

        {/* INDUSTRIES WE SERVE SECTION */}
        <IndustriesWeServe />

        {/* OUR PROCESS SECTION */}
        <OurProcess />

        {/* SUCCESS STORIES SECTION */}
        <SuccessStories />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* CTA SECTION */}
        <CTASection />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE COMPACT PORTAL MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
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
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                  id="modal-close"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="font-headings font-bold text-lg sm:text-xl">
                  {modalType === "quote" ? "Request a Technical Quote" : "Get Started with 3Novator"}
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
                      onSubmit={handleSubmit}
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
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded px-3.5 py-2 text-sm outline-none transition-all"
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
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded px-3.5 py-2 text-sm outline-none transition-all"
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
                          className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded px-3.5 py-2 text-sm outline-none transition-all resize-none"
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
