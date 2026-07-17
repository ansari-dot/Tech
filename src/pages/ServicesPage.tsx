import { Monitor, Smartphone, Cloud, ShieldCheck, BarChart2, Cpu, GitMerge, Users, Target, Lightbulb, Rocket, Briefcase, Globe, Award, HeartPulse, Landmark, ShoppingCart, Factory, GraduationCap, Truck, Check, ArrowRight } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("services");
  const [activeIndustry, setActiveIndustry] = useState("healthcare");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const handleGetStartedClick = () => {
    // Handle get started click
  };

  return (
    <div className="bg-white w-full font-body">
      {/* NavBar */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={handleGetStartedClick}
      />

      {/* Hero Section */}
      <section className="w-full relative overflow-hidden" style={{ minHeight: '380px' }}>
        {/* Background Banner Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/home/servicebanner.png"
            alt="Services Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* White Gradient Overlay for Text Area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '50%' }}></div>

        <div className="flex items-center relative" style={{ minHeight: '380px' }}>
          {/* Left Content */}
          <div className="px-20 py-16 flex-1 z-10 relative max-w-lg">
            <div className="text-accent-green text-sm font-semibold mb-3 tracking-wide">
              SMART SOLUTIONS
            </div>
            <h1 className="font-headings text-4xl font-bold text-foreground leading-tight mb-4">
              Smarter Solutions<br />
              for a <span className="text-primary">Smarter Tomorrow</span>
            </h1>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-6">
              We craft innovative digital solutions that address real business challenges and create measurable impact.
            </p>
            <div className="w-10 h-1 bg-primary rounded"></div>
            <div className="mt-8 flex flex-wrap gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-border"></div>
              ))}
            </div>
          </div>

          {/* Right side - Banner visible through gradient */}
          <div className="flex-1"></div>
        </div>
      </section>

      {/* Trusted By Bar */}
      <section className="w-full bg-white py-10 border-b border-border">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-primary tracking-widest">
            TRUSTED BY BUSINESSES WORLDWIDE —
          </span>
        </div>
        <div className="flex items-center justify-center gap-16">
          {['wave', 'kanba', 'UTOSIA', 'treehouse', 'Volume', 'Cloud'].map((name, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-4.5 h-4.5 rounded-full bg-gray-200"></div>
              <span className="text-sm font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="w-full bg-white py-16 px-20">
        <div className="flex gap-8 items-stretch">
          <div className="flex-1 max-w-xs">
            <div className="text-accent-green text-xs font-semibold tracking-widest mb-3">
              OUR APPROACH
            </div>
            <h2 className="font-headings text-3xl font-bold text-foreground leading-tight mb-4">
              Solutions That<br />
              <span className="text-primary">Empower Growth</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We combine technology, creativity, and industry expertise to deliver solutions that drive efficiency, accelerate growth, and create lasting value.
            </p>
          </div>

          <ApproachCard 
            icon={Target}
            title="Understand"
            description="We analyze your business challenges and goals to identify the right opportunities."
            bgColor="#dcfce7"
            iconColor="#22c55e"
          />
          <ApproachCard 
            icon={Lightbulb}
            title="Innovate"
            description="We design innovative solutions tailored to your unique business needs."
            bgColor="#dbeafe"
            iconColor="#2563eb"
          />
          <ApproachCard 
            icon={Rocket}
            title="Deliver"
            description="We build, deploy, and support solutions that deliver real results and long-term impact."
            bgColor="#ede9fe"
            iconColor="#8b5cf6"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-gray-100 py-16 px-20">
        <div className="text-center mb-10">
          <div className="text-accent-green text-xs font-semibold tracking-widest mb-3">
            WHAT WE DO
          </div>
          <h2 className="font-headings text-3xl font-bold text-foreground">
            End-to-End <span className="text-primary border-b-2 border-primary pb-1">Digital Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-24 lg:pb-16">
          <ServiceCard 
            index={0}
            icon={Monitor}
            title="Custom Software Development"
            description="Scalable, secure, and high-performance solutions built for your business needs."
            bgColor="#dcfce7"
            iconColor="#22c55e"
            tags={["SaaS", "APIs", "Web apps"]}
          />
          <ServiceCard 
            index={1}
            icon={Smartphone}
            title="Mobile App Development"
            description="Feature-rich mobile apps that enhance engagement and drive growth."
            bgColor="#dbeafe"
            iconColor="#2563eb"
            tags={["iOS", "Android", "React Native"]}
          />
          <ServiceCard 
            index={2}
            icon={Cloud}
            title="Cloud Solutions"
            description="Secure, scalable, and cost-effective cloud solutions for modern businesses."
            bgColor="#ede9fe"
            iconColor="#8b5cf6"
            tags={["AWS", "Kubernetes", "DevOps"]}
          />
          <ServiceCard 
            index={3}
            icon={ShieldCheck}
            title="Cybersecurity"
            description="Protect your data, systems, and users with robust security solutions."
            bgColor="#ffedd5"
            iconColor="#f97316"
            tags={["OAuth", "PenTesting", "ISO27001"]}
          />
          <ServiceCard 
            index={4}
            icon={Cpu}
            title="AI & Automation"
            description="Leverage AI and automation to streamline processes and boost productivity."
            bgColor="#ede9fe"
            iconColor="#8b5cf6"
            tags={["LLMs", "RPA", "NLP"]}
          />
          <ServiceCard 
            index={5}
            icon={BarChart2}
            title="Data Analytics & BI"
            description="Turn data into actionable insights and make smarter business decisions."
            bgColor="#ffedd5"
            iconColor="#f97316"
            tags={["BI Dashboards", "Big Data", "Spark"]}
          />
          <ServiceCard 
            index={6}
            icon={GitMerge}
            title="System Integration"
            description="Seamlessly integrate systems and tools to improve efficiency and collaboration."
            bgColor="#dcfce7"
            iconColor="#22c55e"
            tags={["ESBs", "Kafka", "Webhooks"]}
          />
          <ServiceCard 
            index={7}
            icon={Users}
            title="IT Consulting"
            description="Expert guidance and strategy to help you achieve your business goals."
            bgColor="#dbeafe"
            iconColor="#2563eb"
            tags={["Architecture", "Roadmaps", "Compliance"]}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-gray-50 py-12 px-20">
        <div className="flex items-center gap-16">
          {/* Left Dark Card */}
          <div className="bg-slate-900 rounded-3xl p-12 w-96" style={{ borderRadius: '80px 40px 80px 40px' }}>
            <div className="text-accent-green text-xs font-semibold tracking-widest mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="font-headings text-2xl font-bold text-white leading-tight mb-6">
              Built on Trust.<br />
              Focused on Results.
            </h2>
            <div className="w-12 h-1 bg-accent-green rounded mb-6"></div>
            <p className="text-white opacity-70 text-sm leading-relaxed">
              We are committed to delivering solutions that create real impact and drive your business forward.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="flex flex-1 items-center justify-between gap-12 px-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-1">
                <Briefcase className="w-8 h-8 text-accent-green" strokeWidth={1.5} />
              </div>
              <div className="font-headings font-bold text-3xl text-foreground">250+</div>
              <div className="text-muted-foreground text-xs text-center">Projects Delivered</div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-1">
                <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div className="font-headings font-bold text-3xl text-foreground">98%</div>
              <div className="text-muted-foreground text-xs text-center">Client Satisfaction</div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-1">
                <Globe className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <div className="font-headings font-bold text-3xl text-foreground">25+</div>
              <div className="text-muted-foreground text-xs text-center">Countries Served</div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-1">
                <Award className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
              </div>
              <div className="font-headings font-bold text-3xl text-foreground">12+</div>
              <div className="text-muted-foreground text-xs text-center">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="w-full bg-gray-50 py-16 px-20">
        <div className="text-center mb-10">
          <div className="text-accent-green text-xs font-semibold tracking-widest mb-3">
            INDUSTRY SOLUTIONS
          </div>
          <h2 className="font-headings text-3xl font-bold text-foreground">
            Technology Solutions for <span className="text-primary">Every Industry</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded mx-auto mt-3"></div>
        </div>

        <div className="flex gap-6 mb-8 justify-center">
          <IndustryTab 
            icon={HeartPulse}
            label="Healthcare"
            active={activeIndustry === "healthcare"}
            onClick={() => setActiveIndustry("healthcare")}
            color="#8b5cf6"
          />
          <IndustryTab 
            icon={Landmark}
            label="Fintech"
            active={activeIndustry === "fintech"}
            onClick={() => setActiveIndustry("fintech")}
            color="#22c55e"
          />
          <IndustryTab 
            icon={ShoppingCart}
            label="Retail & E-commerce"
            active={activeIndustry === "retail"}
            onClick={() => setActiveIndustry("retail")}
            color="#8b5cf6"
          />
          <IndustryTab 
            icon={Factory}
            label="Manufacturing"
            active={activeIndustry === "manufacturing"}
            onClick={() => setActiveIndustry("manufacturing")}
            color="#f97316"
          />
          <IndustryTab 
            icon={GraduationCap}
            label="Education"
            active={activeIndustry === "education"}
            onClick={() => setActiveIndustry("education")}
            color="#8b5cf6"
          />
          <IndustryTab 
            icon={Truck}
            label="Logistics"
            active={activeIndustry === "logistics"}
            onClick={() => setActiveIndustry("logistics")}
            color="#22c55e"
          />
          <div className="flex items-center text-muted-foreground px-4">
            <span className="text-2xl">...</span>
          </div>
        </div>

        <div className="flex gap-8 items-center bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ maxWidth: '480px' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/3' }}
              alt="Healthcare"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-headings font-bold text-xl text-foreground">Healthcare</span>
              <div className="w-12 h-1 bg-primary rounded"></div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We build secure, compliant, and scalable healthcare solutions that improve patient outcomes and streamline operations.
            </p>
            <ul className="flex flex-col gap-3">
              <FeatureItem text="Patient Management Systems" />
              <FeatureItem text="Health Data Security" />
              <FeatureItem text="Telemedicine Solutions" />
              <FeatureItem text="AI-Powered Diagnostics" />
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Approach Card Component
function ApproachCard({ icon: Icon, title, description, bgColor, iconColor }: any) {
  return (
    <div className="flex-1 bg-white border border-border rounded-lg p-6 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: bgColor }}>
        <Icon className="w-5.5 h-5.5" style={{ color: iconColor }} strokeWidth={2.2} />
      </div>
      <div className="font-headings font-bold text-base text-foreground">{title}</div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
      <a className="text-primary cursor-pointer">
        <ArrowRight className="w-4.5 h-4.5" strokeWidth={2.7} />
      </a>
    </div>
  );
}

// Service Card Component
function ServiceCard({ index, icon: Icon, title, description, bgColor, iconColor, tags = [] }: any) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/--+/g, '-');
    navigate(`/services/${slug}`);
  };
  
  const isOffset = index % 2 === 1;
  
  return (
    <div 
      onClick={handleClick}
      className={`bg-white border border-border rounded-2xl p-6 relative overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
        isOffset ? "lg:translate-y-12" : ""
      }`}
      style={{ contentVisibility: "auto" }}
    >
      {/* Giant Outline Sequence Number */}
      <div 
        className="absolute -top-4 -right-2 text-6xl font-headings font-black select-none pointer-events-none z-0 opacity-[0.05] leading-none"
        style={{ 
          WebkitTextStroke: "1px var(--color-foreground)", 
          color: "transparent"
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Background design glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent pointer-events-none rounded-bl-full z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Icon Wrapper with Custom Spotlight */}
          <div className="relative w-12 h-12 flex items-center justify-center mb-5 rounded-xl overflow-hidden" style={{ backgroundColor: `${bgColor}50` }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial from-white via-transparent to-transparent" />
            <Icon className="w-5.5 h-5.5 relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ color: iconColor }} strokeWidth={2.4} />
          </div>

          <div className="font-headings font-extrabold text-base text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{title}</div>
          <p className="text-muted-foreground text-xs leading-relaxed mb-6">{description}</p>
        </div>

        {/* Technology Badges */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold text-muted-foreground bg-slate-100 px-2 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom arrow panel */}
      <div className="relative z-10 flex items-center justify-between mt-5 pt-3 border-t border-slate-50">
        <span className="text-[10px] font-bold text-primary group-hover:text-primary transition-colors flex items-center gap-1.5">
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.8} />
        </span>
      </div>

    </div>
  );
}

// Stat Card Component
function StatCard({ icon: Icon, number, label, color }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
        <Icon className="w-5.5 h-5.5" style={{ color }} strokeWidth={2.2} />
      </div>
      <div className="font-headings font-bold text-2xl text-foreground">{number}</div>
      <div className="text-muted-foreground text-xs text-center">{label}</div>
    </div>
  );
}

// Industry Tab Component
function IndustryTab({ icon: Icon, label, active, onClick, color }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-2 pb-3 px-6 text-xs font-semibold border-b-2 transition-colors ${
        active ? 'border-primary' : 'border-transparent'
      }`}
    >
      <div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-1 ${
          active ? '' : 'opacity-60'
        }`}
        style={{ backgroundColor: active ? `${color}15` : '#f3f4f6' }}
      >
        <Icon 
          className="w-6 h-6" 
          style={{ color: active ? color : '#9ca3af' }}
          strokeWidth={2}
        />
      </div>
      <span className={active ? 'text-foreground' : 'text-muted-foreground'}>
        {label}
      </span>
    </button>
  );
}

// Feature Item Component
function FeatureItem({ text }: any) {
  return (
    <li className="flex items-center gap-3 text-sm text-foreground">
      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <Check className="w-2.5 h-2.5 text-white" strokeWidth={4.4} />
      </div>
      {text}
    </li>
  );
}
