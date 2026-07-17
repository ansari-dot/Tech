import { useParams, useNavigate } from "react-router-dom";
import { ShieldCheck, HeartPulse, Settings, TrendingUp, Database, GitBranch, Users as UsersIcon, Shield, ClipboardList, Video, BarChart2, FileText, Smartphone, Activity, Layout, Cpu, CheckCircle, Briefcase, Users, Globe, Award, ArrowRight, ShoppingCart, Factory, GraduationCap, Truck, Building2, Zap } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

// Industry data configuration
const industryData: Record<string, any> = {
  healthcare: {
    name: "Healthcare",
    tagline: "Solutions",
    description: "We deliver secure, compliant, and scalable healthcare solutions that improve patient outcomes and streamline operations.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    features: [
      { icon: ShieldCheck, title: "Secure & Compliant", description: "HIPAA-compliant solutions to protect sensitive data.", color: "#0a5fd6" },
      { icon: HeartPulse, title: "Better Patient Outcomes", description: "Technology that enhances care delivery and patient experience.", color: "#22c55e" },
      { icon: Settings, title: "Operational Efficiency", description: "Streamlined workflows to reduce costs and improve productivity.", color: "#0a5fd6" },
      { icon: TrendingUp, title: "Scalable Solutions", description: "Future-ready systems that grow with your organization.", color: "#0a5fd6" }
    ],
    overviewTitle: "Transforming Healthcare",
    overviewHighlight: "Technology",
    overviewText: "From patient management systems to telemedicine platforms, we build digital solutions that empower healthcare providers to deliver better care, ensure compliance, and drive efficiency across the ecosystem.",
    checkItems: [
      { text: "Patient-Centric Solutions", subtext: "Improving patient engagement and outcomes with innovative digital tools." },
      { text: "Data Security & Compliance", subtext: "Ensuring HIPAA compliance and robust data protection." },
      { text: "Seamless Integration", subtext: "Integrating with existing systems for unified and efficient operations." },
      { text: "Scalable & Future-Ready", subtext: "Building solutions that adapt to the evolving healthcare landscape." }
    ],
    challenges: [
      { icon: Database, title: "Data Silos", description: "Fragmented data across systems hinders visibility and decision-making.", bgColor: "#fff7ed", iconColor: "#f97316" },
      { icon: GitBranch, title: "Operational Inefficiencies", description: "Manual processes and legacy systems slow down operations and increase costs.", bgColor: "#f5f3ff", iconColor: "#a855f7" },
      { icon: UsersIcon, title: "Patient Engagement", description: "Lack of engagement tools leads to poor communication and outcomes.", bgColor: "#dbeafe", iconColor: "#3b82f6" },
      { icon: Shield, title: "Compliance & Security", description: "Ensuring regulatory compliance while protecting sensitive patient data.", bgColor: "#d1fae5", iconColor: "#10b981" }
    ],
    solutions: [
      { icon: ClipboardList, title: "Patient Management Systems", description: "Streamline patient registration, appointments, and records management.", iconColor: "#6366f1" },
      { icon: Video, title: "Telemedicine Solutions", description: "Enable remote consultations and virtual care with secure and reliable platforms.", iconColor: "#6366f1" },
      { icon: BarChart2, title: "Health Data & Analytics", description: "Leverage data insights to improve clinical decisions and operational efficiency.", iconColor: "#ec4899" },
      { icon: FileText, title: "EHR/EMR Integration", description: "Seamlessly integrate with Electronic Health Record systems.", iconColor: "#06b6d4" },
      { icon: Smartphone, title: "Mobile Health Apps", description: "Engage patients and improve care with mobile-first healthcare applications.", iconColor: "#6366f1" },
      { icon: Activity, title: "Remote Patient Monitoring", description: "Monitor patient health in real-time and enable proactive care.", iconColor: "#10b981" },
      { icon: Layout, title: "Healthcare Portals", description: "Build secure patient and provider portals for better communication and access.", iconColor: "#8b5cf6" },
      { icon: Cpu, title: "AI-Powered Diagnostics", description: "Use AI and ML to assist in accurate diagnostics and personalized treatment.", iconColor: "#06b6d4" }
    ]
  },
  fintech: {
    name: "Fintech",
    tagline: "Solutions",
    description: "Powering financial services with robust, secure, and intelligent solutions that enhance trust and efficiency.",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    features: [
      { icon: Shield, title: "Bank-Grade Security", description: "Multi-layered security protocols to protect financial data.", color: "#0a5fd6" },
      { icon: TrendingUp, title: "Real-Time Processing", description: "Fast and reliable transaction processing systems.", color: "#22c55e" },
      { icon: Database, title: "Data Analytics", description: "Advanced analytics for better financial decision-making.", color: "#0a5fd6" },
      { icon: ShieldCheck, title: "Regulatory Compliance", description: "Solutions that meet financial industry regulations.", color: "#0a5fd6" }
    ],
    overviewTitle: "Transforming Financial",
    overviewHighlight: "Services",
    overviewText: "From digital banking to payment gateways, we build secure and scalable fintech solutions that drive innovation and enhance customer trust.",
    checkItems: [
      { text: "Secure Payment Solutions", subtext: "Building trusted payment systems with advanced security features." },
      { text: "Digital Banking Platforms", subtext: "Modern banking experiences for web and mobile." },
      { text: "Risk Management Tools", subtext: "AI-powered risk assessment and fraud detection." },
      { text: "Regulatory Compliance", subtext: "Solutions that adhere to financial regulations and standards." }
    ],
    challenges: [
      { icon: Shield, title: "Security Threats", description: "Protecting against cyber attacks and fraud in financial systems.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Database, title: "Legacy Systems", description: "Modernizing outdated infrastructure while maintaining operations.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: Users, title: "Customer Trust", description: "Building and maintaining trust in digital financial services.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: GitBranch, title: "Regulatory Changes", description: "Adapting to evolving financial regulations and compliance requirements.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: Smartphone, title: "Digital Banking Apps", description: "Modern mobile and web banking solutions for customers.", iconColor: "#6366f1" },
      { icon: Shield, title: "Payment Gateways", description: "Secure and fast payment processing systems.", iconColor: "#10b981" },
      { icon: BarChart2, title: "Trading Platforms", description: "Real-time trading and investment management systems.", iconColor: "#ec4899" },
      { icon: Database, title: "Core Banking Systems", description: "Robust backend systems for banking operations.", iconColor: "#06b6d4" },
      { icon: Activity, title: "Fraud Detection", description: "AI-powered fraud detection and prevention systems.", iconColor: "#f59e0b" },
      { icon: FileText, title: "Loan Management", description: "End-to-end loan processing and management solutions.", iconColor: "#8b5cf6" },
      { icon: Cpu, title: "Blockchain Solutions", description: "Decentralized finance and blockchain-based applications.", iconColor: "#6366f1" },
      { icon: Layout, title: "Wealth Management", description: "Portfolio management and investment advisory platforms.", iconColor: "#06b6d4" }
    ]
  },
  "retail-e-commerce": {
    name: "Retail & E-commerce",
    tagline: "Solutions",
    description: "Delivering seamless digital experiences, smart inventory management, and data-driven retail solutions.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    features: [
      { icon: ShoppingCart, title: "Seamless Shopping", description: "Intuitive e-commerce experiences that drive conversions.", color: "#0a5fd6" },
      { icon: Database, title: "Inventory Management", description: "Real-time inventory tracking and management systems.", color: "#22c55e" },
      { icon: TrendingUp, title: "Sales Analytics", description: "Data-driven insights to optimize sales and marketing.", color: "#0a5fd6" },
      { icon: Users, title: "Customer Engagement", description: "Personalized experiences that increase customer loyalty.", color: "#0a5fd6" }
    ],
    overviewTitle: "Revolutionizing Retail",
    overviewHighlight: "Experiences",
    overviewText: "From online stores to omnichannel platforms, we create retail solutions that enhance customer experience, streamline operations, and drive growth.",
    checkItems: [
      { text: "E-commerce Platforms", subtext: "Building scalable online stores with seamless checkout experiences." },
      { text: "Inventory & Supply Chain", subtext: "Smart systems for inventory management and logistics." },
      { text: "Customer Personalization", subtext: "AI-driven recommendations and personalized shopping experiences." },
      { text: "Omnichannel Solutions", subtext: "Unified experiences across online and offline channels." }
    ],
    challenges: [
      { icon: ShoppingCart, title: "Cart Abandonment", description: "High cart abandonment rates reduce conversion and revenue.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Database, title: "Inventory Issues", description: "Poor inventory management leads to stockouts and overstock.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: Users, title: "Customer Retention", description: "Difficulty in retaining customers and building loyalty.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: TrendingUp, title: "Competition", description: "Standing out in a crowded and competitive market.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: ShoppingCart, title: "E-commerce Platforms", description: "Custom online stores with seamless shopping experiences.", iconColor: "#6366f1" },
      { icon: Smartphone, title: "Mobile Commerce", description: "Native mobile apps for iOS and Android.", iconColor: "#8b5cf6" },
      { icon: Database, title: "Inventory Management", description: "Real-time inventory tracking and warehouse management.", iconColor: "#06b6d4" },
      { icon: Users, title: "CRM Systems", description: "Customer relationship management and loyalty programs.", iconColor: "#ec4899" },
      { icon: BarChart2, title: "Analytics & Reporting", description: "Sales analytics and business intelligence dashboards.", iconColor: "#f59e0b" },
      { icon: Layout, title: "POS Systems", description: "Modern point-of-sale systems for retail stores.", iconColor: "#10b981" },
      { icon: Cpu, title: "AI Recommendations", description: "Personalized product recommendations using AI.", iconColor: "#6366f1" },
      { icon: Activity, title: "Supply Chain Solutions", description: "End-to-end supply chain management systems.", iconColor: "#06b6d4" }
    ]
  },
  manufacturing: {
    name: "Manufacturing",
    tagline: "Solutions",
    description: "Optimizing production, supply chain, and operations with custom software built for manufacturing excellence.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    features: [
      { icon: Factory, title: "Production Optimization", description: "Systems that improve efficiency and reduce waste.", color: "#0a5fd6" },
      { icon: Activity, title: "Real-Time Monitoring", description: "IoT-enabled monitoring of equipment and processes.", color: "#22c55e" },
      { icon: Database, title: "Supply Chain", description: "End-to-end visibility across the supply chain.", color: "#0a5fd6" },
      { icon: TrendingUp, title: "Quality Control", description: "Automated quality assurance and defect detection.", color: "#0a5fd6" }
    ],
    overviewTitle: "Modernizing Manufacturing",
    overviewHighlight: "Operations",
    overviewText: "From smart factories to predictive maintenance, we deliver manufacturing solutions that increase productivity, reduce costs, and improve quality.",
    checkItems: [
      { text: "Smart Manufacturing", subtext: "IoT and automation for intelligent production systems." },
      { text: "Predictive Maintenance", subtext: "AI-powered systems to predict and prevent equipment failures." },
      { text: "Supply Chain Visibility", subtext: "Real-time tracking and optimization of supply chain operations." },
      { text: "Quality Assurance", subtext: "Automated inspection and quality control systems." }
    ],
    challenges: [
      { icon: Settings, title: "Equipment Downtime", description: "Unplanned downtime reduces productivity and increases costs.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Database, title: "Data Silos", description: "Disconnected systems prevent visibility and decision-making.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: Activity, title: "Quality Issues", description: "Defects and quality problems impact customer satisfaction.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: TrendingUp, title: "Supply Chain", description: "Supply chain disruptions affect production schedules.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: Factory, title: "MES Systems", description: "Manufacturing execution systems for production management.", iconColor: "#6366f1" },
      { icon: Activity, title: "IoT Monitoring", description: "Real-time equipment and process monitoring.", iconColor: "#10b981" },
      { icon: Cpu, title: "Predictive Maintenance", description: "AI-powered maintenance prediction and scheduling.", iconColor: "#ec4899" },
      { icon: Database, title: "ERP Integration", description: "Seamless integration with enterprise resource planning systems.", iconColor: "#06b6d4" },
      { icon: BarChart2, title: "Production Analytics", description: "Real-time dashboards and production insights.", iconColor: "#f59e0b" },
      { icon: Shield, title: "Quality Management", description: "Automated quality control and compliance tracking.", iconColor: "#8b5cf6" },
      { icon: Layout, title: "Supply Chain", description: "Supply chain visibility and optimization platforms.", iconColor: "#6366f1" },
      { icon: Smartphone, title: "Mobile Solutions", description: "Mobile apps for field workers and managers.", iconColor: "#06b6d4" }
    ]
  },
  education: {
    name: "Education",
    tagline: "Solutions",
    description: "Enabling learning with innovative EdTech solutions that engage students and empower institutions.",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    features: [
      { icon: GraduationCap, title: "Interactive Learning", description: "Engaging digital learning experiences for students.", color: "#0a5fd6" },
      { icon: Users, title: "Collaboration Tools", description: "Platforms that connect students and teachers.", color: "#22c55e" },
      { icon: BarChart2, title: "Learning Analytics", description: "Data insights to improve educational outcomes.", color: "#0a5fd6" },
      { icon: Smartphone, title: "Mobile Learning", description: "Learn anywhere, anytime with mobile apps.", color: "#0a5fd6" }
    ],
    overviewTitle: "Transforming Education",
    overviewHighlight: "Technology",
    overviewText: "From learning management systems to virtual classrooms, we build EdTech solutions that enhance learning experiences and educational outcomes.",
    checkItems: [
      { text: "Learning Management", subtext: "Comprehensive LMS platforms for course delivery and management." },
      { text: "Virtual Classrooms", subtext: "Interactive online learning environments with collaboration tools." },
      { text: "Student Analytics", subtext: "Track progress and identify areas for improvement." },
      { text: "Mobile Learning", subtext: "Access educational content on any device, anywhere." }
    ],
    challenges: [
      { icon: Users, title: "Student Engagement", description: "Keeping students engaged in digital learning environments.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Layout, title: "Access & Equity", description: "Ensuring all students have access to quality education.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: BarChart2, title: "Learning Outcomes", description: "Measuring and improving educational effectiveness.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: Database, title: "Legacy Systems", description: "Outdated systems limit functionality and user experience.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: GraduationCap, title: "Learning Management", description: "Comprehensive LMS platforms for educational institutions.", iconColor: "#6366f1" },
      { icon: Video, title: "Virtual Classrooms", description: "Interactive online learning and collaboration tools.", iconColor: "#8b5cf6" },
      { icon: Smartphone, title: "Mobile Learning Apps", description: "Educational apps for iOS and Android devices.", iconColor: "#ec4899" },
      { icon: BarChart2, title: "Student Analytics", description: "Track progress and measure learning outcomes.", iconColor: "#06b6d4" },
      { icon: FileText, title: "Assessment Tools", description: "Online testing and automated grading systems.", iconColor: "#10b981" },
      { icon: Users, title: "Parent Portals", description: "Communication platforms for parents and schools.", iconColor: "#f59e0b" },
      { icon: Layout, title: "Content Management", description: "Create and manage educational content easily.", iconColor: "#6366f1" },
      { icon: Cpu, title: "AI Tutoring", description: "Personalized learning with AI-powered tutoring.", iconColor: "#06b6d4" }
    ]
  },
  "logistics-supply-chain": {
    name: "Logistics & Supply Chain",
    tagline: "Solutions",
    description: "Building intelligent systems that improve visibility, reduce costs, and ensure on-time deliveries.",
    heroImage: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&auto=format&fit=crop",
    features: [
      { icon: Truck, title: "Fleet Management", description: "Real-time tracking and management of vehicles.", color: "#0a5fd6" },
      { icon: Globe, title: "Global Visibility", description: "End-to-end visibility across the supply chain.", color: "#22c55e" },
      { icon: TrendingUp, title: "Route Optimization", description: "AI-powered route planning to reduce costs.", color: "#0a5fd6" },
      { icon: Database, title: "Warehouse Systems", description: "Modern warehouse management solutions.", color: "#0a5fd6" }
    ],
    overviewTitle: "Optimizing Logistics",
    overviewHighlight: "Operations",
    overviewText: "From fleet management to warehouse systems, we create logistics solutions that improve efficiency, reduce costs, and enhance delivery performance.",
    checkItems: [
      { text: "Fleet & Transportation", subtext: "Real-time tracking and optimization of fleet operations." },
      { text: "Warehouse Management", subtext: "Efficient inventory and warehouse operations management." },
      { text: "Supply Chain Visibility", subtext: "End-to-end visibility and tracking across the supply chain." },
      { text: "Route Optimization", subtext: "AI-powered route planning for cost and time savings." }
    ],
    challenges: [
      { icon: Truck, title: "Delivery Delays", description: "Late deliveries impact customer satisfaction and costs.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Database, title: "Inventory Issues", description: "Poor inventory management leads to stockouts and overstock.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: Activity, title: "Visibility Gaps", description: "Lack of real-time visibility across the supply chain.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: TrendingUp, title: "Cost Management", description: "Rising logistics costs reduce profit margins.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: Truck, title: "Fleet Management", description: "Real-time vehicle tracking and fleet optimization.", iconColor: "#6366f1" },
      { icon: Layout, title: "Warehouse Management", description: "WMS systems for efficient warehouse operations.", iconColor: "#8b5cf6" },
      { icon: Globe, title: "Supply Chain Platform", description: "End-to-end supply chain visibility and management.", iconColor: "#06b6d4" },
      { icon: Smartphone, title: "Driver Apps", description: "Mobile apps for drivers and delivery personnel.", iconColor: "#ec4899" },
      { icon: BarChart2, title: "Analytics & Reporting", description: "Logistics analytics and performance dashboards.", iconColor: "#f59e0b" },
      { icon: Cpu, title: "Route Optimization", description: "AI-powered route planning and optimization.", iconColor: "#10b981" },
      { icon: Activity, title: "Shipment Tracking", description: "Real-time tracking for shipments and packages.", iconColor: "#6366f1" },
      { icon: Database, title: "Inventory Management", description: "Multi-location inventory tracking and management.", iconColor: "#06b6d4" }
    ]
  },
  "real-estate": {
    name: "Real Estate",
    tagline: "Solutions",
    description: "Digitally transforming property management, sales, and customer experiences in the real estate sector.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    features: [
      { icon: Building2, title: "Property Management", description: "Comprehensive systems for property and tenant management.", color: "#0a5fd6" },
      { icon: Smartphone, title: "Virtual Tours", description: "3D virtual tours and property showcasing.", color: "#22c55e" },
      { icon: Users, title: "Tenant Portals", description: "Self-service portals for tenants and residents.", color: "#0a5fd6" },
      { icon: BarChart2, title: "Market Analytics", description: "Real-time market data and property analytics.", color: "#0a5fd6" }
    ],
    overviewTitle: "Modernizing Real Estate",
    overviewHighlight: "Management",
    overviewText: "From property listings to tenant management, we build real estate solutions that streamline operations, enhance customer experience, and drive sales.",
    checkItems: [
      { text: "Property Management", subtext: "Complete systems for managing properties and tenants." },
      { text: "Digital Marketing", subtext: "Online listings, virtual tours, and marketing automation." },
      { text: "Tenant Experience", subtext: "Self-service portals and mobile apps for tenants." },
      { text: "Analytics & Insights", subtext: "Market data and property performance analytics." }
    ],
    challenges: [
      { icon: Building2, title: "Property Visibility", description: "Limited online presence reduces property visibility.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Users, title: "Tenant Management", description: "Manual processes slow down tenant operations.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: FileText, title: "Documentation", description: "Paper-based processes are inefficient and error-prone.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: BarChart2, title: "Market Insights", description: "Lack of data-driven insights for decision-making.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: Building2, title: "Property Management", description: "Complete property and tenant management systems.", iconColor: "#6366f1" },
      { icon: Globe, title: "Listing Platforms", description: "Online property listings and search platforms.", iconColor: "#8b5cf6" },
      { icon: Smartphone, title: "Mobile Apps", description: "Apps for buyers, tenants, and property managers.", iconColor: "#ec4899" },
      { icon: Layout, title: "Virtual Tours", description: "3D virtual tours and property showcasing.", iconColor: "#06b6d4" },
      { icon: Users, title: "Tenant Portals", description: "Self-service portals for rent, maintenance, and communication.", iconColor: "#10b981" },
      { icon: FileText, title: "Document Management", description: "Digital contracts, leases, and document storage.", iconColor: "#f59e0b" },
      { icon: BarChart2, title: "Analytics Platform", description: "Market insights and property performance analytics.", iconColor: "#6366f1" },
      { icon: Cpu, title: "AI Property Matching", description: "Smart property recommendations for buyers and renters.", iconColor: "#06b6d4" }
    ]
  },
  "energy-utilities": {
    name: "Energy & Utilities",
    tagline: "Solutions",
    description: "Creating smart, reliable, and sustainable solutions for energy management and utility operations.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    features: [
      { icon: Zap, title: "Smart Grid", description: "Intelligent grid management and monitoring systems.", color: "#0a5fd6" },
      { icon: Activity, title: "Real-Time Monitoring", description: "Monitor energy consumption and distribution in real-time.", color: "#22c55e" },
      { icon: BarChart2, title: "Energy Analytics", description: "Data insights for optimization and efficiency.", color: "#0a5fd6" },
      { icon: Shield, title: "Grid Security", description: "Secure systems to protect critical infrastructure.", color: "#0a5fd6" }
    ],
    overviewTitle: "Powering the Future",
    overviewHighlight: "Energy",
    overviewText: "From smart grids to renewable energy management, we deliver energy solutions that improve efficiency, reliability, and sustainability.",
    checkItems: [
      { text: "Smart Grid Systems", subtext: "Intelligent systems for grid management and optimization." },
      { text: "Energy Monitoring", subtext: "Real-time monitoring and analytics for energy consumption." },
      { text: "Renewable Integration", subtext: "Systems to manage and integrate renewable energy sources." },
      { text: "Customer Portals", subtext: "Self-service portals for billing and usage tracking." }
    ],
    challenges: [
      { icon: Zap, title: "Grid Reliability", description: "Maintaining stable and reliable energy distribution.", bgColor: "#ffedd5", iconColor: "#f97316" },
      { icon: Activity, title: "Energy Waste", description: "Inefficient systems lead to energy waste and higher costs.", bgColor: "#ede9fe", iconColor: "#8b5cf6" },
      { icon: Database, title: "Legacy Infrastructure", description: "Outdated systems limit efficiency and scalability.", bgColor: "#dbeafe", iconColor: "#0a5fd6" },
      { icon: Shield, title: "Cybersecurity", description: "Protecting critical energy infrastructure from threats.", bgColor: "#f0fdfa", iconColor: "#0d9488" }
    ],
    solutions: [
      { icon: Zap, title: "Smart Grid Systems", description: "Intelligent grid management and optimization platforms.", iconColor: "#6366f1" },
      { icon: Activity, title: "Energy Monitoring", description: "Real-time energy consumption monitoring and analytics.", iconColor: "#10b981" },
      { icon: Layout, title: "Customer Portals", description: "Self-service portals for billing and usage information.", iconColor: "#8b5cf6" },
      { icon: Smartphone, title: "Mobile Apps", description: "Mobile apps for customers and field technicians.", iconColor: "#ec4899" },
      { icon: BarChart2, title: "Analytics Platform", description: "Energy data analytics and reporting dashboards.", iconColor: "#f59e0b" },
      { icon: Cpu, title: "Predictive Maintenance", description: "AI-powered equipment maintenance prediction.", iconColor: "#06b6d4" },
      { icon: Database, title: "Asset Management", description: "Track and manage energy assets and infrastructure.", iconColor: "#6366f1" },
      { icon: Globe, title: "Renewable Integration", description: "Systems for solar, wind, and renewable energy management.", iconColor: "#10b981" }
    ]
  }
};

