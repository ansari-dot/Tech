import { 
  Briefcase,
  BarChart2,
  Users,
  Globe,
  HeartPulse,
  TrendingUp,
  ShoppingCart,
  Factory,
  GraduationCap,
  Truck,
  Building2,
  Zap
} from "lucide-react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStartedWithWhatsApp } from "../utils/whatsapp";



export default function IndustriesPage() {


const [activeSection,setActiveSection]=useState("industries");



const handleNavClick=(section:string)=>{

setActiveSection(section);

};



const handleGetStartedClick=()=>{
  getStartedWithWhatsApp();
};




return (


<div className="bg-white w-full">



<NavBar

activeSection={activeSection}

onNavClick={handleNavClick}

onGetStartedClick={handleGetStartedClick}

/>







{/* HERO SECTION */}



<section 
className="relative overflow-hidden bg-slate-50 min-h-[360px] sm:min-h-[440px] flex items-center"
>

{/* Background Banner Image - Full width background across all screen sizes */}
<div className="absolute inset-0 w-full h-full">

<img

src="/assets/home/industrybanner.png"

alt="Industries Banner"

className="w-full h-full object-cover object-right opacity-90 sm:opacity-100"

/>

</div>


{/* White Gradient Overlay for Text Readability */}
<div

className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 sm:to-transparent w-full sm:w-[70%] lg:w-[55%]"

/>


<div className="flex items-center justify-between px-5 sm:px-10 lg:px-20 py-10 sm:py-16 max-w-7xl mx-auto relative w-full">

<div className="flex-1 max-w-lg z-10 w-full">

<div className="flex items-center gap-2 mb-4">

<div className="w-6 h-0.5 bg-accent-green"></div>

<span className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">

INDUSTRIES WE SERVE

</span>

</div>

<h1 className="font-headings font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-2">

Technology Solutions

</h1>

<h1 className="font-headings font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-6">

Tailored to Your Industry.

</h1>

<p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">

We understand the unique challenges of your industry and build digital solutions that drive growth, efficiency, and innovation.

</p>

</div>





<div className="flex-1 z-10"></div>





</div>





</section>














{/* STATS BAR */}
<div className="mx-4 sm:mx-10 lg:mx-16 -mt-8 relative z-10">
  <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
    
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
        <Briefcase className="w-6 h-6"/>
      </div>
      <div>
        <div className="font-headings font-extrabold text-2xl text-accent-green">
          12+
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Industries Served
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
        <BarChart2 className="w-6 h-6"/>
      </div>
      <div>
        <div className="font-headings font-extrabold text-2xl text-accent-green">
          15+
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Projects Delivered
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
        <Users className="w-6 h-6"/>
      </div>
      <div>
        <div className="font-headings font-extrabold text-2xl text-accent-green">
          98%
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Success Rate
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0">
        <Globe className="w-6 h-6"/>
      </div>
      <div>
        <div className="font-headings font-extrabold text-2xl text-accent-green">
          2+
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Years Experience
        </div>
      </div>
    </div>

  </div>
</div>

{/* INDUSTRIES GRID */}
<section className="px-4 sm:px-10 lg:px-16 py-12 sm:py-16">
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className="w-6 h-0.5 bg-accent-green"></div>
      <span className="text-primary font-semibold text-xs tracking-widest uppercase">
        EMPOWERING EVERY INDUSTRY
      </span>
      <div className="w-6 h-0.5 bg-accent-green"></div>
    </div>

    <h2 className="font-headings font-bold text-2xl sm:text-4xl text-foreground mb-4">
      Solutions Built for Every Sector
    </h2>

    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
      From startups to global enterprises, we deliver industry-specific software solutions that solve real-world problems and unlock new opportunities.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <SectorCard
      icon={HeartPulse}
      title="Healthcare"
      description="We build secure, compliant, and scalable healthcare solutions that improve patient outcomes and streamline operations."
      color="#1a4cde"
      bgColor="#eef3ff"
    />

    <SectorCard
      icon={TrendingUp}
      title="Fintech"
      description="Powering financial services with robust, secure, and intelligent solutions that enhance trust and efficiency."
      color="#22c55e"
      bgColor="#f0fdf4"
    />

    <SectorCard
      icon={ShoppingCart}
      title="Retail & E-commerce"
      description="Delivering seamless digital experiences, smart inventory management, and data-driven retail solutions."
      color="#8b5cf6"
      bgColor="#f5f3ff"
    />

    <SectorCard
      icon={Factory}
      title="Manufacturing"
      description="Optimizing production, supply chain, and operations with custom software built for manufacturing excellence."
      color="#f59e0b"
      bgColor="#fffbeb"
    />

    <SectorCard
      icon={GraduationCap}
      title="Education"
      description="Enabling learning with innovative EdTech solutions that engage students and empower institutions."
      color="#1a4cde"
      bgColor="#eef3ff"
    />

    <SectorCard
      icon={Truck}
      title="Logistics & Supply Chain"
      description="Building intelligent systems that improve visibility, reduce costs, and ensure on-time deliveries."
      color="#14b8a6"
      bgColor="#f0fdfa"
    />

    <SectorCard
      icon={Building2}
      title="Real Estate"
      description="Digitally transforming property management, sales, and customer experiences in the real estate sector."
      color="#8b5cf6"
      bgColor="#f5f3ff"
    />

    <SectorCard
      icon={Zap}
      title="Energy & Utilities"
      description="Creating smart, reliable, and sustainable solutions for energy management and utility operations."
      color="#f59e0b"
      bgColor="#fffbeb"
    />
  </div>
</section>

{/* CTA BANNER */}
<section
  className="relative overflow-hidden"
  style={{
    background:"linear-gradient(180deg,#eef3fb 0%,#dce8f8 100%)",
  }}
>
  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 py-10 sm:py-14 max-w-7xl mx-auto gap-6 text-center sm:text-left">
    <div>
      <div className="text-primary font-semibold text-xs tracking-widest uppercase mb-2">
        LET&apos;S BUILD THE FUTURE TOGETHER
      </div>
      <h3 className="font-headings font-bold text-2xl sm:text-3xl text-foreground">
        Have an Industry in Mind?
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-md">
        We&apos;re ready to build custom solutions that fit your business perfectly.
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3">
      <button 
        onClick={getStartedWithWhatsApp}
        className="bg-primary hover:bg-opacity-95 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
      >
        Let&apos;s Talk →
      </button>

      <button 
        onClick={() => navigate("/portfolio")}
        className="bg-white border border-border hover:bg-slate-50 text-foreground font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
      >
        View Our Work →
      </button>
    </div>
  </div>
</section>

{/* FOOTER */}
<Footer />
</div>
);
}












