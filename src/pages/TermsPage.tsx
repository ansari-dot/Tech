import React, { useState } from "react";
import { Shield, Clock, FileText, CheckCircle2, AlertCircle, Scale, Globe } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getStartedWithWhatsApp } from "../utils/whatsapp";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("terms");

  const handleNavClick = (sectionValue: string) => {
    setActiveSection(sectionValue);
  };

  const sections = [
    { id: "acceptance", title: "1. Terms Acceptance", icon: CheckCircle2 },
    { id: "scope", title: "2. Scope of Services", icon: FileText },
    { id: "ip", title: "3. Intellectual Property", icon: Shield },
    { id: "payments", title: "4. Billing & Payments", icon: Scale },
    { id: "liability", title: "5. Limitation of Liability", icon: AlertCircle },
    { id: "governing", title: "6. Governing Law", icon: Globe },
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
              src="/assets/terms.png"
              alt="Terms Banner"
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
                Terms of Service
              </h1>
              <h1 className="font-headings font-bold text-4xl text-primary leading-tight mb-6">
                Client Agreement.
              </h1>
              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Last updated: July 19, 2026. Please review these Terms of Service carefully before utilizing the software engineering, technical consulting, and design services of 3Novator Tech.
              </p>
            </div>

            {/* Right side spacer */}
            <div className="flex-1 z-10"></div>
          </div>
        </section>

        {/* 3. TERMS CONTENTS & NAVIGATION */}
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
                <p>Have questions?</p>
                <a href="mailto:threenovator@gmail.com" className="text-primary hover:underline font-semibold block">
                  threenovator@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-9 space-y-12 text-left">
            
            {/* Section: Acceptance */}
            <div id="acceptance" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> 1. Terms Acceptance
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By browsing our site, submitting service briefs, or engaging 3Novator Tech under custom software developer service SLAs, you accept and agree to comply with these Terms of Service. If you do not agree to these terms, you are prohibited from utilizing our service platforms and technical channels.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                These terms govern all standard client relationships, proposal negotiations, and software delivery phases, unless explicitly overridden by a signed master services agreement (MSA).
              </p>
            </div>

            {/* Section: Scope */}
            <div id="scope" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> 2. Scope of Services
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                3Novator Tech operates as a remote-first software consulting and development agency. We engineer custom web platforms, mobile solutions, cloud infrastructure blueprints, and AI integrations.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All development deliverables, timeline schedules, and milestone specifications are defined within custom project contracts. While we strive to meet all projected targets, development timelines are estimations and subject to change based on scope adjustments, client delays, or third-party API mutations.
              </p>
            </div>

            {/* Section: IP */}
            <div id="ip" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" /> 3. Intellectual Property Rights
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Unless otherwise agreed within a written agreement, the proprietary code, design styles, components, templates, and libraries developed by 3Novator Tech prior to or outside of your project's custom scope remain the exclusive property of 3Novator Tech.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Upon full payment of all contract milestones, the custom code modules, databases, and assets specifically engineered for your business will be transferred and licensed to you according to the parameters specified in the custom SLA.
              </p>
            </div>

            {/* Section: Payments */}
            <div id="payments" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" /> 4. Billing, Payments & Contracts
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Clients agree to settle development fees based on the payment schedule and triggers set within active contracts. Standard terms call for:
              </p>
              <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2">
                <li>An initial mobilization deposit before design and architectural blueprints commence.</li>
                <li>Milestone payouts triggered upon testing reviews and repository pushes.</li>
                <li>Final settlement before live production deployment or source code ownership handover.</li>
                <li>Late payment surcharges or service suspensions if invoices remain outstanding for more than 14 calendar days.</li>
              </ul>
            </div>

            {/* Section: Liability */}
            <div id="liability" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" /> 5. Limitation of Liability
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, 3Novator Tech, its remote engineers, and directors shall not be liable for any indirect, incidental, special, consequential, or punitive damages. This includes data losses, revenue drops, server downtime, security breaches, or system failures resulting from the integration of our software.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our cumulative liability under any claim shall never exceed the total amount paid by the client under the specific service contract yielding the claim during the six months prior to the incident.
              </p>
            </div>

            {/* Section: Governing */}
            <div id="governing" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-headings font-bold text-foreground flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> 6. Governing Law
              </h2>
              <div className="w-8 h-1 bg-primary rounded"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                These Terms of Service and any custom contracts executed hereunder are governed by and construed in accordance with the laws of the jurisdiction where our remote-first corporate registration resides, without giving effect to conflicts of laws principles.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Any legal actions, disputes, or mediation arising from these terms shall be settled exclusively in partnered arbitration forums or local courts within the registered jurisdiction.
              </p>
            </div>

            {/* Contact Card */}
            <div className="border border-border p-6 rounded-2xl bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
              <div>
                <h4 className="font-headings font-bold text-sm text-foreground mb-1">
                  Questions About Our Terms?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Our systems relationship managers are available to clarify contracts terms.
                </p>
              </div>
              <a
                href="mailto:threenovator@gmail.com"
                className="bg-primary hover:bg-opacity-95 text-white font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-lg shadow-sm transition-all"
              >
                Contact Support
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
