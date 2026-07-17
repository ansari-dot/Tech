import { Heart, Building2, BookOpen, Truck, Factory, ShoppingCart } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure and scalable solutions for better patient outcomes.",
    },
    {
      icon: Building2,
      title: "FinTech",
      description: "Empowering financial services with innovation and compliance.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Digital platforms that enhance learning and engagement.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Optimized systems for smarter supply chain and operations.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Smart solutions to improve productivity and efficiency.",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Delivering seamless experiences across all customer touchpoints.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image - removed for clean light background */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-accent-green" />
            <span className="font-sans text-xs font-bold tracking-[0.12em] text-accent-green uppercase">
              INDUSTRIES WE SERVE
            </span>
            <div className="w-8 h-[2px] bg-accent-green" />
          </div>
          
          <h2 className="font-headings font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-gray-900">
            Solutions for <span className="text-primary">Every Industry</span>
          </h2>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center group cursor-pointer border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-base text-gray-900 mb-3">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="w-2 h-2 rounded-full bg-accent-green"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}
