import {
  useParams,
  useNavigate
} from "react-router-dom";
import { getStartedWithWhatsApp } from "../utils/whatsapp";

import {
  ShieldCheck,
  Database,
  Workflow,
  Users,
  Lock,
  BarChart3,
  Check,
  ArrowRight,
  Code,
  Cpu,
  Layers
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";




export default function IndustryDetailPage(){


const {industry}=useParams<{industry:string}>();

const navigate=useNavigate();


const [activeSection,setActiveSection]=useState("industries");



const handleNavClick=(section:string)=>{

setActiveSection(section);

};



const handleGetStartedClick=()=>{
  getStartedWithWhatsApp();
};








const industryData:any={






healthcare:{


name:"Healthcare",

tagline:"Solutions",


heroImage:"/assets/id.png",

heroFit:"cover",

heroPosition:"center center",

heroScale:1,



description:
"We deliver secure, compliant, and scalable healthcare solutions that improve patient outcomes and streamline operations.",



overviewTitle:[

"Transforming Healthcare",

"Through Technology"

],



overviewText:
"From patient management systems to telemedicine platforms, we build digital solutions that empower healthcare providers to deliver better care, ensure compliance, and drive efficiency across the ecosystem.",



solutionsTitle:
"Healthcare Solutions We Offer"



},










fintech:{


name:"FinTech",

tagline:"Solutions",



heroImage:"/assets/industries/fintech.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We create secure financial technology solutions that improve transactions, automate processes, and enhance customer experiences.",



overviewTitle:[

"Transforming Finance",

"Through Innovation"

],



overviewText:
"We help financial organizations build secure platforms, improve operational efficiency, and deliver better digital experiences.",



solutionsTitle:
"FinTech Solutions We Offer"



},










"retail-e-commerce":{


name:"Retail & E-commerce",

tagline:"Solutions",



heroImage:"/assets/industries/retail.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We build digital commerce solutions that improve customer engagement, simplify operations, and increase business growth.",



overviewTitle:[

"Modern Retail",

"Through Technology"

],



overviewText:
"Our solutions help retailers deliver personalized shopping experiences and manage operations efficiently.",



solutionsTitle:
"Retail & E-commerce Solutions We Offer"



},










manufacturing:{


name:"Manufacturing",

tagline:"Solutions",



heroImage:"/assets/industries/manufacturing.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We develop smart manufacturing solutions that improve productivity, automation, and operational efficiency.",



overviewTitle:[

"Smart Manufacturing",

"Through Digital Solutions"

],



overviewText:
"We help manufacturers optimize workflows, connect systems, and improve production performance.",



solutionsTitle:
"Manufacturing Solutions We Offer"



},










education:{


name:"Education",

tagline:"Solutions",



heroImage:"/assets/industries/Education.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We create digital education platforms that improve learning experiences and simplify academic management.",



overviewTitle:[

"Transforming Education",

"Through Technology"

],



overviewText:
"Our education solutions help institutions deliver better learning experiences through modern technology.",



solutionsTitle:
"Education Solutions We Offer"



},










"logistics-supply-chain":{


name:"Logistics & Supply Chain",

tagline:"Solutions",



heroImage:"/assets/industries/Logistics & Supply chain.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We build logistics solutions that improve tracking, automation, and supply chain visibility.",



overviewTitle:[

"Connected Logistics",

"For Better Operations"

],



overviewText:
"We help logistics companies improve efficiency with smart digital platforms and integrated systems.",



solutionsTitle:
"Logistics & Supply Chain Solutions We Offer"



},










"real-estate":{


name:"Real Estate",

tagline:"Solutions",



heroImage:"/assets/industries/Real Estate.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We create real estate technology solutions that simplify property management and improve customer experiences.",



overviewTitle:[

"Digital Real Estate",

"Solutions"

],



overviewText:
"Our solutions help real estate businesses manage properties, customers, and operations more effectively.",



solutionsTitle:
"Real Estate Solutions We Offer"



},










"energy-utilities":{


name:"Energy & Utilities",

tagline:"Solutions",



heroImage:"/assets/industries/Energy & Utilites.png",

heroFit:"contain",

heroPosition:"right center",

heroScale:1.05,



description:
"We develop energy technology solutions that improve monitoring, efficiency, and sustainable operations.",



overviewTitle:[

"Smarter Energy",

"Through Technology"

],



overviewText:
"We help energy companies improve performance with modern digital solutions.",



solutionsTitle:
"Energy & Utilities Solutions We Offer"



}



};






const data=industryData[industry || ""];





useEffect(()=>{


if(!data){

navigate("/industries");

}


},[data,navigate]);





if(!data){

return null;

}

return (

<div className="bg-white w-full font-body">



<NavBar

activeSection={activeSection}

onNavClick={handleNavClick}

onGetStartedClick={handleGetStartedClick}

/>







{/* HERO SECTION */}


<section

className="relative overflow-hidden bg-slate-50/50 lg:bg-transparent min-h-0 lg:min-h-[480px] flex items-center"

>

{/* Desktop Background Image */}
<div className="hidden lg:block absolute inset-0 w-full h-full">

<img

src={data.heroImage}

alt={`${data.name} Banner`}

className="w-full h-full"

style={{

objectFit:data.heroFit,

objectPosition:data.heroPosition,

transform:`scale(${data.heroScale})`

}}

/>

</div>


{/* Desktop White Gradient Overlay */}
<div

className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"

style={{
width:"58%"
}}

/>


<div className="max-w-6xl mx-auto px-4 sm:px-10 py-8 lg:py-20 relative z-10 w-full">

<div className="max-w-xl">

{/* Mobile Image Container (Shows image fully on mobile without cropping) */}
<div className="block lg:hidden w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white mb-6">
  <img
    src={data.heroImage}
    alt={`${data.name} Banner`}
    className="w-full h-full object-cover sm:object-contain"
  />
</div>






<div className="text-primary font-semibold text-sm tracking-wide mb-4">


{data.name.toUpperCase()} SOLUTIONS


</div>







<h1 className="font-headings font-bold text-5xl text-foreground leading-tight mb-6">


{data.name}


<br/>


<span className="text-primary">


{data.tagline}


</span>



</h1>







<p className="text-base text-muted-foreground leading-relaxed max-w-md mb-10">


{data.description}


</p>








<div className="flex gap-8 flex-wrap">





<HeroFeature

icon={ShieldCheck}

title="Secure &"

subtitle="Reliable"

/>






<HeroFeature

icon={Layers}

title="Scalable"

subtitle="Solutions"

/>






<HeroFeature

icon={Cpu}

title="Modern"

subtitle="Technology"

/>






<HeroFeature

icon={Users}

title="Better"

subtitle="Experience"

/>





</div>







</div>





</div>





</section>













{/* OVERVIEW SECTION */}





<section className="bg-white py-16 px-16">





<div className="max-w-6xl mx-auto">





<div className="flex gap-14 items-start">







<div className="flex-1">






<div className="text-primary font-semibold text-sm mb-3 tracking-wide">


OVERVIEW


</div>









<h2 className="font-headings font-bold text-3xl text-foreground leading-tight mb-6">



{
data.overviewTitle.map((line:string,index:number)=>(

<div key={index}>

{line}

</div>

))

}



</h2>









<p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">


{data.overviewText}


</p>








<div className="flex flex-col gap-4">





<CheckItem

text="Industry-focused digital solutions"

/>






<CheckItem

text="Secure and scalable technology approach"

/>






<CheckItem

text="Improved operational efficiency"

/>






<CheckItem

text="Future-ready business systems"

/>






</div>







</div>














<div className="flex-1">





<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 min-h-[360px] flex items-center justify-center">





<div className="grid grid-cols-2 gap-5 w-full">






<InfoCard

icon={Database}

title="Data"

text="Secure management"

/>








<InfoCard

icon={Workflow}

title="Integration"

text="Connected systems"

/>








<InfoCard

icon={Lock}

title="Security"

text="Protected data"

/>








<InfoCard

icon={BarChart3}

title="Analytics"

text="Better insights"

/>







</div>







</div>







</div>









</div>







</div>






</section>

{/* CHALLENGES SECTION */}


<section className="bg-gray-50 py-16 px-16">


<div className="max-w-6xl mx-auto">



<div className="text-center mb-12">


<div className="text-primary font-semibold text-sm tracking-wide mb-3">

CHALLENGES WE SOLVE

</div>




<h2 className="font-headings font-bold text-3xl text-foreground">

Addressing Key {data.name} Challenges

</h2>



<div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>



</div>







<div className="grid grid-cols-4 gap-6">





<ChallengeCard

title="Data Management"

text="Managing complex information and improving visibility across systems."

icon={Database}

/>






<ChallengeCard

title="Operational Efficiency"

text="Reducing manual processes and improving business productivity."

icon={Workflow}

/>






<ChallengeCard

title="Customer Experience"

text="Creating better digital experiences for users and customers."

icon={Users}

/>






<ChallengeCard

title="Security & Compliance"

text="Protecting sensitive information with modern security solutions."

icon={Lock}

/>







</div>






</div>


</section>














{/* SOLUTIONS SECTION */}



<section className="bg-white py-16 px-16">



<div className="max-w-6xl mx-auto">





<div className="text-center mb-12">



<div className="text-primary font-semibold text-sm tracking-wide mb-3">

OUR SOLUTIONS

</div>






<h2 className="font-headings font-bold text-3xl text-foreground">

{data.solutionsTitle}

</h2>






<div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>



</div>









<div className="grid grid-cols-4 gap-6">





<SolutionCard

title={`${data.name} Platforms`}

text="Digital platforms designed to improve business operations and user experiences."

/>






<SolutionCard

title="Data Management"

text="Secure systems to organize, manage, and analyze important information."

/>







<SolutionCard

title="Mobile Solutions"

text="Modern mobile applications that improve accessibility and engagement."

/>







<SolutionCard

title="AI & Automation"

text="Smart technology solutions that improve efficiency and workflows."

/>








<SolutionCard

title="Cloud Infrastructure"

text="Reliable and scalable cloud solutions for modern businesses."

/>







<SolutionCard

title="System Integration"

text="Connected systems that create seamless operations."

/>







<SolutionCard

title="Analytics Solutions"

text="Actionable insights for smarter business decisions."

/>







<SolutionCard

title="Digital Transformation"

text="Technology strategies that support long-term growth."

/>






</div>






</div>



</section>












{/* SUCCESS STORIES SECTION */}



<section className="bg-gray-50 py-16 px-16">





<div className="max-w-6xl mx-auto">






<div className="text-center mb-12">





<div className="text-primary font-semibold text-sm tracking-wide mb-3">

SUCCESS STORIES

</div>






<h2 className="font-headings font-bold text-3xl text-foreground">

Our Impact in {data.name}

</h2>






<div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>






</div>









<div className="grid grid-cols-3 gap-6">





<StoryCard

title={`${data.name} Management Solution`}

text="Built a scalable digital solution that improved operations and delivered better results."

/>






<StoryCard

title={`${data.name} Digital Platform`}

text="Created a modern platform that improved customer experience and business efficiency."

/>







<StoryCard

title={`${data.name} Analytics System`}

text="Implemented smart analytics tools to support better decisions."

/>






</div>






</div>




</section>














{/* TECHNOLOGIES SECTION */}



<section className="bg-white py-16 px-16">





<div className="max-w-6xl mx-auto">






<div className="text-center mb-12">





<div className="text-primary font-semibold text-sm tracking-wide mb-3">

TECHNOLOGIES WE USE

</div>






<h2 className="font-headings font-bold text-3xl text-foreground">

Building With The Best Technologies

</h2>






<div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>






</div>









<div className="flex flex-wrap justify-center gap-8">


{
[
{
name:"React",
logo:"/assets/technologies/react.png"
},
{
name:"Node.js",
logo:"/assets/technologies/nodejs.png"
},
{
name:"Python",
logo:"/assets/technologies/python.png"
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
name:"PostgreSQL",
logo:"/assets/technologies/postgresql.png"
},
{
name:"TensorFlow",
logo:"/assets/technologies/tensorflow.png"
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









<div className="grid grid-cols-4 gap-8 mt-16">





<StatBox

number="250+"

label={`${data.name} Projects`}

/>






<StatBox

number="98%"

label="Client Satisfaction"

/>






<StatBox

number="25+"

label="Industry Experts"

/>






<StatBox

number="12+"

label="Years Experience"

/>






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




<div className="absolute inset-0 bg-slate-900/70"></div>



</div>








<div className="relative z-10 flex items-center justify-between px-16 py-14">





<div className="max-w-lg">





<div className="text-accent-green text-sm font-semibold tracking-wide mb-3">

LET'S BUILD BETTER {data.name.toUpperCase()} TOGETHER

</div>








<h2 className="font-headings font-bold text-3xl text-white leading-tight mb-4">


Ready to Transform

<br/>

{data.name} with Technology?


</h2>








<p className="text-white opacity-90">


Let's work together to build innovative solutions that improve outcomes and drive efficiency.


</p>






</div>







<div className="flex gap-4">





<button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-md text-sm font-medium">


Get a Free Consultation


<ArrowRight className="w-4 h-4"/>


</button>







<button className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-md text-sm font-medium">


Talk to an Expert


<ArrowRight className="w-4 h-4"/>


</button>






</div>






</div>





</section>








<Footer />



</div>


);


}













function HeroFeature({
icon:Icon,
title,
subtitle
}:any){


return (

<div className="flex flex-col items-center gap-2">


<div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">


<Icon

className="w-7 h-7 text-accent"

strokeWidth={1.8}

/>


</div>





<span className="text-xs font-medium text-foreground text-center">


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









function InfoCard({
icon:Icon,
title,
text
}:any){


return (

<div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">



<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">


<Icon className="w-5 h-5 text-primary"/>


</div>






<div className="font-semibold text-sm text-foreground">


{title}


</div>







<div className="text-xs text-muted-foreground mt-1">


{text}


</div>





</div>


);


}









function ChallengeCard({
title,
text,
icon:Icon
}:any){



return (

<div className="bg-white rounded-2xl p-6 border border-border">



<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">


<Icon className="w-6 h-6 text-primary"/>


</div>






<h3 className="font-semibold text-base text-foreground mb-2">


{title}


</h3>







<p className="text-sm text-muted-foreground leading-relaxed">


{text}


</p>





</div>


);


}









function SolutionCard({
title,
text
}:any){



return (

<div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition">



<h3 className="font-semibold text-base text-foreground mb-3">


{title}


</h3>






<p className="text-sm text-muted-foreground leading-relaxed mb-4">


{text}


</p>







<ArrowRight className="w-5 h-5 text-primary"/>



</div>


);


}









function StoryCard({
title,
text
}:any){



return (

<div className="bg-white rounded-2xl p-6 border border-border">



<h3 className="font-semibold text-lg text-foreground mb-3">


{title}


</h3>






<p className="text-sm text-muted-foreground leading-relaxed mb-5">


{text}


</p>







<button className="flex items-center gap-2 text-primary text-sm font-medium">


View Case Study


<ArrowRight className="w-4 h-4"/>


</button>




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






<span className="text-sm font-medium text-foreground text-center">


{name}


</span>




</div>


);


}









function StatBox({
number,
label
}:any){



return (

<div className="text-center">



<div className="font-headings font-bold text-3xl text-foreground">


{number}


</div>







<div className="text-sm text-muted-foreground mt-2">


{label}


</div>





</div>


);


}