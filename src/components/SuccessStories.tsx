import { ArrowRight } from "lucide-react";

export default function SuccessStories() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      category: "FinTech",
      title: "NextGen Banking Platform",
      description: "A secure and scalable platform that enhanced digital banking experiences.",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
      category: "Healthcare",
      title: "Telehealth Solution",
      description: "A robust telemedicine platform connecting doctors and patients seamlessly.",
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
      category: "Logistics",
      title: "Smart Logistics System",
      description: "Real-time tracking and analytics system that improved delivery efficiency by 40%.",
    },
  ];

  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-10 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-7 h-[2px] bg-accent-green"></span>
              <span className="font-body text-foreground font-semibold text-xs tracking-[0.1em] uppercase">
                OUR WORK
              </span>
            </div>
            
            <h2 className="font-headings text-foreground font-bold text-[32px] leading-[1.2]">
              Success Stories That <span className="text-primary">Inspire</span>
            </h2>
          </div>

          {/* View All Button */}
          <a className="hidden lg:flex items-center gap-2 border border-primary text-primary font-body px-5 py-2 rounded-md mt-2 font-medium text-sm cursor-pointer hover:bg-blue-50 transition-colors">
            <span>View All Projects</span>
            <span>→</span>
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white">
              
              {/* Project Image */}
              <div className="relative w-full rounded-lg overflow-hidden h-[220px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <span className="absolute bottom-3 left-3 bg-white text-foreground font-body px-3 py-1 rounded-md font-medium text-xs">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <h3 className="text-lg font-headings text-foreground font-bold">
                  {project.title}
                </h3>
                
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* View Case Study Link */}
                <a className="text-primary text-sm font-body flex items-center gap-1 mt-1 font-semibold cursor-pointer hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="flex justify-center mt-8 lg:hidden">
          <a className="flex items-center gap-2 border border-primary text-primary font-body px-5 py-2 rounded-md font-medium text-sm cursor-pointer hover:bg-blue-50 transition-colors">
            <span>View All Projects</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
