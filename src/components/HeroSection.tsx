import { ArrowRight, Rocket } from "lucide-react";

interface HeroSectionProps {
  onQuoteClick: () => void;
  onWorkClick: () => void;
}

export default function HeroSection({ onQuoteClick, onWorkClick }: HeroSectionProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Full Background Banner Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/home/homebanner.png"
          alt="Hero Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content and Image Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-14 lg:py-16 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] z-20">
            {/* Subtitle with green line */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-accent-green" />
              <span className="font-sans text-[10px] font-bold tracking-[0.12em] text-accent-green uppercase">
                THE FUTURE OF ENGINEERING
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-headings font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] mb-4">
              We Build<br />
              <span className="text-primary">Digital Excellence.</span>
            </h1>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 max-w-sm">
              3Novator Tech delivers mission-critical software.<br />
              We partner with visionary brands to scale<br />
              high-utility digital systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onQuoteClick}
                className="bg-primary hover:bg-opacity-90 text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-md flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
                id="btn-get-quote"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={onWorkClick}
                className="font-sans font-semibold text-xs px-5 py-2.5 rounded-md flex items-center justify-center gap-2 text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50 hover:border-primary/40 transition-all cursor-pointer"
                id="btn-view-work"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Side - Workspace Image Overlay */}
          <div className="w-full lg:w-[55%] relative h-[300px] sm:h-[350px] lg:h-[380px]">
            {/* This area is intentionally empty - the banner shows through */}
            
            {/* Scalable Solutions Badge - Positioned on left side of image */}
            <div 
              className="absolute top-[55%] left-[-12%] -translate-y-1/2 w-[90px] h-[90px] bg-white rounded-full shadow-xl flex items-center justify-center flex-col gap-1 z-30"
              id="scalable-badge"
            >
              <Rocket className="w-5 h-5 text-primary" strokeWidth={2} />
              <div className="font-sans font-bold text-center text-[9px] leading-tight text-gray-900">
                Scalable<br />Solutions
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave/Curve Decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        {/* Blue Wave */}
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,80 600,50 T1200,50 L1200,100 L0,100 Z" fill="#1a4fd6" opacity="0.1" />
        </svg>
      </div>
    </section>
  );
}
