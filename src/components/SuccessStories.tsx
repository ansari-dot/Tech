import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

export default function SuccessStories() {
  const navigate = useNavigate();

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
          <button 
            onClick={() => navigate("/portfolio")}
            className="hidden lg:flex items-center gap-2 border border-primary text-primary font-body px-5 py-2 rounded-md mt-2 font-medium text-sm cursor-pointer hover:bg-blue-50 transition-colors"
          >
            <span>View All Projects</span>
            <span>→</span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => navigate(`/portfolio/${project.id}`)}
              className="flex flex-col bg-white cursor-pointer group"
            >
              
              {/* Project Image */}
              <div className="relative w-full rounded-lg overflow-hidden h-[220px]">
                <img
                  src={project.cardImage || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute bottom-3 left-3 bg-white text-foreground font-body px-3 py-1 rounded-md font-medium text-xs">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <h3 className="text-lg font-headings text-foreground font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* View Case Study Link */}
                <span className="text-primary text-sm font-body flex items-center gap-1 mt-1 font-semibold hover:gap-2 transition-all">
                  <span>View Case Study</span>
                  <span className="text-sm">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="flex justify-center mt-8 lg:hidden">
          <button 
            onClick={() => navigate("/portfolio")}
            className="flex items-center gap-2 border border-primary text-primary font-body px-5 py-2 rounded-md font-medium text-sm cursor-pointer hover:bg-blue-50 transition-colors"
          >
            <span>View All Projects</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
