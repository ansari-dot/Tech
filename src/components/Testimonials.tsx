import { User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "With 3Novator's engineering excellence, we successfully scaled our exam portal to support over 30,000 active pre-medical students. The AI score predictor and automated Mistake Notebook are absolute game-changers, delivering outstanding performance under high concurrent loads.",
      name: "Fahad Shah",
      position: "Founder, EdPreps MDCAT",
    },
    {
      quote: "The headless MERN stack e-commerce store built by 3Novator has completely transformed our retail operations. Catalog search is lightning fast, inventory mutations are synchronized in real-time, and the admin panel gives us full control over stock variants and sales metrics.",
      name: "Gary Connell",
      position: "Client & Founder, T-Mobile Tec Store",
    },
    {
      quote: "Our adventure tour reservations increased by 45% within months of launching the new platform. 3Novator designed an intuitive itinerary builder and a seamless WhatsApp booking engine that works flawlessly even under low-bandwidth connections in Northern Pakistan.",
      name: "Aqeel Ahmed",
      position: "Owner, North Paradise Treks",
    },
  ];

  return (
    <section className="bg-gray-50 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Header - Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-7 h-[2px] bg-accent-green"></span>
            <span className="font-body text-accent-green font-semibold text-xs tracking-[0.1em] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
            <span className="inline-block w-7 h-[2px] bg-accent-green"></span>
          </div>

          <h2 className="font-headings text-foreground font-bold text-[32px] leading-[1.2]">
            Trusted by Clients. Proven by <span className="text-primary">Results.</span>
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="text-blue-200 text-5xl font-serif mb-4 leading-none">
                "
              </div>

              {/* Quote Text */}
              <p className="text-sm font-body text-gray-600 leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-body text-foreground font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-muted-foreground text-xs">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
