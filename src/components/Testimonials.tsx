export default function Testimonials() {
  const testimonials = [
    {
      quote: "3Novator Tech delivered a solution that exceeded our expectations. Their team was professional, responsive, and truly invested in our success.",
      name: "James Carter",
      position: "CTO, FinEdge Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "Their expertise in cloud and DevOps helped us scale faster and operate more efficiently. Highly recommended!",
      name: "Priya Sharma",
      position: "Head of Engineering, HealthPlus",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "A reliable technology partner who understands business needs and delivers real impact. Great experience working with them!",
      name: "Michael Thompson",
      position: "CEO, LogiStream",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
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
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
