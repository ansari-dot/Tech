import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto">
        
        {/* CTA Box with Background Image */}
        <div className="relative bg-[#0a1f44] rounded-3xl overflow-hidden py-8 px-8 sm:py-10 sm:px-12 lg:py-12 lg:px-16">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/home/ctabg.png"
              alt="CTA Background"
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-7 h-[2px] bg-accent-green"></span>
              <span className="font-body text-accent-green font-semibold text-xs tracking-[0.1em] uppercase">
                LET'S BUILD THE FUTURE TOGETHER
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-headings text-white font-extrabold text-3xl sm:text-4xl lg:text-[40px] leading-tight mb-3">
              Ready to Build<br />
              Something <span className="text-accent-green">Great</span>?
            </h2>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Let's turn your ideas into powerful digital solutions<br />
              that drive growth and success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button className="bg-white text-primary hover:bg-gray-100 font-semibold text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
              
              <button className="border-2 border-accent-green text-accent-green hover:bg-accent-green/10 font-semibold text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
