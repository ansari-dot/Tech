import { 
  useParams,
  useNavigate
} from "react-router-dom";

import {
  Layers,
  ShieldCheck,
  Cpu,
  Clock,
  Settings,
  LayoutDashboard,
  Shield,
  TrendingUp,
  Users,
  Code,
  PenTool,
  FlaskConical,
  Rocket,
  Search,
  ArrowRight,
  Check
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



const handleGetStartedClick=()=>{};





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
"Ready To Build Your Custom Software Solution?"

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
"Ready To Build Your Mobile App?"

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
"Ready To Move Your Business To The Cloud?"

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
"Ready To Secure Your Digital Future?"

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
"Ready To Automate Your Business?"

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
"Ready To Turn Data Into Growth?"

},







"system-integration":{


name:"System Integration",

titleLines:[
"System",
"Integration"
],


description:
"We connect your systems, platforms, and applications to create seamless workflows and better collaboration.",


heroImage:"/assets/services/system-integration.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,


overviewTitle:[
"Connected Systems",
"For Better Operations"
],


featureTitle:
"Why Choose Our Integration Services?",


ctaTitle:
"Ready To Connect Your Systems?"

},







"it-consulting":{


name:"IT Consulting",

titleLines:[
"IT",
"Consulting"
],


description:
"We provide expert technology guidance and strategies to help businesses choose the right digital solutions.",


heroImage:"/assets/services/it-consulting.png",

heroFit:"contain",

heroPosition:"center center",

heroScale:1.05,


overviewTitle:[
"Strategic IT Guidance",
"For Business Growth"
],


featureTitle:
"Why Choose Our IT Consulting Services?",


ctaTitle:
"Ready To Build Your Technology Strategy?"

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





<section 
className="relative overflow-hidden"
style={{
minHeight:"450px"
}}
>


<div className="absolute inset-0 w-full h-full">


<img

src={serviceData.heroImage}

alt={serviceData.name}

className="w-full h-full"

style={{
objectFit:serviceData.heroFit,
objectPosition:serviceData.heroPosition,
transform:`scale(${serviceData.heroScale})`
}}

/>


</div>





<div 
className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent"
style={{
width:"55%"
}}
></div>






<div className="max-w-6xl mx-auto px-16 py-16 relative z-10">


<div className="max-w-md">



<div className="text-primary font-semibold text-sm mb-3 tracking-wide">

OUR SERVICES

</div>





<h1 className="font-headings font-bold text-5xl text-foreground leading-tight mb-6">


{
serviceData.titleLines.map((line:string,index:number)=>(

<div key={index}>

{line}

</div>

))
}


</h1>





<p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">

{serviceData.description}

</p>





<div className="flex gap-10">


<IconFeature icon={Layers} title="Scalable" subtitle="Solutions"/>

<IconFeature icon={ShieldCheck} title="Secure &" subtitle="Reliable"/>

<IconFeature icon={Cpu} title="Modern" subtitle="Technologies"/>

<IconFeature icon={Clock} title="On-time" subtitle="Delivery"/>


</div>


</div>


</div>



</section>

{/* OVERVIEW SECTION */}


<section className="bg-white py-16 px-16">


<div className="max-w-6xl mx-auto">


<div className="flex gap-12 items-start">



<div className="flex-1">


<div className="text-primary font-semibold text-sm mb-2 tracking-wide">

OVERVIEW

</div>





<h2 className="font-headings font-bold text-3xl text-foreground leading-tight mb-5">


{
serviceData.overviewTitle.map((line:string,index:number)=>(

<div key={index}>

{line}

</div>

))
}


</h2>






<p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">


Our {serviceData.name.toLowerCase()} services help businesses
solve complex challenges, improve efficiency, and build
future-ready digital solutions.


</p>






<div className="flex flex-col gap-3 mb-8">


<CheckItem text="Business-focused solutions designed around your goals"/>

<CheckItem text="Transparent communication and agile development"/>

<CheckItem text="Secure and scalable technology solutions"/>

<CheckItem text="Long-term support after project delivery"/>


</div>






<button className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md text-sm font-medium">


<ArrowRight className="w-4 h-4"/>

Discuss Your Project


</button>



</div>







<div className="flex-1">


<div className="relative w-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 min-h-[380px]">





<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">


<div className="bg-white rounded-2xl px-6 py-5 shadow-lg border border-blue-100">


<div className="font-headings font-bold text-sm text-center text-slate-800 max-w-[140px]">

{serviceData.name}

</div>


</div>


</div>






<div className="absolute top-6 left-1/2 -translate-x-1/2 w-48">


<ProcessBox

icon={Search}

color="cyan"

title="Planning"

text="Analyze goals and requirements."

/>


</div>






<div className="absolute top-16 right-3 w-48">


<ProcessBox

icon={PenTool}

color="blue"

title="Design"

text="Create user-focused solutions."

/>


</div>







<div className="absolute top-1/2 right-3 -translate-y-1/2 w-48">


<ProcessBox

icon={Code}

color="purple"

title="Development"

text="Build scalable systems."

/>


</div>








<div className="absolute bottom-10 right-3 w-48">


<ProcessBox

icon={FlaskConical}

color="blue"

title="Testing"

text="Ensure quality performance."

/>


</div>








<div className="absolute top-1/2 left-3 -translate-y-1/2 w-48">


<ProcessBox

icon={Rocket}

color="cyan"

title="Deployment"

text="Launch and maintain."

/>


</div>





</div>


</div>



</div>


</div>


</section>









{/* FEATURES SECTION */}


<section className="bg-white py-16 px-16">


<div className="max-w-6xl mx-auto">


<div className="text-center mb-12">


<div className="text-primary font-semibold text-sm mb-2 tracking-wide">

FEATURES & BENEFITS

</div>





<h2 className="font-headings font-bold text-3xl text-foreground">

{serviceData.featureTitle}

</h2>





<div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>


</div>






<div className="grid grid-cols-3 gap-6">


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


<section className="bg-gray-50 py-16 px-16">


<div className="max-w-6xl mx-auto">


<div className="text-center mb-12">


<div className="text-primary font-semibold text-sm mb-2 tracking-wide">

OUR PROCESS

</div>





<h2 className="font-headings font-bold text-3xl text-foreground">

Our Development Process

</h2>



<div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>


</div>







<div className="flex items-start justify-between gap-3">


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


<section className="bg-white py-16 px-16">


<div className="max-w-6xl mx-auto">


<div className="text-center mb-12">


<div className="text-primary font-semibold text-sm mb-2 tracking-wide">

TECHNOLOGIES WE USE

</div>





<h2 className="font-headings font-bold text-3xl text-foreground">

Modern Technologies for Robust Solutions

</h2>




<div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>


</div>






<div className="flex flex-wrap justify-center gap-8">

{
[
{
name:"React",
logo:"/assets/technologies/react.png"
},
{
name:"Next.js",
logo:"/assets/technologies/nextjs.png"
},
{
name:"Node.js",
logo:"/assets/technologies/nodejs.png"
},
{
name:"Laravel",
logo:"/assets/technologies/laravel.png"
},
{
name:"Python",
logo:"/assets/technologies/python.png"
},
{
name:".NET",
logo:"/assets/technologies/net.png"
},
{
name:"AWS",
logo:"/assets/technologies/aws.png"
},
{
name:"Docker",
logo:"/assets/technologies/docker.png"
},
{
name:"MongoDB",
logo:"/assets/technologies/mongodb.png"
},
{
name:"PostgreSQL",
logo:"/assets/technologies/postgresql.png"
}

].map((tech,index)=>(

<TechBadge

key={index}

name={tech.name}

logo={tech.logo}

/>

))

}

</div>


</div>


</section>

{/* CTA SECTION */}


<section className="mx-16 my-12 rounded-2xl overflow-hidden relative">


<div className="absolute inset-0">


<img

src="/assets/home/ctabg.png"

alt="CTA Background"

className="w-full h-full object-cover"

/>



<div className="absolute inset-0 bg-slate-900 opacity-70"></div>


</div>







<div className="flex items-center justify-between px-16 py-14 relative z-10">


<div className="max-w-lg">


<h2 className="font-headings font-bold text-3xl text-white leading-tight mb-4">


{serviceData.ctaTitle}


</h2>





<p className="text-white opacity-90 text-base">


Let's turn your ideas into powerful digital solutions that help your business grow.


</p>


</div>







<button className="flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-white hover:text-slate-900 transition">


Get Started Today


<ArrowRight className="w-4 h-4"/>


</button>



</div>


</section>






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


<div className="font-semibold text-sm text-slate-800">

{title}

</div>





<div className="text-xs text-slate-600 leading-relaxed">

{text}

</div>



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









function TechBadge({
name,
logo
}:any){



return (

<div className="flex flex-col items-center gap-3">


<div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center bg-white shadow-sm overflow-hidden">


<img

src={logo}

alt={name}

className="w-10 h-10 object-contain"

/>


</div>





<span className="text-sm text-foreground font-medium text-center">

{name}

</span>



</div>


);


}