// SECTOR CARD COMPONENT



function SectorCard({

icon:Icon,

title,

description,

color,

bgColor

}:any){



const navigate = useNavigate();





const handleClick=()=>{





const slugMap:any={



"Healthcare":

"healthcare",



"Fintech":

"fintech",



"Retail & E-commerce":

"retail-e-commerce",



"Manufacturing":

"manufacturing",



"Education":

"education",



"Logistics & Supply Chain":

"logistics-supply-chain",



"Real Estate":

"real-estate",



"Energy & Utilities":

"energy-utilities"



};







navigate(`/industries/${slugMap[title]}`);





};







return (



<div



onClick={handleClick}



className="bg-white border border-border rounded-lg p-6 flex flex-col gap-4 cursor-pointer hover:shadow-lg transition-shadow"



style={{

borderBottom:`3px solid ${color}`

}}



>








<div

className="w-12 h-12 rounded-lg flex items-center justify-center"

style={{

background:bgColor

}}

>


<Icon

className="w-6 h-6"

style={{

color

}}

strokeWidth={2}

/>



</div>









<div>



<div className="font-headings font-bold text-base text-foreground mb-2">


{title}


</div>






<p className="text-sm text-muted-foreground leading-relaxed">


{description}


</p>





</div>








<div className="mt-auto">


<span className="text-foreground font-medium text-base hover:text-primary transition-colors">


→


</span>



</div>






</div>



);



}