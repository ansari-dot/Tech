import { ArrowRight, CheckCircle2, FolderCheck, Users, Award, Briefcase } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      icon: FolderCheck,
      number: "250+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      number: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: Award,
      number: "12+",
      label: "Years of Experience",
    },
    {
      icon: Briefcase,
      number: "50+",
      label: "Expert Team",
    },
  ];

  const values = ["Innovation", "Integrity", "Collaboration", "Excellence"];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex gap-10 w-full items-stretch">
        
        {/* Left Side - Content */}
        <div className="flex flex-col gap-5 w-72 flex-shrink-0 justify-center">
          {/* Subtitle */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-0.5 bg-accent-green"></div>
            <span className="text-xs font-body text-accent-green font-semibold tracking-widest uppercase">
              About Us
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-headings font-bold text-foreground leading-snug">
            Driving Innovation.<br />
            Delivering <span className="text-primary">Impact.</span>
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            At 3Novator Tech, we combine deep technical expertise with a customer-first mindset to build solutions that drive real-world results.
          </p>

          {/* Checkmarks */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 text-primary flex-shrink-0">
                <CheckCircle2 className="w-[15px] h-[15px]" strokeWidth={3.2} />
              </div>
              <span className="text-sm text-foreground">
                Engineering scalable and secure digital products
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 text-primary flex-shrink-0">
                <CheckCircle2 className="w-[15px] h-[15px]" strokeWidth={3.2} />
              </div>
              <span className="text-sm text-foreground">
                Agile, transparent, and collaborative approach
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 text-primary flex-shrink-0">
                <CheckCircle2 className="w-[15px] h-[15px]" strokeWidth={3.2} />
              </div>
              <span className="text-sm text-foreground">
                Committed to long-term partnerships
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-2 border border-border rounded-md px-5 py-2.5 text-sm font-body font-medium text-foreground flex items-center gap-2 w-fit hover:bg-gray-50 transition-colors">
            <span>Learn More About Us</span>
            <ArrowRight className="w-[14px] h-[14px]" strokeWidth={3.4} />
          </button>
        </div>

        {/* Right Side - Stats Card with Background Image */}
        <div 
          className="flex-1 rounded-2xl overflow-hidden relative"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/home/aboutusbg.png"
              alt="About Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-8 flex flex-col gap-5 h-full">
            
            {/* Stats Grid */}
            <div className="flex gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-start gap-1 flex-1">
                    <div className="text-primary mb-2">
                      <IconComponent className="w-[30px] h-[30px]" strokeWidth={1.6} />
                    </div>
                    <div className="text-2xl font-headings font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-border opacity-60"></div>

            {/* Bottom Section - Mission, Values, and Image */}
            <div className="flex gap-6 flex-1 items-end">
              
              {/* Mission and Values */}
              <div className="flex flex-col gap-4 flex-1">
                
                {/* Our Mission */}
                <div>
                  <div className="text-sm font-headings font-semibold text-foreground mb-1">
                    Our Mission
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and lasting impact.
                  </p>
                </div>

                {/* Our Values */}
                <div>
                  <div className="text-sm font-headings font-semibold text-foreground mb-2.5">
                    Our Values
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="border border-border rounded-xl px-4 py-1.5 text-xs text-foreground font-body bg-background"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Building Image placeholder - removed since background shows the building */}

            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
