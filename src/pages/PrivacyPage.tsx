import React, { useState } from "react";
import { Shield, Clock, ArrowRight, Eye, Lock, FileText, Globe } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getStartedWithWhatsApp } from "../utils/whatsapp";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("privacy");

  const handleNavClick = (sectionValue: string) => {
    setActiveSection(sectionValue);
  };

  const sections = [
    { id: "intro", title: "1. Introduction", icon: Eye },
    { id: "collect", title: "2. Information We Collect", icon: FileText },
    { id: "use", title: "3. How We Use Information", icon: Globe },
    { id: "security", title: "4. Data Security & Protection", icon: Lock },
    { id: "rights", title: "5. Your Privacy Rights", icon: Shield },
    { id: "changes", title: "6. Changes & Updates", icon: Clock },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      {/* 1. NAVBAR */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={getStartedWithWhatsApp}
      />

      <main className="flex-grow">
        {/* 2. HERO BANNER */}
        <section className="relative overflow-hidden" style={{ minHeight: '440px' }}>
          {/* Background Banner Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/privacy.png"
              alt="Privacy Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* White Gradient Overlay for Text Area */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '55%' }}></div>

          {/* Dot Grid Top Left */}
          <div className="absolute left-8 top-16 grid gap-2 z-10" style={{ gridTemplateColumns: 'repeat(6, 8px)', gridTemplateRows: 'repeat(6, 8px)' }}>
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-border"></div>
            ))}
          </div>

          {/* Dot Grid Bottom Left */}
          <div className="absolute left-8 bottom-12 grid gap-2 z-10" style={{ gridTemplateColumns: 'repeat(6, 8px)', gridTemplateRows: 'repeat(4, 8px)' }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-border"></div>
            ))}
          </div>

          <div className="flex items-center justify-between pl-8 sm:pl-16 md:pl-24 pr-8 py-16 max-w-7xl w-full relative">
            {/* Left Content */}
            <div className="flex-1 max-w-lg z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-accent-green"></div>
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                  LEGAL DOCUMENT
                </span>
              </div>
              
              <h1 className="font-headings font-bold text-4xl text-foreground leading-tight mb-2">
                Privacy Policy
              </h1>
              <h1 className="font-headings font-bold text-4xl text-primary leading-tight mb-6">
                Data Protection.
              </h1>
              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Last updated: July 19, 2026. Please read this Privacy Policy carefully to understand how 3Novator Tech collects, uses, and safeguards your personal data.
              </p>
            </div>

            {/* Right side spacer */}
            <div className="flex-1 z-10"></div>
          </div>
        </section>

        {/* 3. POLICY CONTENTS & NAVIGATION */}
        <section className="px-6 sm:px-12 md:px-20 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Floating Table of Contents */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4 bg-slate-50 border border-border p-6 rounded-2xl">
              <h3 className="font-headings font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                Table of Contents
              </h3>
              <ul className="space-y-1">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <li key={sec.id}>
                      <button
                        onClick={() => scrollToSection(sec.id)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-white rounded-lg transition-all text-left cursor-pointer"
                      >
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{sec.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              
              <div className="pt-4 border-t border-border mt-4 text-[11px] text-muted-foreground space-y-1">
                <p>Need support?</p>
                <a href="mailto:threenovator@gmail.com" className="text-primary hover:underline font-semibold block">
                  threenovator@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-9 space-y-12 text-left">
            
            {/* Section: Intro */}
            <div id="intro" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" /> 1. Introduction
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Welcome to 3Novator Tech. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explain how we process information when you use our website, purchase our software solutions, or engage with our consulting services.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By accessing our systems, contacting us, or engaging with our service portals, you acknowledge and agree to the practices outlined in this policy.
              </p>
            </div>

            {/* Section: Collect */}
            <div id="collect" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> 2. Information We Collect
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We collect personal information directly from you when you submit a project brief, request a quote, or email us. This data may include:
              </p>
              <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2">
                <li><strong>Identity Data:</strong> Full name, company name, job title, and other identifiers.</li>
                <li><strong>Contact Data:</strong> Email address, phone numbers (such as 03498880182 or 03489164985).</li>
                <li><strong>Inquiry Data:</strong> Details regarding your project requirements, scope, target budgets, and business challenges.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, location parameters, and operating system collected via analytics tools.</li>
              </ul>
            </div>

            {/* Section: Use */}
            <div id="use" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> 3. How We Use Your Information
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                3Novator Tech utilizes the collected information to deliver exceptional software systems and robust support. Specifically:
              </p>
              <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2">
                <li>To prepare technical proposals, blueprints, and engineering quotes.</li>
                <li>To communicate with you regarding active contracts, service updates, and support schedules.</li>
                <li>To build custom software modules tailored to your business profile.</li>
                <li>To maintain, optimize, and secure our online systems, portals, and infrastructure.</li>
              </ul>
            </div>

            {/* Section: Security */}
            <div id="security" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" /> 4. Data Security & Protection
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We implement industry-standard administrative, physical, and technical safeguards designed to secure your personal information from unauthorized access, accidental loss, alteration, or disclosure.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our database systems employ 256-bit encryption protocols for transit and resting states. Access to your project specifications and communications log is strictly limited to authorized engineers and leads bound by confidentiality agreements.
              </p>
            </div>

            {/* Section: Rights */}
            <div id="rights" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> 5. Your Privacy Rights
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Depending on your jurisdiction, you have specific rights concerning your personal data. These rights include:
              </p>
              <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2">
                <li>The right to request access to and a copy of your personal data.</li>
                <li>The right to rectify inaccurate or incomplete records.</li>
                <li>The right to request deletion of your information when it is no longer required for active contracts or statutory obligations.</li>
                <li>The right to withdraw your consent at any time for promotional mailings.</li>
              </ul>
            </div>

            {/* Section: Changes */}
            <div id="changes" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> 6. Changes & Updates
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We may modify this Privacy Policy periodically to reflect technological adjustments, legal compliance shifts, or operational changes. The latest version will always be posted on this page with an updated timestamp.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We encourage you to review this page periodically to stay informed about our data protection standards.
              </p>
            </div>

            {/* Contact Card */}
            <div className="border border-border p-6 rounded-2xl bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
              <div>
                <h4 className="font-headings font-bold text-sm text-foreground mb-1">
                  Have Privacy Concerns?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Our data security lead is ready to resolve your inquiries within 48 hours.
                </p>
              </div>
              <a
                href="mailto:threenovator@gmail.com"
                className="bg-primary hover:bg-opacity-95 text-white font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-lg shadow-sm transition-all"
              >
                Email Legal Team
              </a>
            </div>

          </div>

        </section>
      </main>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}
