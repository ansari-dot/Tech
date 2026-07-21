import { Heart, Building2, BookOpen, Truck, Factory, ShoppingCart, Globe, Zap, Building, Phone, Shield, Car, Cpu, Database, Server, Smartphone, Cloud, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function IndustriesWeServe() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const industries = [
    // Slide 1 (Original 6 Industries)
    { icon: Heart, title: "Healthcare", description: "Secure and scalable solutions for better patient outcomes.", slug: "healthcare" },
    { icon: Building2, title: "FinTech", description: "Empowering financial services with innovation and compliance.", slug: "fintech" },
    { icon: BookOpen, title: "Education", description: "Digital platforms that enhance learning and engagement.", slug: "education" },
    { icon: Truck, title: "Logistics", description: "Optimized systems for smarter supply chain and operations.", slug: "logistics" },
    { icon: Factory, title: "Manufacturing", description: "Smart solutions to improve productivity and efficiency.", slug: "manufacturing" },
    { icon: ShoppingCart, title: "Retail", description: "Delivering seamless experiences across all customer touchpoints.", slug: "retail" },

    // Slide 2
    { icon: Globe, title: "E-Commerce", description: "Scalable digital storefronts with high-conversion checkout flows.", slug: "retail" },
    { icon: Zap, title: "Clean Energy", description: "Intelligent monitoring and IoT management for utilities.", slug: "manufacturing" },
    { icon: Building, title: "Real Estate", description: "PropTech tools, virtual tours, and tenant management portals.", slug: "fintech" },
    { icon: Phone, title: "Telecom", description: "High-capacity network infrastructure and billing integrations.", slug: "custom-software-development" },
    { icon: Shield, title: "Cybersecurity", description: "Enterprise threat monitoring, compliance, and data encryption.", slug: "cybersecurity" },
    { icon: Car, title: "Automotive", description: "Connected vehicle analytics and dealer inventory systems.", slug: "logistics" },

    // Slide 3
    { icon: Cpu, title: "AI & Robotics", description: "Machine learning models and automated process intelligence.", slug: "custom-software-development" },
    { icon: Database, title: "Big Data", description: "High-throughput data warehousing and real-time analytics.", slug: "cloud-solutions" },
    { icon: Server, title: "SaaS Platforms", description: "Multi-tenant cloud architectures built for enterprise scale.", slug: "cloud-solutions" },
    { icon: Smartphone, title: "Mobile Tech", description: "Native and cross-platform mobile apps for iOS and Android.", slug: "mobile-app-development" },
    { icon: Cloud, title: "Cloud Ops", description: "DevOps automation, Kubernetes clusters, and CI/CD pipelines.", slug: "cloud-solutions" },
    { icon: Code, title: "Dev Tools", description: "API gateways, microservices, and custom developer portals.", slug: "custom-software-development" },

    // Slide 4
    { icon: Heart, title: "Pharma", description: "Clinical data management and FDA-compliant tracking systems.", slug: "healthcare" },
    { icon: Building2, title: "InsurTech", description: "Automated claims processing and digital risk assessment.", slug: "fintech" },
    { icon: BookOpen, title: "EdTech Tools", description: "Virtual classrooms, LMS platforms, and student portals.", slug: "education" },
    { icon: Truck, title: "Supply Chain", description: "End-to-end logistics tracking and automated warehouse management.", slug: "logistics" },
    { icon: Factory, title: "Smart Factory", description: "IIoT sensor networks and predictive maintenance dashboards.", slug: "manufacturing" },
    { icon: ShoppingCart, title: "Omnichannel", description: "Unified inventory synchronization across online and offline retail.", slug: "retail" },
  ];

  // Exactly 4 slides with 6 cards per slide page (Matching exact original 6-col grid layout)
  const itemsPerSlide = 6;
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Auto-play slider interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, totalSlides]);

  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Header - Centered (Original Layout) */}
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

        {/* Interactive Slider Track (Original 6-Column Grid Per Slide) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="overflow-hidden py-2"
        >
          <div
            className="flex transition-transform duration-600 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, pageIndex) => {
              const pageIndustries = industries.slice(
                pageIndex * itemsPerSlide,
                pageIndex * itemsPerSlide + itemsPerSlide
              );

              return (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                  {pageIndustries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => navigate(`/industries/${industry.slug}`)}
                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center group cursor-pointer border border-gray-100 hover:-translate-y-1"
                      >
                        {/* Icon */}
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                          <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.8} />
                        </div>

                        {/* Title */}
                        <h3 className="font-sans font-bold text-base text-gray-900 mb-3 group-hover:text-primary transition-colors">
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
              );
            })}
          </div>
        </div>

        {/* 4 Interactive Centered Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: 4 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "w-8 h-2.5 bg-accent-green"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}





