import { Code2, Cloud, Smartphone, Shield, BarChart3, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Scalable, secure, and tailor-made software built to solve real business problems.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Engineering",
      description: "Robust cloud solutions and DevOps practices to accelerate delivery and performance.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "High-performance mobile apps that deliver seamless user experiences.",
    },
    {
      icon: Shield,
      title: "QA & Software Testing",
      description: "Ensure reliability and quality through automated and manual testing excellence.",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <img
          src="/assets/home/servicesbg.png"
          alt="About Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-accent-green" />
              <span className="font-sans text-[10px] font-bold tracking-[0.12em] text-accent-green uppercase">
                WHAT WE DO
              </span>
            </div>
            
            <h2 className="font-headings font-extrabold text-2xl sm:text-3xl lg:text-[36px] leading-[1.2] text-gray-900">
              End-to-End Software Solutions<br />
              Built for <span className="text-primary">Impact</span>
            </h2>
          </div>

          {/* Right Side - Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-gray-100 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-sm text-gray-900 mb-2 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-600 leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Arrow Link */}
                  <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
