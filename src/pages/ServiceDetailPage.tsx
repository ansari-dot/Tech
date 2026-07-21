import { 
  useParams,
  useNavigate
} from "react-router-dom";
import { getStartedWithWhatsApp } from "../utils/whatsapp";

import { 
  Layers, ShieldCheck, Cpu, Clock, Settings, LayoutDashboard, Shield, 
  TrendingUp, Users, Code, PenTool, FlaskConical, Rocket, Search, 
  ArrowRight, ArrowLeft, Check, X, Send, CheckCircle, Mail, MapPin, 
  Zap, ChevronRight, Monitor, Database, Smartphone, Sparkles, Terminal, 
  Briefcase, Tag, Download, ShoppingBag, Heart, ShoppingCart, Globe, Calendar,
  Server, Key, Lock, GitFork, RefreshCw, MessageSquare, FileText, GitMerge, GitBranch
} from "lucide-react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";

export default function ServiceDetailPage(){


const {service}=useParams<{service:string}>();

const navigate=useNavigate();

const [activeSection,setActiveSection]=useState("services");



const handleNavClick=(section:string)=>{

setActiveSection(section);

};



const handleGetStartedClick=()=>{
  getStartedWithWhatsApp();
};





const servicesData:any={



"custom-software-development":{


name:"Custom Software Development",

titleLines:[
"Custom Software",
"Development"
],

description:
"We build powerful, scalable, and secure custom software solutions that drive growth, streamline operations, and solve complex business challenges.",


heroImage:"/assets/sd.png",

heroFit:"cover",

heroPosition:"center center",

heroScale:1,


overviewTitle:[
"Tailored Software Solutions",
"for Your Unique Needs"
],


featureTitle:
"Why Choose Our Custom Software Solutions?",


ctaTitle:
"Ready To Build Your Custom Software Solution?",

technologies: [
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Laravel" },
  { name: ".NET" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "MySQL" }
]

},






"mobile-app-development":{


name:"Mobile App Development",

titleLines:[
"Mobile App",
"Development"
],


description:
"We create feature-rich mobile applications that improve customer engagement, increase productivity, and help businesses grow.",


heroImage:"/assets/services/mobile-app.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,


overviewTitle:[
"Powerful Mobile Experiences",
"Built For Your Audience"
],


featureTitle:
"Why Choose Our Mobile App Solutions?",


ctaTitle:
"Ready To Build Your Mobile App?",

technologies: [
  { name: "React Native" },
  { name: "Flutter" },
  { name: "Swift" },
  { name: "Kotlin" },
  { name: "iOS" },
  { name: "Android" }
]

},







"cloud-solutions":{


name:"Cloud Solutions",

titleLines:[
"Cloud",
"Solutions"
],


description:
"We deliver secure, scalable, and cost-effective cloud solutions that improve performance and support modern business needs.",


heroImage:"/assets/services/cloud-solutions.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,


overviewTitle:[
"Flexible Cloud Infrastructure",
"That Scales With Business"
],


featureTitle:
"Why Choose Our Cloud Solutions?",


ctaTitle:
"Ready To Move Your Business To The Cloud?",

technologies: [
  { name: "AWS" },
  { name: "Azure" },
  { name: "Google Cloud" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Terraform" }
]

},







"cybersecurity":{


name:"Cybersecurity",

titleLines:[
"Cybersecurity"
],


description:
"We protect your systems, applications, and sensitive data with advanced security solutions designed for modern threats.",


heroImage:"/assets/services/cybersecurity.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,


overviewTitle:[
"Advanced Security Solutions",
"To Protect Digital Assets"
],


featureTitle:
"Why Choose Our Cybersecurity Solutions?",


ctaTitle:
"Ready To Secure Your Digital Future?",

technologies: [
  { name: "OAuth 2.0" },
  { name: "Cloudflare" },
  { name: "Wireshark" },
  { name: "Metasploit" },
  { name: "Kali Linux" },
  { name: "SSL / TLS" }
]

},








"ai-automation":{


name:"AI & Automation",

titleLines:[
"AI &",
"Automation"
],


description:
"We use artificial intelligence and automation technologies to simplify workflows, improve efficiency, and accelerate growth.",


heroImage:"/assets/services/ai-automation.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,


overviewTitle:[
"Smart AI Solutions",
"That Improve Efficiency"
],


featureTitle:
"Why Choose Our AI Solutions?",


ctaTitle:
"Ready To Automate Your Business?",

technologies: [
  { name: "Python" },
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "OpenAI" },
  { name: "LangChain" },
  { name: "Hugging Face" }
]

},







"data-analytics-bi":{


name:"Data Analytics & BI",

titleLines:[
"Data Analytics",
"& BI"
],


description:
"We transform business data into valuable insights that help organizations make smarter and faster decisions.",


heroImage:"/assets/services/data-analytics.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,


overviewTitle:[
"Turn Data Into Insights",
"That Drive Decisions"
],


featureTitle:
"Why Choose Our Data Analytics Services?",


ctaTitle:
"Ready To Turn Data Into Growth?",

technologies: [
  { name: "Python" },
  { name: "Tableau" },
  { name: "Power BI" },
  { name: "Snowflake" },
  { name: "Apache Spark" },
  { name: "PostgreSQL" }
]

},







"system-integration":{


name:"System Integration",

titleLines:[
"System",
"Integration"
],


description:
"We connect your systems, platforms, and applications to create seamless workflows and better collaboration.",


heroImage:"/assets/services/system-integraton.png",

heroFit:"cover",

heroPosition:"center center",

heroScale:1,


overviewTitle:[
"Connected Systems",
"For Better Operations"
],


featureTitle:
"Why Choose Our Integration Services?",


ctaTitle:
"Ready To Connect Your Systems?",

technologies: [
  { name: "Apache Kafka" },
  { name: "RabbitMQ" },
  { name: "GraphQL" },
  { name: "REST APIs" },
  { name: "MuleSoft" },
  { name: "Webhooks" }
]

},







"it-consulting":{


name:"IT Consulting",

titleLines:[
"IT",
"Consulting"
],


description:
"We provide expert technology guidance and strategies to help businesses choose the right digital solutions.",


heroImage:"/assets/services/it-consultant.png",

heroFit:"cover",

heroPosition:"center center",

heroScale:1,


overviewTitle:[
"Strategic IT Guidance",
"For Business Growth"
],


featureTitle:
"Why Choose Our IT Consulting Services?",


ctaTitle:
"Ready To Build Your Technology Strategy?",

technologies: [
  { name: "Jira" },
  { name: "Agile / Scrum" },
  { name: "Confluence" },
  { name: "Trello" },
  { name: "Slack" },
  { name: "GitLab" }
]

}


};





const serviceData=servicesData[service || ""];




useEffect(()=>{


if(!serviceData){

navigate("/services");

}


},[serviceData,navigate]);




if(!serviceData){

return null;

}






return (

<div className="bg-white w-full font-body">


<NavBar

activeSection={activeSection}

onNavClick={handleNavClick}

onGetStartedClick={handleGetStartedClick}

/>





<section className="relative overflow-hidden bg-slate-50 min-h-[380px] sm:min-h-[460px] flex items-center">
  {/* Background Banner Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src={serviceData.heroImage}
      alt={serviceData.name}
      className="w-full h-full object-cover object-right opacity-90 sm:opacity-100"
      style={{
        objectPosition: serviceData.heroPosition || "right center",
        transform: `scale(${serviceData.heroScale || 1})`
      }}
    />
  </div>

  {/* Soft White Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 sm:to-transparent w-full sm:w-[70%] lg:w-[55%]"></div>

  <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-16 relative z-10 w-full">
    <div className="max-w-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-0.5 bg-accent-green"></div>
        <span className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">
          OUR SERVICES
        </span>
      </div>

      <h1 className="font-headings font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
        {serviceData.titleLines.map((line: string, index: number) => (
          <div key={index}>{line}</div>
        ))}
      </h1>

      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
        {serviceData.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
        <IconFeature icon={Layers} title="Scalable" subtitle="Solutions"/>
        <IconFeature icon={ShieldCheck} title="Secure &" subtitle="Reliable"/>
        <IconFeature icon={Cpu} title="Modern" subtitle="Technologies"/>
        <IconFeature icon={Clock} title="On-time" subtitle="Delivery"/>
      </div>
    </div>
  </div>
</section>


{/* OVERVIEW SECTION */}
<section className="bg-white py-12 sm:py-16 px-4 sm:px-10 lg:px-16">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      
      <div className="w-full lg:w-1/2">
        <div className="text-primary font-semibold text-xs sm:text-sm mb-2 tracking-wide uppercase">
          OVERVIEW
        </div>

        <h2 className="font-headings font-bold text-2xl sm:text-4xl text-foreground leading-tight mb-5">
          {serviceData.overviewTitle.map((line:string,index:number)=>(
            <div key={index}>{line}</div>
          ))}
        </h2>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
          Our {serviceData.name.toLowerCase()} services help businesses solve complex challenges, improve efficiency, and build future-ready digital solutions.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <CheckItem text="Business-focused solutions designed around your goals"/>
          <CheckItem text="Transparent communication and agile development"/>
          <CheckItem text="Secure and scalable technology solutions"/>
          <CheckItem text="Long-term support after project delivery"/>
        </div>

        <button onClick={handleGetStartedClick} className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-md active:scale-95">
          <ArrowRight className="w-4 h-4"/>
          Discuss Your Project
        </button>
      </div>

      {/* Dark Process Card Container */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl" style={{ minHeight: '380px', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c1445 100%)' }}>
          
          {/* Header label */}
          <div style={{ position: 'relative', zIndex: 10, padding: '24px 24px 10px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.18)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '20px', padding: '5px 14px', marginBottom: '16px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#818cf8', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#a5b4fc', letterSpacing: '0.08em' }}>OUR PROCESS</span>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>{serviceData.name}</div>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #6366f1, #06b6d4)', borderRadius: '2px' }} />
          </div>

          {/* Process steps */}
          <div style={{ position: 'relative', zIndex: 10, padding: '8px 24px 24px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            <PremiumProcessStep number="01" icon={Search}  color="#6366f1" label="Planning"   desc="Analyze goals and requirements." isLast={false} />
            <PremiumProcessStep number="02" icon={PenTool}  color="#06b6d4" label="Design"     desc="Create user-focused solutions." isLast={false} />
            <PremiumProcessStep number="03" icon={Code}     color="#8b5cf6" label="Development" desc="Build scalable systems."       isLast={false} />
            <PremiumProcessStep number="04" icon={FlaskConical} color="#10b981" label="Testing"    desc="Ensure quality performance."   isLast={false} />
            <PremiumProcessStep number="05" icon={Rocket}  color="#f59e0b" label="Deployment" desc="Launch and maintain."           isLast={true} />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* FEATURES SECTION */}
<section className="bg-white py-12 sm:py-16 px-4 sm:px-10 lg:px-16 border-t border-slate-100">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10 sm:mb-12">
      <div className="text-primary font-semibold text-xs sm:text-sm mb-2 tracking-wide uppercase">
        FEATURES & BENEFITS
      </div>
      <h2 className="font-headings font-bold text-2xl sm:text-4xl text-foreground">
        {serviceData.featureTitle}
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        icon={Settings}
        title="Tailored Solutions"
        description="Solutions created according to your business requirements."
        iconColor="#1a7c3e"
        iconBg="#e8f5ee"
      />

      <FeatureCard
        icon={LayoutDashboard}
        title="Scalable Architecture"
        description="Systems designed to grow with your business."
        iconColor="#2563eb"
        iconBg="#dbeafe"
      />

      <FeatureCard
        icon={Shield}
        title="Enhanced Security"
        description="Protection using modern security practices."
        iconColor="#8b5cf6"
        iconBg="#f5f3ff"
      />

      <FeatureCard
        icon={TrendingUp}
        title="Improved Efficiency"
        description="Better workflows and optimized operations."
        iconColor="#f97316"
        iconBg="#fff7ed"
      />

      <FeatureCard
        icon={Users}
        title="Better Experience"
        description="User-focused solutions for better engagement."
        iconColor="#1a7c3e"
        iconBg="#e8f5ee"
      />

      <FeatureCard
        icon={ShieldCheck}
        title="Continuous Support"
        description="Ongoing assistance after deployment."
        iconColor="#2563eb"
        iconBg="#dbeafe"
      />
    </div>
  </div>
</section>

{/* PROCESS SECTION */}
<section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-10 lg:px-16">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10 sm:mb-12">
      <div className="text-primary font-semibold text-xs sm:text-sm mb-2 tracking-wide uppercase">
        OUR PROCESS
      </div>
      <h2 className="font-headings font-bold text-2xl sm:text-4xl text-foreground">
        Our Development Process
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      <ProcessStep number="01" icon={Search} title="Research" description="Understand requirements." hasLine={true}/>
      <ProcessStep number="02" icon={LayoutDashboard} title="Planning" description="Create roadmap." hasLine={true}/>
      <ProcessStep number="03" icon={PenTool} title="Design" description="Build experience." hasLine={true}/>
      <ProcessStep number="04" icon={Code} title="Development" description="Create solution." hasLine={true}/>
      <ProcessStep number="05" icon={FlaskConical} title="Testing" description="Check quality." hasLine={true}/>
      <ProcessStep number="06" icon={Rocket} title="Deployment" description="Launch successfully." hasLine={false}/>
    </div>
  </div>
</section>

{/* TECHNOLOGY SECTION */}
<section className="bg-white py-12 sm:py-16 px-4 sm:px-10 lg:px-16">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10 sm:mb-12">
      <div className="text-primary font-semibold text-xs sm:text-sm mb-2 tracking-wide uppercase">
        TECHNOLOGIES WE USE
      </div>
      <h2 className="font-headings font-bold text-2xl sm:text-4xl text-foreground">
        Modern Technologies for Robust Solutions
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {serviceData.technologies?.map((tech:any,index:number)=>(
        <TechBadge
          key={index}
          name={tech.name}
          logo={tech.logo}
        />
      ))}
    </div>
  </div>
</section>

{/* CTA SECTION */}
<section className="mx-4 sm:mx-10 lg:mx-16 my-8 sm:my-12 rounded-2xl overflow-hidden relative shadow-2xl">
  <div className="absolute inset-0">
    <img
      src="/assets/home/ctabg.png"
      alt="CTA Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-slate-900/80"></div>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-10 sm:py-14 relative z-10 gap-6 text-center sm:text-left">
    <div className="max-w-lg">
      <h2 className="font-headings font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
        {serviceData.ctaTitle}
      </h2>
      <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
        Let&apos;s turn your ideas into powerful digital solutions that help your business grow.
      </p>
    </div>

    <button 
      onClick={handleGetStartedClick}
      className="flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all cursor-pointer shadow-md active:scale-95 shrink-0"
    >
      <span>Get Started Today</span>
      <ArrowRight className="w-4 h-4"/>
    </button>
  </div>
</section>

{/* FOOTER */}
<Footer />
</div>
);
}









function IconFeature({
icon:Icon,
title,
subtitle
}:any){


return (

<div className="flex flex-col items-center gap-2">


<div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">


<Icon

className="w-7 h-7 text-accent"

strokeWidth={1.7}

/>


</div>





<span className="text-xs text-foreground font-medium text-center">


{title}

<br/>

{subtitle}


</span>


</div>

);


}









function CheckItem({
text
}:any){


return (

<div className="flex items-center gap-3">


<div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">


<Check

className="w-3 h-3 text-white"

strokeWidth={4}

/>


</div>





<span className="text-sm text-foreground">

{text}

</span>


</div>

);


}









function ProcessBox({
icon:Icon,
title,
text,
color
}:any){

const colors:any={
cyan:"bg-cyan-100 text-cyan-600",
blue:"bg-blue-100 text-blue-600",
purple:"bg-purple-100 text-purple-600"
};

return (
<div className="bg-white rounded-2xl p-3 shadow-md border border-blue-100">
<div className="flex items-start gap-3">
<div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors[color]}`}>
<Icon className="w-5 h-5"/>
</div>
<div>
<div className="font-semibold text-sm text-slate-800">{title}</div>
<div className="text-xs text-slate-600 leading-relaxed">{text}</div>
</div>
</div>
</div>
);
}

function PremiumProcessStep({
number,
icon:Icon,
color,
label,
desc,
isLast
}:any){
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
      {/* Left: number + connector line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '44px', flexShrink: 0 }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${color}33, ${color}11)`,
          border: `2px solid ${color}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: color, fontSize: '11px', fontWeight: 800, letterSpacing: '-0.5px',
          flexShrink: 0, position: 'relative', zIndex: 2
        }}>
          {number}
        </div>
        {!isLast && (
          <div style={{ width: '2px', flex: 1, minHeight: '18px', background: `linear-gradient(to bottom, ${color}44, transparent)`, margin: '2px 0' }} />
        )}
      </div>
      {/* Right: icon + content */}
      <div style={{
        flex: 1, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px',
        padding: '10px 14px', marginLeft: '12px', marginBottom: isLast ? '0' : '10px',
        display: 'flex', alignItems: 'center', gap: '12px',
        transition: 'background 0.2s'
      }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '10px', flexShrink: 0,
          background: `${color}22`, border: `1px solid ${color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Icon style={{ width: '16px', height: '16px', color: color }} strokeWidth={2} />
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{label}</div>
          <div style={{ fontSize: '11px', color: 'rgba(148,163,184,0.85)', marginTop: '2px', lineHeight: 1.4 }}>{desc}</div>
        </div>
      </div>
    </div>
  );
}









function FeatureCard({
icon:Icon,
title,
description,
iconColor,
iconBg
}:any){



return (

<div className="flex items-start gap-4 p-6 border border-border rounded-xl">


<div

className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"

style={{
backgroundColor:iconBg
}}

>


<Icon

className="w-7 h-7"

style={{
color:iconColor
}}

/>


</div>






<div>


<div className="font-semibold text-base text-foreground mb-1">

{title}

</div>





<div className="text-sm text-muted-foreground leading-relaxed">

{description}

</div>



</div>


</div>

);


}









function ProcessStep({
number,
icon:Icon,
title,
description,
hasLine
}:any){



return (

<div className="flex-1 flex flex-col items-center text-center relative">


{
hasLine && (

<div className="absolute top-6 left-[60%] right-0 border-t-2 border-dashed border-primary">

</div>

)

}





<div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center z-10">


<Icon

className="w-6 h-6 text-accent-foreground"

strokeWidth={1.8}

/>


</div>






<div className="text-xs font-bold text-primary mt-2">

{number}

</div>





<div className="text-sm font-semibold text-foreground">

{title}

</div>





<div className="text-xs text-muted-foreground">

{description}

</div>


</div>

);


}









function getTechIcon(name: string) {
  const n = name.toLowerCase();
  
  if (n.includes("react native")) {
    return { icon: Smartphone, bg: "bg-blue-50 text-[#00d8ff]" };
  }
  if (n.includes("react") || n.includes("next.js") || n.includes("nextjs") || n.includes("graphql") || n.includes("python") || n.includes("terraform")) {
    return { icon: Code, bg: "bg-blue-50 text-[#00d8ff]" };
  }
  if (n.includes("node") || n.includes("server")) {
    return { icon: Server, bg: "bg-emerald-50 text-[#10b981]" };
  }
  if (n.includes("laravel") || n.includes("docker") || n.includes("gitlab")) {
    return { icon: Layers, bg: "bg-red-50 text-[#ef4444]" };
  }
  if (n.includes(".net") || n.includes("dotnet") || n.includes("tensorflow") || n.includes("pytorch") || n.includes("cpu") || n.includes("kotlin")) {
    return { icon: Cpu, bg: "bg-purple-50 text-[#8b5cf6]" };
  }
  if (n.includes("postgresql") || n.includes("mongodb") || n.includes("mysql") || n.includes("database") || n.includes("sql")) {
    return { icon: Database, bg: "bg-blue-50 text-[#3b82f6]" };
  }
  if (n.includes("mobile") || n.includes("flutter") || n.includes("android")) {
    return { icon: Smartphone, bg: "bg-lime-50 text-[#84cc16]" };
  }
  if (n.includes("ios") || n.includes("apple") || n.includes("swift")) {
    return { icon: ShieldCheck, bg: "bg-slate-50 text-slate-700" };
  }
  if (n.includes("aws") || n.includes("azure") || n.includes("gcp") || n.includes("google cloud") || n.includes("cloud")) {
    return { icon: Globe, bg: "bg-amber-50 text-[#ff9900]" };
  }
  if (n.includes("kubernetes") || n.includes("setting")) {
    return { icon: Settings, bg: "bg-indigo-50 text-[#4f46e5]" };
  }
  if (n.includes("oauth") || n.includes("key")) {
    return { icon: Key, bg: "bg-yellow-50 text-[#ca8a04]" };
  }
  if (n.includes("cloudflare") || n.includes("security") || n.includes("ssl") || n.includes("tls") || n.includes("lock") || n.includes("kali")) {
    return { icon: Lock, bg: "bg-red-50 text-[#dc2626]" };
  }
  if (n.includes("wireshark") || n.includes("network")) {
    return { icon: Globe, bg: "bg-sky-50 text-[#0284c7]" };
  }
  if (n.includes("metasploit") || n.includes("terminal") || n.includes("hacker")) {
    return { icon: Terminal, bg: "bg-slate-900 text-[#10b981]" };
  }
  if (n.includes("openai") || n.includes("brain") || n.includes("hugging")) {
    return { icon: Zap, bg: "bg-indigo-50 text-[#8b5cf6]" };
  }
  if (n.includes("langchain") || n.includes("rabbitmq") || n.includes("gitmerge") || n.includes("kafka") || n.includes("apache kafka")) {
    return { icon: GitMerge, bg: "bg-green-50 text-[#15803d]" };
  }
  if (n.includes("tableau") || n.includes("chart") || n.includes("analytics")) {
    return { icon: TrendingUp, bg: "bg-pink-50 text-[#db2777]" };
  }
  if (n.includes("power bi") || n.includes("trending")) {
    return { icon: TrendingUp, bg: "bg-yellow-50 text-[#eab308]" };
  }
  if (n.includes("snowflake") || n.includes("spark") || n.includes("zap")) {
    return { icon: Zap, bg: "bg-cyan-50 text-[#06b6d4]" };
  }
  if (n.includes("webhooks") || n.includes("link")) {
    return { icon: Rocket, bg: "bg-emerald-50 text-[#10b981]" };
  }
  if (n.includes("jira") || n.includes("trello") || n.includes("briefcase")) {
    return { icon: Briefcase, bg: "bg-blue-50 text-[#2563eb]" };
  }
  if (n.includes("agile") || n.includes("scrum") || n.includes("refresh")) {
    return { icon: RefreshCw, bg: "bg-teal-50 text-[#0d9488]" };
  }
  if (n.includes("confluence") || n.includes("file")) {
    return { icon: FileText, bg: "bg-blue-50 text-[#3b82f6]" };
  }
  if (n.includes("slack") || n.includes("message")) {
    return { icon: MessageSquare, bg: "bg-purple-50 text-[#701a75]" };
  }
  
  return { icon: Code, bg: "bg-gray-50 text-gray-600" };
}

function renderTechIcon(name: string) {
  const n = name.toLowerCase();

  if (n === "react" || n === "react native") {
    return (
      <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10" fill="none">
        <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61dafb" strokeWidth="1.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61dafb" strokeWidth="1.2"/>
        <circle r="2" fill="#61dafb"/>
      </svg>
    );
  }
  if (n === "next.js" || n === "nextjs") {
    return (
      <svg viewBox="0 0 256 256" fill="none" className="w-10 h-10">
        <rect width="256" height="256" rx="50" fill="black"/>
        <path d="M188.8 200.4l-56.9-8.19V192.2h-15V75h1.25l54.4 78.1V75h1.5v125.4z" fill="white"/>
      </svg>
    );
  }
  if (n === "node.js" || n === "nodejs" || n.includes("node")) {
    return (
      <svg viewBox="0 0 256 284" className="w-10 h-10">
        <path d="M128 0L24.8 59.6v119.2L128 238l103.2-59.2V59.6L128 0z" fill="#339933"/>
        <path d="M128 29.8v178.4l75.6-43.4V73.2L128 29.8z" fill="#66cc33"/>
      </svg>
    );
  }
  if (n === "laravel") {
    return (
      <svg viewBox="0 0 256 256" fill="none" className="w-10 h-10">
        <rect width="256" height="256" rx="50" fill="#FF2D20"/>
        <path d="M128 40L40 90.8v101.6L128 243.2l88-50.8V90.8L128 40zm0 178.4L64 170.8V85.2L128 122l64-36.8v85.6l-64 47.6z" fill="white"/>
      </svg>
    );
  }
  if (n === ".net" || n === "dotnet") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="50" fill="#512BD4"/>
        <path d="M128 40C79.4 40 40 79.4 40 128s39.4 88 88 88 88-39.4 88-88S176.6 40 128 40zm36 100H92v-24h72v24z" fill="white"/>
      </svg>
    );
  }
  if (n === "postgresql") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="50" fill="#336791"/>
        <path d="M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm32 100h-24v24h-16v-24H96v-16h24V100h16v24h24v16z" fill="white"/>
      </svg>
    );
  }
  if (n === "mongodb") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="50" fill="#47A248"/>
        <path d="M128 40C79.4 40 40 79.4 40 128s39.4 88 88 88 88-39.4 88-88S176.6 40 128 40zm24 100H104v-24h48v24z" fill="white"/>
      </svg>
    );
  }
  if (n === "mysql") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10">
        <rect width="256" height="256" rx="50" fill="#00758F"/>
        <path d="M128 40C79.4 40 40 79.4 40 128s39.4 88 88 88 88-39.4 88-88S176.6 40 128 40zm16 100h-32v-16h32v16zm16-32H96V92h64v16z" fill="white"/>
      </svg>
    );
  }
  if (n === "flutter") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 317" fill="none" className="w-10 h-10">
        <path d="M156.8 0L0 156.8L48.6 205.4L254 0H156.8Z" fill="#54C5F8" />
        <path d="M157.1 145.9L84.2 218.8L132.8 267.4L205.7 194.5L157.1 145.9Z" fill="#29B6F6" />
        <path d="M84.2 218.8L156.8 291.4H254L132.8 170.2L84.2 218.8Z" fill="#01579B" />
      </svg>
    );
  }
  if (n === "swift") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" className="w-10 h-10">
        <path fill="#F05138" d="M188.8 191.5c-10.2 6.3-23.8 10.4-39.7 10.4-67.5 0-111.5-69.6-129.1-113.9 30.2 37.3 68.7 64.2 95.2 77.5C75.5 132.7 48 88.7 39.8 58.8c24.5 31.7 58.9 60.7 94.8 82.3C95.8 105.6 63.8 57.3 63.8 57.3c41.6 40.8 83.6 73.7 112.3 90.1 8.8-5.3 17.4-16.2 23.8-30.7 5.2 12.6 8.1 27.2 8.1 42.4 0 13.3-2.2 25.7-6.3 36.5 8.3 6.4 16.3 7.7 23.5 2.4-2.8 8.7-10.7 15.4-20.9 15.4-5.5 0-10.4-2-14.5-5.9z" />
      </svg>
    );
  }
  if (n === "kotlin") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none" className="w-10 h-10">
        <defs>
          <linearGradient id="kotlinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F52FF"/>
            <stop offset="50%" stopColor="#C811E2"/>
            <stop offset="100%" stopColor="#00A6FF"/>
          </linearGradient>
        </defs>
        <path d="M0 0H128L64 64L128 128H0V0Z" fill="url(#kotlinGradient)" />
      </svg>
    );
  }
  if (n === "ios") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" fill="none" className="w-10 h-10">
        <path fill="#000000" d="M788.6 763.4c-16.5 38.1-36 73.2-58.7 105.3-31 43.6-56.4 73.8-76.4 90.7-31 27.7-64.3 41.9-99.8 42.6-25.5 0-56.3-7.3-92.2-22.1-36-14.7-69.1-22.1-99.3-22.1-31.7 0-65.6 7.4-101.7 22.1-36.2 14.8-65.4 22.5-87.7 23.2-34 .7-68-13.8-101.9-43.5-21.7-18.4-48.3-49.8-79.9-94.4-33.9-47.5-61.7-102.6-83.5-165.4C-17.8 631.9-29 566.2-29 502.6c0-72.8 15.7-135.6 47.2-188.3 24.8-42.3 57.9-75.6 99.4-100 41.5-24.4 86.4-36.9 134.7-37.6 26.5 0 61.3 8.2 104.4 24.5 43 16.4 70.7 24.6 83 24.6 9.2 0 40.4-9.7 93.6-29.1 50.3-18.1 92.8-25.6 127.5-22.8 94.1 7.6 164.8 44.7 211.9 111.4-84.2 51-126 122.4-125.2 214.1.8 71.4 26.6 130.8 77.5 178 23.1 21.9 48.9 38.8 77.5 50.7-6.2 18-12.8 35.3-19.9 51.7zM554.3 0c0 56-20.4 108.3-61.1 156.9-49.1 57.7-108.6 91.1-173.2 85.9-.8-6.7-1.2-13.6-1.2-20.8 0-53.8 23.4-111.3 64.9-158.5 20.7-24 47-43.9 78.9-59.7C494.3 7.7 523.7.9 550.8 0c2.3 7.6 3.5 15.3 3.5 23z" />
      </svg>
    );
  }
  if (n === "android") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="w-10 h-10">
        <g fill="#3DDC84">
          <path d="M160 176C160 123 203 80 256 80C309 80 352 123 352 176V208H160V176Z"/>
          <rect x="176" y="48" width="8" height="48" rx="4" transform="rotate(-30 176 48)" />
          <rect x="328" y="44" width="8" height="48" rx="4" transform="rotate(30 328 44)" />
          <circle cx="220" cy="144" r="8" fill="#FFFFFF"/>
          <circle cx="292" cy="144" r="8" fill="#FFFFFF"/>
          <rect x="160" y="208" width="192" height="176" rx="28"/>
          <rect x="112" y="224" width="32" height="144" rx="16"/>
          <rect x="368" y="224" width="32" height="144" rx="16"/>
          <rect x="200" y="384" width="32" height="96" rx="16"/>
          <rect x="280" y="384" width="32" height="96" rx="16"/>
        </g>
      </svg>
    );
  }
  if (n === "aws") {
    return (
      <svg width="120" height="72" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-8">
        <text x="10" y="38" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#232F3E">aws</text>
        <path d="M18 48C38 62 76 62 98 46" stroke="#FF9900" stroke-width="5" stroke-linecap="round"/>
        <path d="M93 43L101 46L95 52" stroke="#FF9900" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
  if (n === "azure") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M58 10L20 92H48L70 45L88 92H112L76 10H58Z" fill="#0078D4"/>
        <path d="M48 92H112L78 45L60 80L48 92Z" fill="#50E6FF"/>
      </svg>
    );
  }
  if (n === "google cloud" || n === "gcp") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M91 54C88 37 74 25 57 25C42 25 29 34 23 47C11 49 4 59 4 70C4 82 14 92 27 92H89C104 92 116 80 116 66C116 60 113 55 108 51C103 48 97 48 91 54Z" fill="#4285F4"/>
        <path d="M27 92H89C102 92 112 83 115 71H70L56 92H27Z" fill="#34A853"/>
        <path d="M23 47C18 52 14 60 14 68C14 81 24 91 37 92H55L70 71H28C18 71 15 58 23 47Z" fill="#FBBC04"/>
        <path d="M57 25C43 25 31 33 24 46L39 59C42 51 49 46 57 46C64 46 70 49 75 54L91 54C88 37 74 25 57 25Z" fill="#EA4335"/>
      </svg>
    );
  }
  if (n === "docker") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M22 58H32V68H22V58ZM34 58H44V68H34V58ZM46 58H56V68H46V58ZM58 58H68V68H58V58ZM34 46H44V56H34V46ZM46 46H56V56H46V46ZM58 46H68V56H58V46ZM46 34H56V44H46V34Z" fill="#2496ED"/>
        <path d="M18 72C30 88 58 92 78 82C88 77 96 68 100 58C91 62 82 61 76 57C68 78 39 82 18 72Z" fill="#2496ED"/>
        <path d="M100 58C108 60 114 57 116 53C111 51 106 51 102 52L100 58Z" fill="#2496ED"/>
      </svg>
    );
  }
  if (n === "kubernetes") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M60 10L70 28L90 22L86 43L106 54L88 68L96 88L75 86L60 108L45 86L24 88L32 68L14 54L34 43L30 22L50 28L60 10Z" fill="#326CE5"/>
        <circle cx="60" cy="60" r="22" fill="white"/>
        <path d="M60 45L73 52V68L60 75L47 68V52L60 45Z" fill="#326CE5"/>
        <path d="M60 20V40M60 80V100M20 60H40M80 60H100" stroke="white" stroke-width="4" stroke-linecap="round"/>
      </svg>
    );
  }
  if (n === "terraform") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M20 25L52 43V78L20 60V25Z" fill="#7B42BC"/>
        <path d="M56 45L88 63V98L56 80V45Z" fill="#7B42BC"/>
        <path d="M56 10L88 28V58L56 40V10Z" fill="#7B42BC"/>
        <path d="M20 65L52 83V108L20 90V65Z" fill="#7B42BC"/>
      </svg>
    );
  }
  if (n === "oauth 2.0") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M60 10L100 25V55C100 82 82 100 60 110C38 100 20 82 20 55V25L60 10Z" fill="#2F80ED"/>
        <circle cx="60" cy="58" r="25" fill="white"/>
        <rect x="45" y="55" width="30" height="25" rx="5" fill="#2F80ED"/>
        <path d="M50 55V45C50 34 70 34 70 45V55" stroke="#2F80ED" stroke-width="6" stroke-linecap="round"/>
        <circle cx="60" cy="65" r="4" fill="white"/>
        <rect x="58" y="65" width="4" height="8" fill="white"/>
      </svg>
    );
  }
  if (n === "cloudflare") {
    return (
      <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-10">
        <path d="M38 78C32 78 27 74 27 68C27 61 33 56 40 56C43 43 55 34 69 34C82 34 93 42 97 53C106 53 114 60 114 69C114 74 110 78 105 78H38Z" fill="#F38020"/>
        <path d="M45 84H103C109 84 114 80 114 75C114 70 110 66 104 66H98C94 59 87 56 79 56C68 56 59 63 57 72H45C39 72 34 77 34 83C34 84 39 84 45 84Z" fill="#FAAD3F"/>
      </svg>
    );
  }
  if (n === "wireshark") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M60 10C42 28 30 52 30 76C30 96 44 108 60 110C76 108 90 96 90 76C90 52 78 28 60 10Z" fill="#1679C4"/>
        <path d="M22 70C40 60 80 60 98 70" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
        <path d="M28 82C45 73 75 73 92 82" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
        <circle cx="60" cy="45" r="6" fill="white"/>
        <circle cx="60" cy="45" r="3" fill="#1679C4"/>
      </svg>
    );
  }
  if (n === "metasploit") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M60 8L100 25V58C100 83 83 101 60 112C37 101 20 83 20 58V25L60 8Z" fill="#2D2D2D"/>
        <path d="M35 75V42L45 42L60 62L75 42H85V75H75V57L60 76L45 57V75H35Z" fill="#E34F26"/>
        <circle cx="60" cy="88" r="6" fill="#E34F26"/>
      </svg>
    );
  }
  if (n === "kali linux") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M60 10C38 18 22 40 25 65C28 92 55 108 78 96C96 87 103 68 96 52C91 41 80 34 68 34C78 49 75 67 60 74C48 80 37 70 38 57C39 42 49 32 60 10Z" fill="#557CFF"/>
        <circle cx="70" cy="47" r="5" fill="white"/>
        <circle cx="70" cy="47" r="2.5" fill="#111827"/>
        <path d="M78 96C92 98 104 90 108 80C99 84 91 82 84 78" fill="#557CFF"/>
      </svg>
    );
  }
  if (n === "ssl / tls") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M60 8L98 22V55C98 82 82 100 60 112C38 100 22 82 22 55V22L60 8Z" fill="#16A34A"/>
        <rect x="42" y="55" width="36" height="30" rx="6" fill="white"/>
        <path d="M50 55V45C50 30 70 30 70 45V55" stroke="white" stroke-width="7" stroke-linecap="round"/>
        <circle cx="60" cy="68" r="5" fill="#16A34A"/>
        <rect x="57.5" y="68" width="5" height="9" rx="2" fill="#16A34A"/>
      </svg>
    );
  }
  if (n === "python") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#3776AB"/>
        <path d="M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88S176.6 40 128 40zm-16 112H96v-16h16v16zm32-32h-16V96h16v24z" fill="#FFE873"/>
      </svg>
    );
  }
  if (n === "tensorflow") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#FF6F00"/>
        <path d="M128 40L50 85v86l78 45 78-45V85L128 40zm8 128h-16v-80h16v80z" fill="white"/>
      </svg>
    );
  }
  if (n === "pytorch") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#EE4C2C"/>
        <path d="M128 40L50 85v86l78 45 78-45V85L128 40zm8 128h-16v-80h16v80z" fill="white"/>
      </svg>
    );
  }
  if (n === "openai") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#10a37f"/>
        <path d="M168 128c0-22-18-40-40-40s-40 18-40 40 18 40 40 40 40-18 40-40z" fill="white"/>
      </svg>
    );
  }
  if (n === "langchain") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#15803d"/>
        <path d="M128 50v60H68V50h60zm60 60v60h-60v-60h60z" fill="white"/>
      </svg>
    );
  }
  if (n === "hugging face") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#FFD21E"/>
        <circle cx="100" cy="110" r="16" fill="black"/>
        <circle cx="156" cy="110" r="16" fill="black"/>
        <path d="M90 160c10 20 28 30 38 30s28-10 38-30H90z" fill="black"/>
      </svg>
    );
  }
  if (n === "tableau") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#E8762E"/>
        <path d="M128 40v176M40 128h176" stroke="white" strokeWidth="20" strokeLinecap="round"/>
      </svg>
    );
  }
  if (n === "power bi") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#F2C811"/>
        <path d="M70 180V120H100V180H70zm45 0V80h30v100h-30zm45 0V50h30v130h-30z" fill="black"/>
      </svg>
    );
  }
  if (n === "snowflake") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#29B5E8"/>
        <path d="M128 40v176M40 128h176M66 66l124 124M66 190L190 66" stroke="white" strokeWidth="16" strokeLinecap="round"/>
      </svg>
    );
  }
  if (n === "apache spark" || n === "spark") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#E25A28"/>
        <path d="M128 40L50 180h156L128 40z" fill="white"/>
      </svg>
    );
  }
  if (n === "apache kafka" || n === "kafka") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#231F20"/>
        <circle cx="128" cy="128" r="48" fill="white"/>
      </svg>
    );
  }
  if (n === "rabbitmq") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#FF6600"/>
        <path d="M128 50c-43 0-78 35-78 78s35 78 78 78 78-35 78-78-35-78-78-78zm0 120c-23 0-42-19-42-42s19-42 42-42 42 19 42 42-19 42-42 42z" fill="white"/>
      </svg>
    );
  }
  if (n === "graphql") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#E10098"/>
        <polygon points="128,40 210,92 210,196 128,248 46,196 46,92" stroke="white" strokeWidth="12" fill="none"/>
      </svg>
    );
  }
  if (n === "rest apis") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#00758F"/>
        <circle cx="128" cy="128" r="60" stroke="white" strokeWidth="12" fill="none"/>
        <path d="M68 128h120M128 68v120" stroke="white" strokeWidth="12"/>
      </svg>
    );
  }
  if (n === "mulesoft") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#00A2E1"/>
        <circle cx="128" cy="128" r="50" stroke="white" strokeWidth="12" fill="none"/>
      </svg>
    );
  }
  if (n === "webhooks") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#10B981"/>
        <path d="M90 128h76M110 98l46 30-46 30" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (n === "jira") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#0052CC"/>
        <path d="M70 70h116v116H70z" fill="white"/>
      </svg>
    );
  }
  if (n === "agile / scrum") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#0D9488"/>
        <path d="M128 60a68 68 0 1 1-48 20" stroke="white" strokeWidth="16" strokeLinecap="round" fill="none"/>
        <path d="M80 50v30h30" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (n === "confluence") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#0052CC"/>
        <path d="M80 60h96v136H80z" fill="white"/>
      </svg>
    );
  }
  if (n === "trello") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#0079BF"/>
        <rect x="70" y="70" width="40" height="116" rx="10" fill="white"/>
        <rect x="146" y="70" width="40" height="80" rx="10" fill="white"/>
      </svg>
    );
  }
  if (n === "slack") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#4A154B"/>
        <circle cx="100" cy="100" r="20" fill="#e01e5a"/>
        <circle cx="156" cy="100" r="20" fill="#36c5f0"/>
        <circle cx="100" cy="156" r="20" fill="#2eb67d"/>
        <circle cx="156" cy="156" r="20" fill="#ecb22e"/>
      </svg>
    );
  }
  if (n === "gitlab") {
    return (
      <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="50" fill="#FC6D26"/>
        <polygon points="128,40 210,196 46,196" fill="#E24329"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#2563eb]">
      <path d="M12 2L2 22h20L12 2zm0 3.75L18.75 18H5.25L12 5.75z" />
    </svg>
  );
}

function TechBadge({
name
}:any){
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center bg-white shadow-sm overflow-hidden p-2.5">
        {renderTechIcon(name)}
      </div>
      <span className="text-sm text-foreground font-medium text-center">
        {name}
      </span>
    </div>
  );
}