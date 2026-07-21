import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Mail, Phone, MapPin, Send, CheckCircle, 
  HelpCircle, ChevronDown, Clock, Globe, Shield
} from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What industries do you specialize in?",
    answer: "We deliver custom digital products across multiple domains including FinTech, Healthcare (HIPAA-compliant platforms), Logistics & Supply Chain, Retail & headless E-commerce, SaaS platforms, and Smart Energy grids."
  },
  {
    question: "How long does a typical discovery and scoping phase take?",
    answer: "Our initial discovery and scoping phase usually takes 1 to 2 weeks. During this period, our veteran software architects align with your stakeholders to outline requirements, draft high-level blueprints, and estimate deliverables."
  },
  {
    question: "Do you offer post-launch maintenance and DevOps support?",
    answer: "Yes, we offer comprehensive post-launch agreements. This includes 24/7 cloud infrastructure monitoring, security updates, feature scaling, and performance optimizations based on custom SLAs."
  },
  {
    question: "Can you collaborate with our existing in-house engineering team?",
    answer: "Absolutely. We routinely integrate with internal engineering groups. We can act as an autonomous delivery squad for a specific epic, or embed experts directly to accelerate your development cycles."
  }
];

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("contact");
  
  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Custom Software Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Accordion state (FAQ)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Form reference for focus scroll
  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleNavClick = (sectionValue: string) => {
    setActiveSection(sectionValue);
    if (sectionValue === "contact") {
      // Smooth scroll to form and focus name input
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => nameInputRef.current?.focus(), 800);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        subject: "Custom Software Development",
        message: ""
      });
      // Hide success notification after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1800);
  };

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      
      {/* 1. NAVBAR */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={() => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => nameInputRef.current?.focus(), 800);
        }}
      />

      <main className="flex-grow">

        {/* 2. HERO BANNER */}
        <section className="relative overflow-hidden" style={{ minHeight: '550px' }}>
          {/* Background Banner Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/home/contact.png"
              alt="Contact Banner"
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
                  CONTACT US
                </span>
              </div>
              
              <h1 className="font-headings font-bold text-4xl text-foreground leading-tight mb-2">
                Get in Touch.
              </h1>
              <h1 className="font-headings font-bold text-4xl text-primary leading-tight mb-6">
                Start Your Project.
              </h1>
              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Connect with our technical architects and product consultants to discuss your custom software requirements and project roadmap.
              </p>
            </div>

            {/* Right side spacer */}
            <div className="flex-1 z-10"></div>
          </div>
        </section>

        {/* 3. CONTACT FORM & FAQ GRID */}
        <section ref={formRef} className="px-20 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Form Card */}
          <div className="lg:col-span-7 bg-white border border-border rounded-2xl shadow-sm p-8 md:p-10 relative overflow-hidden">
            
            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="mb-6 relative z-10">
              <h2 className="text-2xl font-headings font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                Fill out the secure form below. Our systems team will review your brief and respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Elizabeth Myers"
                    className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded-lg px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="elizabeth@company.com"
                    className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded-lg px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                    className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded-lg px-4 py-3 text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                    Inquiry Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded-lg px-4 py-3 text-xs outline-none transition-all cursor-pointer"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Cloud Solutions & DevOps">Cloud Solutions & DevOps</option>
                    <option value="AI & Automation Integration">AI & Automation Integration</option>
                    <option value="General Partnerships">General Partnerships</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-foreground uppercase tracking-wider mb-1">
                  Message / Specifications <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Describe your technical needs, scale, goals..."
                  className="w-full bg-slate-50 border border-border focus:border-primary focus:bg-white rounded-lg px-4 py-3 text-xs outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-opacity-95 disabled:bg-gray-400 text-white font-bold text-xs tracking-widest uppercase py-3.5 px-8 rounded-lg shadow-md shadow-primary/10 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>SENDING BRIEF...</span>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {/* Secure Submission Badge */}
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent-green" />
                  <span>Secure 256-bit encrypted data</span>
                </div>
              </div>

              {/* Success Alert Banner */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold">Message sent successfully!</p>
                      <p className="text-[10px] text-green-700 mt-0.5">Thank you. One of our technical blueprint leads will connect with you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

          {/* Right Side: Contact Cards & Accordion FAQ */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Phone */}
              <div className="flex items-center gap-4 bg-slate-50 border border-border p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  <Phone className="w-5.5 h-5.5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground font-bold tracking-wider uppercase">Call Direct</div>
                  <div className="font-headings font-bold text-foreground text-sm mt-0.5">
                    0349-8880182 <br /> 0348-9164985
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-slate-50 border border-border p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  <Mail className="w-5.5 h-5.5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground font-bold tracking-wider uppercase">Email Tech Leads</div>
                  <div className="font-headings font-bold text-foreground text-sm mt-0.5">threenovator@gmail.com</div>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-4 bg-slate-50 border border-border p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                  <Globe className="w-5.5 h-5.5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground font-bold tracking-wider uppercase">Location</div>
                  <div className="font-headings font-bold text-foreground text-sm mt-0.5">Remote / Distributed</div>
                </div>
              </div>
            </div>

            {/* Collapsible Accordion FAQs */}
            <div className="border border-border rounded-2xl p-6 bg-white space-y-4">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                <HelpCircle className="w-5 h-5 text-primary" />
                <h3 className="font-headings font-bold text-base text-foreground">
                  Common Questions
                </h3>
              </div>

              <div className="divide-y divide-gray-100">
                {faqs.map((faq, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <div key={index} className="py-3.5 first:pt-0 last:pb-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between text-left font-headings font-bold text-xs text-foreground hover:text-primary transition-colors py-1 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                            isExpanded ? "transform rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground text-xs leading-relaxed pt-2">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 4. FOOTER */}
      <Footer />
      
    </div>
  );
}
