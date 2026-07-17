import { Telescope, ShoppingCart, Wrench, Rocket, HeadphonesIcon } from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      icon: Telescope,
      number: "01",
      title: "Discover",
      description: "We understand your business, goals, and challenges.",
    },
    {
      icon: ShoppingCart,
      number: "02",
      title: "Plan",
      description: "We create a strategic plan tailored to your unique needs.",
    },
    {
      icon: Wrench,
      number: "03",
      title: "Develop",
      description: "Our team builds with precision and agility.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deliver",
      description: "We deliver high-quality solutions that drive real impact.",
    },
    {
      icon: HeadphonesIcon,
      number: "05",
      title: "Support",
      description: "We provide ongoing support to ensure long-term success.",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-accent-green" />
            <span className="font-sans text-xs font-bold tracking-[0.12em] text-accent-green uppercase">
              OUR PROCESS
            </span>
            <div className="w-8 h-[2px] bg-accent-green" />
          </div>
          
          <h2 className="font-headings font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-gray-900">
            A Simple Process That <span className="text-primary">Delivers Results</span>
          </h2>
        </div>

        {/* Process Steps with Connected Dots */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-blue-200 hidden lg:block" style={{ top: '32px' }}></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Icon with connecting dots */}
                  <div className="flex items-center justify-center mb-6 relative">
                    {/* Left dot */}
                    {index > 0 && (
                      <div className="hidden lg:block absolute left-0 w-2 h-2 rounded-full bg-blue-300" style={{ left: '-16px' }}></div>
                    )}
                    
                    {/* Main Icon Circle */}
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center relative z-10">
                      <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.8} />
                    </div>
                    
                    {/* Right dot */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute right-0 w-2 h-2 rounded-full bg-blue-300" style={{ right: '-16px' }}></div>
                    )}
                  </div>

                  {/* Number */}
                  <div className="text-sm font-bold text-gray-400 mb-2">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-lg text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-600 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