export default function IndustryDetailPage() {
  const { industry } = useParams<{ industry: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("industries");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const handleGetStartedClick = () => {
    // Handle get started
  };

  // Get industry data
  const data = industry ? industryData[industry] : null;
  
  // Handle invalid industry in useEffect
  useEffect(() => {
    if (!data) {
      navigate("/industries");
    }
  }, [data, navigate]);

  // Return null while redirecting
  if (!data) {
    return null;
  }

  return (
    <div className="bg-white w-full font-body">
      {/* NavBar */}
      <NavBar 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStartedClick={handleGetStartedClick}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: '500px' }}>
        {/* Background Banner Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/id.png"
            alt={`${data.name} Banner`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* White Gradient Overlay for Text Area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent" style={{ width: '55%' }}></div>

        <div className="max-w-6xl mx-auto px-8 py-16 flex items-center gap-16 relative">
          <div className="flex-1 min-w-0 z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
              <span className="text-foreground opacity-50">Home</span>
              <span className="text-muted-foreground">›</span>
              <span className="text-muted-foreground">Industries</span>
              <span className="text-muted-foreground">›</span>
              <span className="text-primary">{data.name}</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-accent-green"></span>
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                {data.name.toUpperCase()} SOLUTIONS
              </span>
            </div>
            
            <h1 className="font-headings font-bold text-5xl text-foreground leading-tight mb-1">
              {data.name}
            </h1>
            <h1 className="font-headings font-bold text-5xl text-primary leading-tight mb-5">
              {data.tagline}
            </h1>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              {data.description}
            </p>
            
            <div className="flex items-center gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors">
                <span>Get a Free Consultation</span>
                <span>→</span>
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors">
                <span>View Case Studies</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right side - Banner image visible through gradient */}
          <div className="flex-1 z-10"></div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="grid grid-cols-4 gap-8">
            {data.features.map((feature: any, idx: number) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8 flex gap-16 items-start">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-accent-green"></span>
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                OVERVIEW
              </span>
            </div>
            <h2 className="font-headings font-bold text-4xl text-foreground leading-tight mb-4">
              {data.overviewTitle}<br />
              Through <span className="text-primary">{data.overviewHighlight}</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {data.overviewText}
            </p>
          </div>
          
          <div className="flex-1 min-w-0 flex flex-col gap-5 pt-8">
            {data.checkItems.map((item: any, idx: number) => (
              <CheckItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                CHALLENGES WE SOLVE
              </span>
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              Addressing Key {data.name} Challenges
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {data.challenges.map((challenge: any, idx: number) => (
              <ChallengeCard key={idx} {...challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                OUR SOLUTIONS
              </span>
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              {data.name} Solutions We Offer
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {data.solutions.map((solution: any, idx: number) => (
              <SolutionCard key={idx} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                SUCCESS STORIES
              </span>
            </div>
            <h2 className="font-headings font-bold text-3xl text-foreground">
              Our Impact in {data.name}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop"
              title="Patient Management System"
              description="We built a comprehensive patient management system that improved patient data accessibility and reduced administrative workload by 40%."
            />
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop"
              title="Telemedicine Platform"
              description="A secure telemedicine platform that enabled healthcare providers to deliver remote care to 10k+ patients seamlessly."
            />
            <CaseStudyCard 
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop"
              title="Health Analytics Solution"
              description="Implemented a data analytics solution that improved clinical decision-making and reduced readmission rates by 25%."
            />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-12">
            {/* Left side - Text */}
            <div className="flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                  TECHNOLOGIES WE USE
                </span>
              </div>
              <h3 className="font-headings font-bold text-3xl text-white leading-snug">
                Building with the Best Technologies
              </h3>
            </div>
            
            {/* Right side - Tech badges */}
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="text-4xl text-cyan-400">⚛️</div>
                <span className="text-xs text-slate-700 font-medium">React</span>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="text-4xl text-green-600">●</div>
                <span className="text-xs text-slate-700 font-medium">Node.js</span>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                </div>
                <span className="text-xs text-slate-700 font-medium">Python</span>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="text-2xl font-bold text-orange-500">aws</div>
                <span className="text-xs text-slate-700 font-medium">AWS</span>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="text-4xl text-blue-500">🐳</div>
                <span className="text-xs text-slate-700 font-medium">Docker</span>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="text-4xl text-blue-700">🗄️</div>
                <span className="text-xs text-slate-700 font-medium">PostgreSQL</span>
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-2 w-[90px] h-[90px]">
                <div className="text-4xl text-orange-500">▲</div>
                <span className="text-xs text-slate-700 font-medium">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            <StatCard icon={Briefcase} number="250+" label={`${data.name} Projects`} iconColor="#3b82f6" />
            <StatCard icon={Users} number="98%" label="Client Satisfaction" iconColor="#3b82f6" />
            <StatCard icon={Globe} number="25+" label={`${data.name} Experts`} iconColor="#3b82f6" />
            <StatCard icon={Award} number="12+" label="Years of Experience" iconColor="#3b82f6" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-16 py-16 bg-white">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/idcta.png"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-6xl mx-auto px-12 py-6 relative z-10">
            <div className="flex items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent-green uppercase tracking-widest">
                    LET'S BUILD BETTER {data.name.toUpperCase()} TOGETHER
                  </span>
                </div>
                <h2 className="font-headings font-bold text-3xl text-white leading-tight mb-3">
                  Ready to Transform<br />
                  {data.name} with Technology?
                </h2>
                <p className="text-sm text-white opacity-95 leading-relaxed max-w-md">
                  Let's work together to build innovative {data.name.toLowerCase()} solutions that improve outcomes and drive efficiency.
                </p>
              </div>

              {/* Right Buttons */}
              <div className="flex items-center gap-4">
                <button className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors whitespace-nowrap">
                  <span>Get a Free Consultation</span>
                  <span>→</span>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors whitespace-nowrap">
                  <span>Talk to an Expert</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Components
function FeatureCard({ icon: Icon, title, description, color }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5" style={{ color }}>
        <Icon className="w-7 h-7" strokeWidth={1.7} />
      </div>
      <div>
        <div className="font-semibold text-sm text-foreground mb-1">{title}</div>
        <div className="text-xs text-muted-foreground leading-relaxed">{description}</div>
      </div>
    </div>
  );
}

function CheckItem({ text, subtext }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-accent-green flex-shrink-0">
        <CheckCircle className="w-5 h-5" strokeWidth={2.4} />
      </div>
      <div>
        <div className="font-semibold text-sm text-foreground mb-0.5">{text}</div>
        <div className="text-xs text-muted-foreground">{subtext}</div>
      </div>
    </div>
  );
}

// Components
function ChallengeCard({ icon: Icon, title, description, bgColor, iconColor }: any) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: bgColor }}>
        <Icon className="w-7 h-7" style={{ color: iconColor }} strokeWidth={1.8} />
      </div>
      <div className="font-semibold text-base text-slate-800 mb-2">{title}</div>
      <div className="text-sm text-slate-600 leading-relaxed">{description}</div>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, description, iconColor = "#3b82f6" }: any) {
  const { industry } = useParams<{ industry: string }>();
  const navigate = useNavigate();
  
  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
    navigate(`/industries/${industry}/${slug}`);
  };
  
  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg p-6 flex flex-col gap-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: iconColor + '15' }}>
        <Icon className="w-6 h-6" style={{ color: iconColor }} strokeWidth={2} />
      </div>
      <div className="font-semibold text-base text-slate-800">{title}</div>
      <div className="text-sm text-slate-600 leading-relaxed flex-1">{description}</div>
      <div className="text-blue-600 text-lg flex items-center gap-1 font-medium">
        <span>→</span>
      </div>
    </div>
  );
}

function CaseStudyCard({ image, title, description }: any) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="h-48 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className="p-6">
        <div className="font-semibold text-base text-slate-800 mb-3">{title}</div>
        <div className="text-sm text-slate-600 leading-relaxed mb-4">{description}</div>
        <a className="text-blue-600 text-sm font-medium flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
          <span>View Case Study</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, number, label, iconColor }: any) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: iconColor + '15' }}>
        <Icon className="w-8 h-8" style={{ color: iconColor }} strokeWidth={2} />
      </div>
      <div>
        <div className="font-headings font-bold text-3xl" style={{ color: iconColor }}>{number}</div>
        <div className="text-sm text-slate-600 mt-1">{label}</div>
      </div>
    </div>
  );
}
