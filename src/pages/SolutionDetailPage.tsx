import { useParams, useNavigate } from "react-router-dom";
import { Database, Zap, Target, Lightbulb, Heart, Settings, Gauge, Shield, AlertCircle, FileText, GitBranch, BarChart3, ShieldCheck, TrendingUp, DollarSign, User, TrendingUp as TrendingUpIcon } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { getStartedWithWhatsApp } from "../utils/whatsapp";

export default function SolutionDetailPage() {
  const { industry, solution } = useParams<{ industry: string; solution: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("industries");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const handleGetStartedClick = () => {
    getStartedWithWhatsApp();
  };

  // Solution data
  const solutionData = {
    name: "Data Silos",
    subtitle: "HEALTHCARE CHALLENGE",
    description: "Fragmented data across disconnected systems leads to poor visibility, inefficient operations, and suboptimal decision-making.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
  };

  useEffect(() => {
    if (!industry || !solution) {
      navigate("/industries");
    }
  }, [industry, solution, navigate]);

  if (!industry || !solution) {
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
      <section className="relative overflow-hidden bg-slate-50/50 lg:bg-transparent min-h-0 lg:min-h-[450px] flex items-center">
        {/* Background Banner Image (Desktop) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <img
            src="/assets/iddbg.png"
            alt="Solution Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* White Gradient Overlay (Desktop) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '55%' }}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 lg:py-16 relative z-10 w-full">
          <div className="max-w-xl">
            
            {/* Mobile Image Container */}
            <div className="block lg:hidden w-full h-52 sm:h-72 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white mb-6">
              <img
                src="/assets/iddbg.png"
                alt="Solution Banner"
                className="w-full h-full object-cover sm:object-contain"
              />
            </div>

            {/* Breadcrumb */}
            <div className="text-xs text-muted-foreground mb-4 flex items-center gap-2 flex-wrap">
              <span className="text-foreground opacity-50">Home</span>
              <span>›</span>
              <span className="text-muted-foreground">Industries</span>
              <span>›</span>
              <span className="text-muted-foreground capitalize">{industry?.replace(/-/g, ' ')}</span>
              <span>›</span>
              <span className="text-primary capitalize">Data Silos</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-accent-green"></span>
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                {solutionData.subtitle}
              </span>
            </div>
            
            <h1 className="font-headings font-bold text-3xl sm:text-5xl text-foreground leading-tight mb-1">
              Data <span className="text-primary">Silos</span>
            </h1>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
              {solutionData.description}
            </p>
            
            <button 
              onClick={() => navigate(`/industries/${industry}`)}
              className="mt-6 text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              <span>← Back to Challenges</span>
            </button>
          </div>
        </div>
      </section>

      {/* Challenge Cards */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ChallengeCard 
              icon={FileText}
              title="The Challenge"
              description="Patient and operational data scatter across systems, making it difficult to access, share, and analyze."
              iconColor="#f97316"
              iconBg="#fff7ed"
            />
            <ChallengeCard 
              icon={Target}
              title="Impact"
              description="Leads to incomplete patient records, duplicated processes, and delayed insights."
              iconColor="#a855f7"
              iconBg="#f5f3ff"
            />
            <ChallengeCard 
              icon={Zap}
              title="Effects"
              description="Clinicians, administrators, IT teams, and most importantly, patients."
              iconColor="#3b82f6"
              iconBg="#dbeafe"
            />
            <ChallengeCard 
              icon={Lightbulb}
              title="Our Approach"
              description="We unify data ecosystems and enable access to timely information for better outcomes."
              iconColor="#10b981"
              iconBg="#d1fae5"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                WHAT'S AT STAKE
              </span>
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              The Impact of Data Silos in Healthcare
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-6">
            <ImpactCard 
              icon={Heart}
              title="Poor Patient Care"
              description="Incomplete patient information can lead to misdiagnosis and inappropriate treatment."
              iconColor="#f97316"
              iconBg="#fff7ed"
            />
            <ImpactCard 
              icon={Settings}
              title="Inefficient Operations"
              description="Teams work with siloed, redundant, and inconsistent data, increasing time and costs."
              iconColor="#a855f7"
              iconBg="#f5f3ff"
            />
            <ImpactCard 
              icon={Gauge}
              title="Limited Visibility"
              description="Lack of comprehensive data insights prevents real-time tracking and performance."
              iconColor="#3b82f6"
              iconBg="#dbeafe"
            />
            <ImpactCard 
              icon={Shield}
              title="Compliance Risks"
              description="Fragmented data management increases the risk of HIPAA violations and non-compliance."
              iconColor="#10b981"
              iconBg="#d1fae5"
            />
            <ImpactCard 
              icon={AlertCircle}
              title="Higher Costs"
              description="Duplicate tests, delays in care delivery, manual workarounds, and process inefficiencies."
              iconColor="#ef4444"
              iconBg="#fee2e2"
            />
          </div>
        </div>
      </section>

      {/* How We Solve Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                OUR SOLUTION
              </span>
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              How We Solve Data Silos
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <SolutionCard 
              icon={Database}
              title="Data Integration"
              description="We design and implement solutions like HL7, APIs, and custom interfaces into a unified data layer."
              iconColor="#3b82f6"
              iconBg="#dbeafe"
              checkColor="#10b981"
            />
            <SolutionCard 
              icon={GitBranch}
              title="Centralized Data Repository"
              description="An easy-to-access, centralized data warehouse with custom repository with standardized formats."
              iconColor="#a855f7"
              iconBg="#f5f3ff"
              checkColor="#10b981"
            />
            <SolutionCard 
              icon={Target}
              title="Data Standardization"
              description="We normalize inconsistent data formats, ensuring consistency and accuracy across sources."
              iconColor="#10b981"
              iconBg="#d1fae5"
              checkColor="#10b981"
            />
            <SolutionCard 
              icon={BarChart3}
              title="Advanced Analytics"
              description="Unlock actionable insights with real-time analytics and dashboards for better decision-making."
              iconColor="#f59e0b"
              iconBg="#fef3c7"
              checkColor="#10b981"
            />
            <SolutionCard 
              icon={ShieldCheck}
              title="Secure & Compliant"
              description="Built with robust compliance with industry standards to protect sensitive patient information."
              iconColor="#06b6d4"
              iconBg="#cffafe"
              checkColor="#10b981"
            />
            <SolutionCard 
              icon={TrendingUpIcon}
              title="Seamless Data Sharing"
              description="Enable secure real-time sharing across departments and external entities when needed."
              iconColor="#ec4899"
              iconBg="#fce7f3"
              checkColor="#10b981"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                BENEFITS DELIVERED
              </span>
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              Key Benefits
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-6">
            <BenefitCard 
              icon={User}
              title="360° Patient View"
              description="Complete patient history accessible anytime for better care."
              iconColor="#3b82f6"
              iconBg="#dbeafe"
            />
            <BenefitCard 
              icon={TrendingUp}
              title="Improved Efficiency"
              description="Streamlined workflows reduce manual work and admin effort."
              iconColor="#10b981"
              iconBg="#d1fae5"
            />
            <BenefitCard 
              icon={Target}
              title="Better Outcomes"
              description="Data-driven decisions lead to improved patient outcomes."
              iconColor="#a855f7"
              iconBg="#f5f3ff"
            />
            <BenefitCard 
              icon={Shield}
              title="Risk Mitigation"
              description="Stay compliant and reduce the risk of data breaches."
              iconColor="#f59e0b"
              iconBg="#fef3c7"
            />
            <BenefitCard 
              icon={DollarSign}
              title="Cost Savings"
              description="Eliminate redundancies and optimize resource utilization."
              iconColor="#06b6d4"
              iconBg="#cffafe"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-16 py-16 bg-white">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/home/ctabg.png"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-6xl mx-auto px-12 py-8 relative z-10">
            <div className="flex items-center justify-between gap-8">
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                    READY TO UNIFY YOUR DATA FOR BETTER HEALTHCARE?
                  </span>
                </div>
                <h2 className="font-headings font-bold text-3xl text-white leading-tight mb-3">
                  Ready to Unify Your Data<br />
                  for Better Healthcare?
                </h2>
                <p className="text-sm text-white opacity-95 leading-relaxed max-w-md">
                  Let's build a connected healthcare ecosystem that puts patients first.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors whitespace-nowrap">
                  <span>Get a Free Consultation</span>
                  <span>→</span>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors whitespace-nowrap">
                  <span>Talk to an Expert</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Components
function ChallengeCard({ icon: Icon, title, description, iconColor, iconBg }: any) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: iconBg }}>
        <Icon className="w-8 h-8" style={{ color: iconColor }} strokeWidth={1.5} />
      </div>
      <div className="font-semibold text-base text-slate-800 mb-2">{title}</div>
      <div className="text-sm text-slate-600 leading-relaxed">{description}</div>
    </div>
  );
}

function ImpactCard({ icon: Icon, title, description, iconColor, iconBg }: any) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: iconBg }}>
        <Icon className="w-7 h-7" style={{ color: iconColor }} strokeWidth={1.5} />
      </div>
      <div className="font-semibold text-base text-slate-800 mb-2">{title}</div>
      <div className="text-sm text-slate-600 leading-relaxed">{description}</div>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, description, iconColor, iconBg, checkColor }: any) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-start gap-4">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: iconBg }}>
        <Icon className="w-7 h-7" style={{ color: iconColor }} strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-base text-slate-800 mb-2">{title}</div>
        <div className="text-sm text-slate-600 leading-relaxed">{description}</div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: checkColor + '20' }}>
          <svg className="w-4 h-4" style={{ color: checkColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description, iconColor, iconBg }: any) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: iconBg }}>
        <Icon className="w-8 h-8" style={{ color: iconColor }} strokeWidth={1.5} />
      </div>
      <div className="font-semibold text-base text-slate-800 mb-2">{title}</div>
      <div className="text-sm text-slate-600 leading-relaxed">{description}</div>
    </div>
  );
}
