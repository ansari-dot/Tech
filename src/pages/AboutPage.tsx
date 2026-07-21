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
      <section className="w-full flex items-center bg-white relative overflow-hidden min-h-[300px]">
        {/* Background Image on Right */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/about/aboutbanner.png"
            alt="About Banner"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* White Gradient Overlay for Text Area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '55%' }}></div>

        {/* Left Content */}
        <div className="flex flex-col items-start z-10 relative max-w-xl px-16 py-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-0.5 bg-accent-green"></span>
            <span className="text-xs font-medium text-accent-green tracking-widest uppercase">
              ABOUT US
            </span>
          </div>
          
          <h1 className="font-headings font-bold text-5xl text-foreground leading-tight mb-2">
            Building Technology.
          </h1>
          <h1 className="font-headings font-bold text-5xl text-primary leading-tight mb-6">
            Creating Impact.
          </h1>
          
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            At 3Novator Tech, we believe technology is more than just code and systems—it's a catalyst for growth, innovation, and positive change.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We partner with businesses of all sizes to build digital solutions that solve real challenges and drive measurable results.
          </p>
          
          {/* Dot Grid */}
          <div className="mt-8 grid grid-cols-6 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-border"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white py-16 px-16">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-1">
            <span className="block w-5 h-0.5 bg-primary"></span>
            <span className="text-xs font-medium text-primary tracking-widest uppercase">
              OUR VALUES
            </span>
            <span className="block w-5 h-0.5 bg-primary"></span>
          </div>
        </div>
        
        <div className="flex justify-between gap-6">
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
      <section className="w-full bg-white py-16 px-16 flex relative overflow-hidden" style={{ gap: '120px' }}>
        {/* Dot Grid Left */}
        <div className="absolute left-8 top-16 grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-border"></div>
          ))}
        </div>
        
        {/* Left Content */}
        <div className="flex flex-col justify-center" style={{ width: '380px', flexShrink: 0 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-0.5 bg-accent-green"></span>
            <span className="text-xs font-medium text-accent-green tracking-widest uppercase">
              OUR STORY
            </span>
          </div>
          
          <h2 className="font-headings font-bold text-4xl text-foreground leading-tight mb-2">
            A Journey Driven by
          </h2>
          <h2 className="font-headings font-bold text-4xl leading-tight mb-6">
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
        
        {/* Timeline - will continue in next message due to size */}
        <TimelineSection />
      </section>

      <div className="w-full border-t border-border"></div>

      {/* Team Section - temporarily hidden */}
      {/* <TeamSection /> */}

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
    <div className="flex flex-col items-center text-center flex-1">
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
    <div className="flex-1 relative" style={{ height: '490px' }}>
      {/* SVG Path */}
      <svg width="480" height="490" className="absolute inset-0">
        <path
          d="M 320 65 C 320 125, 160 125, 160 185 C 160 245, 320 245, 320 305 C 320 365, 160 365, 160 425"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2"
        />
      </svg>
      
      {/* Timeline Items */}
      {timeline.map((item, idx) => {
        const Icon = item.icon;
        const positions = [
          { left: '292px', top: '37px', textLeft: '68px' },
          { left: '132px', top: '157px', textRight: '68px' },
          { left: '292px', top: '277px', textLeft: '68px' },
          { left: '132px', top: '397px', textRight: '68px' },
        ];
        const pos = positions[idx];
        
        return (
          <div key={idx} className="absolute" style={{ left: pos.left, top: pos.top }}>
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center z-10 relative"
              style={{ backgroundColor: item.color }}
            >
              <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
            </div>
            <div 
              className="absolute" 
              style={{ 
                top: '-8px', 
                left: pos.textLeft, 
                right: pos.textRight,
                width: '180px',
                textAlign: pos.textRight ? 'right' : 'left'
              }}
            >
              <p className="font-bold text-sm mb-0.5" style={{ color: item.color }}>{item.year}</p>
              <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Team Section Component
function TeamSection() {
  const team = [
    { name: 'Arjun Mehta', role: 'CEO & Founder', image: 'https://randomuser.me/api/portraits/men/32.jpg', color: '#2563eb' },
    { name: 'Priya Sharma', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/44.jpg', color: '#22c55e' },
    { name: 'Rahul Verma', role: 'Head of Delivery', image: 'https://randomuser.me/api/portraits/men/45.jpg', color: '#f97316' },
    { name: 'Neha Kapoor', role: 'Head of Marketing', image: 'https://randomuser.me/api/portraits/women/65.jpg', color: '#f97316' },
  ];

  return (
    <section className="w-full bg-white py-16 px-16">
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="block w-5 h-0.5 bg-primary"></span>
          <span className="text-xs font-medium text-primary tracking-widest uppercase">OUR TEAM</span>
          <span className="block w-5 h-0.5 bg-primary"></span>
        </div>
        <h2 className="font-headings font-bold text-4xl text-foreground text-center">
          The Minds Behind <span className="text-primary">Our Success</span>
        </h2>
        <p className="text-sm text-muted-foreground text-center mt-3 max-w-lg leading-relaxed">
          We're a team of innovators, problem solvers, and tech enthusiasts passionate about creating meaningful digital experiences.
        </p>
      </div>
      
      <div className="flex gap-6 justify-center">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-start rounded-lg overflow-hidden border border-border" style={{ width: '220px' }}>
            <img src={member.image} className="w-full" style={{ height: '200px', objectFit: 'cover' }} alt={member.name} />
            <div className="p-4 w-full">
              <p className="font-semibold text-base text-foreground">{member.name}</p>
              <p className="text-xs font-medium mb-3" style={{ color: member.color }}>{member.role}</p>
              <div className="flex items-center gap-3">
                <a className="text-muted-foreground hover:text-primary cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a className="text-muted-foreground hover:text-primary cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </a>
                <a className="text-muted-foreground hover:text-primary cursor-pointer">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { icon: Briefcase, number: '250+', label: 'Projects Delivered' },
    { icon: Users, number: '98%', label: 'Client Satisfaction' },
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Award, number: '12+', label: 'Years of Experience' },
  ];

  return (
    <div className="w-full px-16 py-8">
      <section className="w-full bg-[#1e3a5f] py-12 px-16 flex items-center gap-16 rounded-xl">
        <div className="flex-1 min-w-0">
          <div className="w-8 h-0.5 bg-accent-green mb-3"></div>
          <h2 className="font-headings font-bold text-2xl text-white mb-3 leading-tight">
            Numbers That Reflect Our Impact
          </h2>
          <p className="text-sm text-white opacity-70 leading-relaxed max-w-xs">
            Our commitment to excellence is driven by results that speak for themselves.
          </p>
        </div>
        
        <div className="flex flex-1 gap-12 justify-around">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border border-white opacity-70 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <p className="font-headings font-bold text-3xl text-white">{stat.number}</p>
                <p className="text-xs text-white opacity-70 mt-1">{stat.label}</p>
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
    <section className="w-full px-16 py-12 flex items-center gap-8 bg-white border-t border-border">
      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=200&h=200&fit=crop"
          alt="rocket"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-headings font-bold text-xl text-foreground mb-1">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-sm text-muted-foreground">
          Have a project in mind? We'd love to hear about it.
        </p>
      </div>
      <button className="bg-primary text-white text-sm font-medium px-6 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors">
        <span>Let's Connect</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </section>
  );
}
