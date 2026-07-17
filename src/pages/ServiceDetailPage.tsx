import { useParams, useNavigate } from "react-router-dom";
import { Layers, ShieldCheck, Cpu, Clock, Settings, LayoutDashboard, Shield, TrendingUp, Users, Code, PenTool, FlaskConical, Rocket, Search, ArrowRight, Check } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ServiceDetailPage() {
  const { service } = useParams<{ service: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("services");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const handleGetStartedClick = () => {
    // Handle get started
  };

  // Service data
  const serviceData = {
    name: "Custom Software Development",
    category: "OUR SERVICES",
    description: "We build powerful, scalable, and secure custom software solutions that drive growth, streamline operations, and solve complex business challenges.",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
  };

  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  return (
    <div className="bg-white w-full font-body">
      {/* NavBar */}
      <NavBar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={handleGetStartedClick}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: '450px' }}>
        {/* Background Banner Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/sd.png"
            alt="Service Banner"
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
                <div key={col} className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-16 py-16 relative z-10">
          <div className="max-w-xl">
            <div className="text-primary font-semibold text-sm mb-3 tracking-wide">
              {serviceData.category}
            </div>

            <h1 className="font-headings font-bold text-4xl text-foreground leading-tight mb-1">
              Custom Software
            </h1>
            <h1 className="font-headings font-bold text-4xl text-accent leading-tight mb-6">
              Development
            </h1>

            <p className="text-base text-muted-foreground max-w-md leading-relaxed mb-10">
              {serviceData.description}
            </p>

            {/* Icon Features */}
            <div className="flex gap-10">
              <IconFeature icon={Layers} title="Scalable" subtitle="Solutions" />
              <IconFeature icon={ShieldCheck} title="Secure &" subtitle="Reliable" />
              <IconFeature icon={Cpu} title="Modern" subtitle="Technologies" />
              <IconFeature icon={Clock} title="On-time" subtitle="Delivery" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-16 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <div className="text-primary font-semibold text-sm mb-2 tracking-wide">
                OVERVIEW
              </div>
              <h2 className="font-headings font-bold text-3xl text-foreground leading-tight mb-5">
                Tailored Software Solutions<br />
                for Your Unique Needs
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                Our custom software development services are designed to help businesses innovate, optimize processes, and deliver exceptional experiences. From concept to deployment, we turn your ideas into reliable digital solutions.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <CheckItem text="Business-focused solutions that solve real problems" />
                <CheckItem text="Agile development with transparent communication" />
                <CheckItem text="High-performance, secure and future-ready applications" />
                <CheckItem text="End-to-end development and long-term support" />
              </div>

              <button className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Discuss Your Project</span>
              </button>
            </div>

            {/* Right Process Diagram */}
            <div className="flex-1">
              <div className="relative w-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12" style={{ minHeight: '420px' }}>
                {/* Center Label */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-blue-100">
                    <div className="text-center">
                      <div className="font-headings font-bold text-base text-slate-800">Custom</div>
                      <div className="font-headings font-bold text-base text-slate-800">Software</div>
                      <div className="font-headings font-bold text-base text-slate-800">Development</div>
                    </div>
                  </div>
                </div>

                {/* Plan & Research - Top */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-52">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Search className="w-5 h-5 text-cyan-600" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-slate-800 mb-1">Plan & Research</div>
                        <div className="text-xs text-slate-600 leading-relaxed">We analyze your goals and project requirements.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design & Prototype - Top Right */}
                <div className="absolute top-20 right-4 w-52">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <PenTool className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-slate-800 mb-1">Design & Prototype</div>
                        <div className="text-xs text-slate-600 leading-relaxed">We create user-friendly designs and prototypes.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Development - Right */}
                <div className="absolute top-1/2 -translate-y-1/2 right-4 w-52">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 text-purple-600" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-slate-800 mb-1">Development</div>
                        <div className="text-xs text-slate-600 leading-relaxed">We build clean, scalable and secure software.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testing - Bottom Right */}
                <div className="absolute bottom-20 right-4 w-52">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <FlaskConical className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-slate-800 mb-1">Testing</div>
                        <div className="text-xs text-slate-600 leading-relaxed">We ensure quality with rigorous testing.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deployment & Support - Left */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 w-52">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-5 h-5 text-cyan-600" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-slate-800 mb-1">Deployment & Support</div>
                        <div className="text-xs text-slate-600 leading-relaxed">We deploy and provide ongoing support.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-primary font-semibold text-sm mb-2 tracking-wide">
              FEATURES & BENEFITS
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              Why Choose Our Custom<br />
              Software Development?
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <FeatureCard
              icon={Settings}
              title="Tailored Solutions"
              description="Custom-built software that fits your business processes perfectly."
              iconColor="#1a7c3e"
              iconBg="#e8f5ee"
            />
            <FeatureCard
              icon={LayoutDashboard}
              title="Scalable Architecture"
              description="Solutions designed to grow with your business and adapt to change."
              iconColor="#2563eb"
              iconBg="#dbeafe"
            />
            <FeatureCard
              icon={Shield}
              title="Enhanced Security"
              description="We follow best practices to ensure your data and software are secure."
              iconColor="#8b5cf6"
              iconBg="#f5f3ff"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Cost Efficiency"
              description="Optimized solutions that reduce operational costs and increase efficiency."
              iconColor="#f97316"
              iconBg="#fff7ed"
            />
            <FeatureCard
              icon={Users}
              title="Better User Experience"
              description="Intuitive and engaging interfaces that deliver exceptional user experiences."
              iconColor="#1a7c3e"
              iconBg="#e8f5ee"
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Dedicated Support"
              description="Ongoing support and maintenance to ensure long-term success."
              iconColor="#2563eb"
              iconBg="#dbeafe"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-primary font-semibold text-sm mb-2 tracking-wide">
              OUR PROCESS
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              Our Development Process
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex items-start justify-between gap-2">
            <ProcessStep
              number="01"
              icon={Search}
              title="Requirement Analysis"
              description="We understand your business and goals."
              hasLine={true}
            />
            <ProcessStep
              number="02"
              icon={LayoutDashboard}
              title="Planning"
              description="We create a roadmap and project plan."
              hasLine={true}
            />
            <ProcessStep
              number="03"
              icon={PenTool}
              title="Design"
              description="We design wireframes and user interfaces."
              hasLine={true}
            />
            <ProcessStep
              number="04"
              icon={Code}
              title="Development"
              description="We build your solution using best practices."
              hasLine={true}
            />
            <ProcessStep
              number="05"
              icon={FlaskConical}
              title="Testing"
              description="We test thoroughly to ensure quality."
              hasLine={true}
            />
            <ProcessStep
              number="06"
              icon={Rocket}
              title="Deployment"
              description="We deploy and provide ongoing support."
              hasLine={false}
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-primary font-semibold text-sm mb-2 tracking-wide">
              TECHNOLOGIES WE USE
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              Modern Technologies for Robust Solutions
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {['React', 'Next.js', 'Node.js', 'Laravel', 'Python', '.NET', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'].map((tech, idx) => (
              <TechBadge key={idx} name={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-16 my-12 rounded-2xl overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/home/ctabg.png"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900 opacity-70"></div>
        </div>

        <div className="flex items-center justify-between px-16 py-14 relative z-10">
          <div className="max-w-md">
            <h2 className="font-headings font-bold text-3xl text-white leading-tight mb-3">
              Ready to Build Your<br />
              Custom Software Solution?
            </h2>
            <p className="text-base text-white opacity-90">
              Let's turn your ideas into powerful software that drives your business forward.
            </p>
          </div>

          <button className="flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-md text-sm font-medium whitespace-nowrap hover:bg-white hover:text-slate-900 transition-colors">
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Components
function IconFeature({ icon: Icon, title, subtitle }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="w-7 h-7 text-accent" strokeWidth={1.7} />
      </div>
      <span className="text-xs text-foreground font-medium text-center">
        {title}<br />{subtitle}
      </span>
    </div>
  );
}

function CheckItem({ text }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-primary-foreground" strokeWidth={4} />
      </div>
      <span className="text-sm text-foreground">{text}</span>
    </div>
  );
}

function ProcessCircle({ icon: Icon, title, description, position, color }: any) {
  const positions: any = {
    'top': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'right-0 top-12',
    'bottom-right': 'right-0 bottom-0',
    'bottom-left': 'left-0 bottom-0',
    'top-left': 'left-0 top-12'
  };

  const colors: any = {
    'primary': { bg: 'bg-primary', text: 'text-primary' },
    'blue': { bg: 'bg-blue-500', text: 'text-blue-500' },
    'accent': { bg: 'bg-accent', text: 'text-accent' },
    'orange': { bg: 'bg-orange-500', text: 'text-orange-500' }
  };

  return (
    <div className={`absolute ${positions[position]} flex flex-col items-start gap-1.5 w-44`}>
      <div className={`w-11 h-11 rounded-xl ${colors[color].bg} bg-opacity-10 flex items-center justify-center shadow-sm`}>
        <Icon className={`w-5.5 h-5.5 ${colors[color].text}`} strokeWidth={2.2} />
      </div>
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, iconColor, iconBg }: any) {
  return (
    <div className="flex items-start gap-4 p-6 border border-border rounded-xl">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: iconBg }}>
        <Icon className="w-7 h-7" style={{ color: iconColor }} strokeWidth={1.7} />
      </div>
      <div>
        <div className="font-semibold text-base text-foreground mb-1">{title}</div>
        <div className="text-sm text-muted-foreground leading-relaxed">{description}</div>
      </div>
    </div>
  );
}

function ProcessStep({ number, icon: Icon, title, description, hasLine }: any) {
  return (
    <div className="flex-1 flex flex-col items-center text-center relative">
      {hasLine && (
        <div className="absolute top-6 left-[60%] right-0 border-t-2 border-dashed border-primary z-0"></div>
      )}
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center z-10 relative mb-3 shadow-sm">
        <Icon className="w-6.5 h-6.5 text-accent-foreground" strokeWidth={1.8} />
      </div>
      <div className="text-xs font-bold text-primary mb-1">{number}</div>
      <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground leading-relaxed">{description}</div>
    </div>
  );
}

function TechBadge({ name }: any) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center bg-background shadow-sm">
        <span className="text-2xl">💻</span>
      </div>
      <span className="text-sm text-foreground font-medium">{name}</span>
    </div>
  );
}
