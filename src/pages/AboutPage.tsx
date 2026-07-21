import { Users, Lightbulb, ShieldCheck, Target, UsersRound, FlaskConical, BarChart2, Rocket, Linkedin, Twitter, Mail, Briefcase, Globe, Award, ArrowRight } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { getStartedWithWhatsApp } from "../utils/whatsapp";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const handleGetStartedClick = () => {
    getStartedWithWhatsApp();
  };

  return (
    <div className="bg-white w-full">
      {/* NavBar */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={handleGetStartedClick}
      />

      {/* Hero Section */}
      <section className="w-full flex items-center bg-slate-50 relative overflow-hidden min-h-[360px] sm:min-h-[400px]">
        {/* Background Image on Right */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/about/aboutbanner.png"
            alt="About Banner"
            className="w-full h-full object-cover object-right opacity-90 sm:opacity-100"
          />
        </div>

        {/* White Gradient Overlay for Text Area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 sm:to-transparent w-full sm:w-[70%] lg:w-[55%]"></div>

        {/* Content */}
        <div className="flex flex-col items-start z-10 relative max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-16 w-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-0.5 bg-accent-green"></span>
            <span className="text-xs font-semibold text-accent-green tracking-widest uppercase">
              ABOUT US
            </span>
          </div>
          
          <h1 className="font-headings font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-2">
            Building Technology.
          </h1>
          <h1 className="font-headings font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-6">
            Creating Impact.
          </h1>
          
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed max-w-md">
            At 3Novator Tech, we believe technology is more than just code and systems—it's a catalyst for growth, innovation, and positive change.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
            We partner with businesses of all sizes to build digital solutions that solve real challenges and drive measurable results.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-1">
            <span className="block w-5 h-0.5 bg-primary"></span>
            <span className="text-xs font-medium text-primary tracking-widest uppercase">
              OUR VALUES
            </span>
            <span className="block w-5 h-0.5 bg-primary"></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          <ValueCard 
            icon={Users}
            title="Customer First"
            description="We put our clients at the center of everything we do."
            bgColor="#dbe7fb"
            iconColor="#2563eb"
          />
          <ValueCard 
            icon={Lightbulb}
            title="Innovation"
            description="We embrace new ideas and technologies to create smarter solutions."
            bgColor="#dcfce7"
            iconColor="#22c55e"
          />
          <ValueCard 
            icon={ShieldCheck}
            title="Integrity"
            description="We work with honesty, transparency, and accountability."
            bgColor="#dbe7fb"
            iconColor="#2563eb"
          />
          <ValueCard 
            icon={Target}
            title="Excellence"
            description="We are committed to delivering quality in every project."
            bgColor="#ffedd5"
            iconColor="#f97316"
          />
          <ValueCard 
            icon={UsersRound}
            title="Collaboration"
            description="We believe great things happen when we work together."
            bgColor="#dbe7fb"
            iconColor="#2563eb"
          />
        </div>
      </section>

      <div className="w-full border-t border-border"></div>

      {/* Story Timeline Section */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-20 relative overflow-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-0.5 bg-accent-green"></span>
            <span className="text-xs font-medium text-accent-green tracking-widest uppercase">
              OUR STORY
            </span>
          </div>
          
          <h2 className="font-headings font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-2">
            A Journey Driven by
          </h2>
          <h2 className="font-headings font-bold text-3xl sm:text-4xl leading-tight mb-6">
            <span className="text-primary">Passion </span>
            <span className="text-foreground">and </span>
            <span className="text-accent-green">Purpose</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            3Novator Tech was founded with a simple mission: to empower businesses through technology.
          </p>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            From our early days as a small team of enthusiasts to becoming a trusted digital transformation partner, our journey has been fuelled by curiosity, dedication, and our clients' success.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Today, we continue to evolve, innovate, and help organizations build a smarter, stronger future.
          </p>
        </div>
        
        {/* Timeline */}
        <TimelineSection />
      </section>

      <div className="w-full border-t border-border"></div>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Value Card Component
function ValueCard({ icon: Icon, title, description, bgColor, iconColor }: any) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 bg-white shadow-xs">
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: bgColor }}
      >
        <Icon className="w-7 h-7" style={{ color: iconColor }} strokeWidth={1.7} />
      </div>
      <p className="font-headings font-semibold text-base text-foreground mb-2">{title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Timeline Component
function TimelineSection() {
  const timeline = [
    { year: '2018', title: 'The Beginning', description: 'Started as a small team with a big vision to make an impact through technology.', icon: FlaskConical, color: '#2563eb' },
    { year: '2020', title: 'Growing Stronger', description: 'Expanded our team and services, delivering impactful solutions to more clients.', icon: BarChart2, color: '#22c55e' },
    { year: '2022', title: 'Scaling New Heights', description: 'Partnered with global clients and embraced innovation at every step.', icon: Rocket, color: '#8b5cf6' },
    { year: '2024+', title: 'Shaping the Future', description: 'Continuing our mission to build intelligent, scalable, and future-ready solutions.', icon: Target, color: '#f97316' },
  ];

  return (
    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
      {timeline.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-xs">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: item.color }}
            >
              <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase" style={{ color: item.color }}>
                {item.year}
              </span>
              <h4 className="font-headings font-bold text-base text-slate-900 mt-0.5 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { icon: Briefcase, number: '15+', label: 'Projects Delivered' },
    { icon: Users, number: '98%', label: 'Success Rate' },
    { icon: Globe, number: '2+', label: 'Years of Experience' },
    { icon: Award, number: '10+', label: 'Team Members' },
  ];

  return (
    <div className="w-full px-4 sm:px-10 lg:px-16 py-6 sm:py-8">
      <section className="w-full bg-[#1e3a5f] py-8 sm:py-12 px-6 sm:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 rounded-2xl shadow-xl">
        <div className="flex-1 min-w-0 text-center lg:text-left">
          <div className="w-8 h-0.5 bg-accent-green mb-3 mx-auto lg:mx-0"></div>
          <h2 className="font-headings font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">
            Numbers That Reflect Our Impact
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md mx-auto lg:mx-0">
            Our commitment to engineering excellence is driven by real-world performance.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto flex-1">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5">
                <div className="w-12 h-12 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <p className="font-headings font-extrabold text-2xl sm:text-3xl text-white tracking-tight">{stat.number}</p>
                <p className="text-[11px] sm:text-xs text-white/80 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// CTA Banner Component
function CTABanner() {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-16 py-8 sm:py-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white border-t border-border">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md">
        <img
          src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=200&h=200&fit=crop"
          alt="rocket"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-headings font-bold text-lg sm:text-xl text-foreground mb-1">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Have a project in mind? We'd love to partner with you.
        </p>
      </div>
      <button 
        onClick={getStartedWithWhatsApp}
        className="bg-primary text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-opacity-90 transition-all cursor-pointer shadow-md active:scale-95"
      >
        <span>Let's Connect</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </section>
  );
}
