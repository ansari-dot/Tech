import { Settings, Triangle, SlidersHorizontal, AtSign, Asterisk, Send } from "lucide-react";

export default function TrustedBar() {
  const companies = [
    { name: "TechNova", icon: Settings },
    { name: "CloudAxis", icon: Triangle },
    { name: "InnoSphere", icon: SlidersHorizontal },
    { name: "DataPeak", icon: AtSign },
    { name: "Nexora", icon: Asterisk },
    { name: "BytePoint", icon: Send },
  ];

  return (
    <div 
      className="mx-4 sm:mx-6 lg:mx-8 xl:mx-10 -mt-12 sm:-mt-14 relative z-20 bg-[#0d1b4b] rounded-2xl p-6 sm:p-8 lg:px-12 lg:py-7 shadow-lg shadow-blue-950/20"
      id="trusted-companies-bar"
    >
      {/* Centered sub-heading with stylish line accents */}
      <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
        <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] bg-[#6b7a99] opacity-35" />
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.18em] font-semibold text-[#8b9bb4] uppercase text-center">
          TRUSTED BY FORWARD-THINKING COMPANIES
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] bg-[#6b7a99] opacity-35" />
      </div>

      {/* Grid container for companies - responsive layouts */}
      {/* Desktop: clean row with vertical line dividers | Mobile/Tablet: flexible auto-grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-between gap-y-6 gap-x-4">
        {companies.map((company, index) => {
          const IconComponent = company.icon;
          return (
            <div 
              key={company.name} 
              className="flex items-center justify-center lg:flex-1"
            >
              <div className="flex items-center gap-2.5 group cursor-pointer py-1">
                {/* Responsive Icon wrapper with smooth glow and rotation effect on hover */}
                <span className="text-white/80 group-hover:text-accent-green group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </span>
                
                <span className="font-sans font-medium text-xs sm:text-sm text-white/95 group-hover:text-white transition-colors tracking-wide select-none">
                  {company.name}
                </span>
              </div>

              {/* Responsive Divider: Show only on large screens, except for the very last element */}
              {index < companies.length - 1 && (
                <div className="hidden lg:block w-[1px] h-6 bg-[#6b7a99]/35 ml-auto mr-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
