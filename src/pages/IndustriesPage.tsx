import { Briefcase, BarChart2, Users, Globe, HeartPulse, TrendingUp, ShoppingCart, Factory, GraduationCap, Truck, Building2, Zap } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndustriesPage() {
  const [activeSection, setActiveSection] = useState("industries");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const handleGetStartedClick = () => {
    // Handle get started click
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
      <section className="relative overflow-hidden" style={{ minHeight: '440px' }}>
        {/* Background Banner Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/home/industrybanner.png"
            alt="Industries Banner"
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
                INDUSTRIES WE SERVE
              </span>
            </div>
            
            <h1 className="font-headings font-bold text-4xl text-foreground leading-tight mb-2">
              Technology Solutions
            </h1>
            <h1 className="font-headings font-bold text-4xl text-primary leading-tight mb-6">
              Tailored to Your Industry.
            </h1>
            
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We understand the unique challenges of your industry and build digital solutions that drive growth, efficiency, and innovation.
            </p>
          </div>

          {/* Right side - Banner image visible through gradient */}
          <div className="flex-1 z-10"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="mx-16 -mt-8 relative z-10">
        <div className="bg-white border border-border rounded-lg shadow-sm px-8 py-6 flex items-center justify-around">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <Briefcase className="w-5.5 h-5.5" strokeWidth={2.2} />
            </div>
            <div>
              <div className="font-headings font-bold text-2xl text-accent-green">12+</div>
              <div className="text-xs text-muted-foreground">Industries Served</div>
            </div>
            <div className="w-px h-10 bg-border ml-4"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <BarChart2 className="w-5.5 h-5.5" strokeWidth={2.2} />
            </div>
            <div>
              <div className="font-headings font-bold text-2xl text-accent-green">250+</div>
              <div className="text-xs text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="w-px h-10 bg-border ml-4"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <Users className="w-5.5 h-5.5" strokeWidth={2.2} />
            </div>
            <div>
              <div className="font-headings font-bold text-2xl text-accent-green">98%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="w-px h-10 bg-border ml-4"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <Globe className="w-5.5 h-5.5" strokeWidth={2.2} />
            </div>
            <div>
              <div className="font-headings font-bold text-2xl text-accent-green">25+</div>
              <div className="text-xs text-muted-foreground">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sectors Grid */}
      <section className="px-16 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-accent-green"></div>
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              EMPOWERING EVERY INDUSTRY
            </span>
            <div className="w-6 h-0.5 bg-accent-green"></div>
          </div>
          
          <h2 className="font-headings font-bold text-3xl text-foreground mb-4">
            Solutions Built for Every Sector
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
            From startups to global enterprises, we deliver industry-specific software solutions that solve real-world problems and unlock new opportunities.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <SectorCard 
            icon={HeartPulse}
            title="Healthcare"
            description="We build secure, compliant, and scalable healthcare solutions that improve patient outcomes and streamline operations."
            color="#1a4cde"
            bgColor="#eef3ff"
          />
          <SectorCard 
            icon={TrendingUp}
            title="Fintech"
            description="Powering financial services with robust, secure, and intelligent solutions that enhance trust and efficiency."
            color="#22c55e"
            bgColor="#f0fdf4"
          />
          <SectorCard 
            icon={ShoppingCart}
            title="Retail & E-commerce"
            description="Delivering seamless digital experiences, smart inventory management, and data-driven retail solutions."
            color="#8b5cf6"
            bgColor="#f5f3ff"
          />
          <SectorCard 
            icon={Factory}
            title="Manufacturing"
            description="Optimizing production, supply chain, and operations with custom software built for manufacturing excellence."
            color="#f59e0b"
            bgColor="#fffbeb"
          />
          <SectorCard 
            icon={GraduationCap}
            title="Education"
            description="Enabling learning with innovative EdTech solutions that engage students and empower institutions."
            color="#1a4cde"
            bgColor="#eef3ff"
          />
          <SectorCard 
            icon={Truck}
            title="Logistics & Supply Chain"
            description="Building intelligent systems that improve visibility, reduce costs, and ensure on-time deliveries."
            color="#14b8a6"
            bgColor="#f0fdfa"
          />
          <SectorCard 
            icon={Building2}
            title="Real Estate"
            description="Digitally transforming property management, sales, and customer experiences in the real estate sector."
            color="#8b5cf6"
            bgColor="#f5f3ff"
          />
          <SectorCard 
            icon={Zap}
            title="Energy & Utilities"
            description="Creating smart, reliable, and sustainable solutions for energy management and utility operations."
            color="#f59e0b"
            bgColor="#fffbeb"
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #eef3fb 0%, #dce8f8 100%)', minHeight: '160px' }}>
        {/* Wave Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z" fill="#1a4cde" opacity="0.15"></path>
            <path d="M0,100 C480,20 960,140 1440,60 L1440,160 L0,160 Z" fill="#1a4cde" opacity="0.1"></path>
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between px-20 py-12 max-w-7xl mx-auto">
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
                  LET'S BUILD THE FUTURE TOGETHER
                </span>
              </div>
              <h3 className="font-headings font-bold text-2xl text-foreground">
                Have an Industry in Mind?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                We're ready to build custom solutions that fit your business perfectly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-primary text-white font-semibold text-sm px-8 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors">
              <span>Let's Talk</span>
              <span>→</span>
            </button>
            <button className="bg-white text-foreground border border-border font-semibold text-sm px-8 py-3 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <span>View Our Work</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Sector Card Component
function SectorCard({ icon: Icon, title, description, color, bgColor }: any) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace('&', '');
    navigate(`/industries/${slug}`);
  };
  
  return (
    <div 
      onClick={handleClick}
      className="bg-white border border-border rounded-lg p-6 flex flex-col gap-4 cursor-pointer hover:shadow-lg transition-shadow" 
      style={{ borderBottom: `3px solid ${color}` }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: bgColor }}>
        <Icon className="w-6 h-6" style={{ color }} strokeWidth={2} />
      </div>
      <div>
        <div className="font-headings font-bold text-base text-foreground mb-2">{title}</div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <a className="text-foreground font-medium text-base hover:text-primary transition-colors">→</a>
      </div>
    </div>
  );
}
