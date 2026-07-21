import { ArrowRight, CheckCircle2, FolderCheck, Users, Award, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  const stats = [
    {
      icon: FolderCheck,
      number: "15+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      number: "98%",
      label: "Success Rate",
    },
    {
      icon: Award,
      number: "2+",
      label: "Years of Experience",
    },
    {
      icon: Briefcase,
      number: "10+",
      label: "Team Members",
    },
  ];

  const values = ["Innovation", "Integrity", "Collaboration", "Excellence"];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 w-full items-stretch">
        
          {/* Left Side - Content (Expanded width to prevent text congestion) */}
          <div className="flex flex-col gap-6 w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 justify-center">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-[2px] bg-accent-green rounded-full"></div>
              <span className="text-xs font-body text-accent-green font-bold tracking-widest uppercase">
                About Us
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-[34px] font-headings font-bold text-slate-900 leading-snug tracking-tight">
              Driving Innovation.<br />
              Delivering <span className="text-primary">Impact.</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              At 3Novator Tech, we combine deep technical expertise with a customer-first mindset to build solutions that drive real-world results.
            </p>

            {/* Checkmarks */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="text-primary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.8} />
                </div>
                <span className="text-sm text-slate-800 font-medium">
                  Engineering scalable and secure digital products
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-primary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.8} />
                </div>
                <span className="text-sm text-slate-800 font-medium">
                  Agile, transparent, and collaborative approach
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-primary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.8} />
                </div>
                <span className="text-sm text-slate-800 font-medium">
                  Committed to long-term partnerships
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/about")}
              className="mt-1 border border-slate-200 hover:border-primary/40 bg-white hover:bg-slate-50/80 text-slate-900 rounded-lg px-5 py-2.5 text-sm font-body font-semibold flex items-center gap-2 w-fit transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Side - Stats Card with Background Image */}
          <div className="flex-1 rounded-2xl overflow-hidden relative shadow-lg border border-slate-100 group min-h-[360px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/assets/home/aboutusbg.png"
                alt="About Background"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
            </div>

            <div className="relative z-10 p-7 sm:p-8 flex flex-col gap-6 h-full justify-between">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex flex-col items-start gap-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary mb-2 shadow-xs">
                        <IconComponent className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div className="text-2xl font-headings font-extrabold text-slate-900 tracking-tight">
                        {stat.number}
                      </div>
                      <div className="text-xs font-semibold text-slate-600">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200/80"></div>

              {/* Bottom Section - Mission, Values */}
              <div className="flex gap-6 items-end">
                
                {/* Mission and Values */}
                <div className="flex flex-col gap-4 flex-1">
                  
                  {/* Our Mission */}
                  <div>
                    <div className="text-sm font-headings font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Our Mission</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl font-normal">
                      To empower businesses with innovative technology solutions that drive growth, efficiency, and lasting impact.
                    </p>
                  </div>

                  {/* Our Values */}
                  <div>
                    <div className="text-sm font-headings font-bold text-slate-900 mb-2.5">
                      Our Values
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {values.map((value, index) => (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-xl px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white/90 shadow-xs hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


