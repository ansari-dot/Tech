import { Linkedin, Twitter, Facebook, Instagram, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];

  const services = [
    { label: "Custom Software Development", to: "/services/custom-software-development" },
    { label: "Cloud & DevOps Engineering", to: "/services/cloud-solutions" },
    { label: "Mobile App Development", to: "/services/mobile-app-development" },
    { label: "Cybersecurity", to: "/services/cybersecurity" },
    { label: "AI & Automation", to: "/services/ai-automation" },
  ];

  const industries = [
    { label: "Healthcare", to: "/industries/healthcare" },
    { label: "FinTech", to: "/industries/fintech" },
    { label: "Education", to: "/industries/education" },
    { label: "Logistics", to: "/industries/logistics-supply-chain" },
    { label: "Manufacturing", to: "/industries/manufacturing" },
    { label: "Retail", to: "/industries/retail-e-commerce" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center mb-4 cursor-pointer">
              <img
                src="/assets/logo.ico"
                alt="3Novotar Tech Logo"
                className="h-24 sm:h-32 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              We build innovative software solutions that help businesses grow, adapt, and lead in the digital age.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://x.com/threenovator?s=21" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="3Novator Tech Twitter/X"
                className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/share/1FvDgyUmc4/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="3Novator Tech Facebook"
                className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/3novatortech?igsh=MXZvaTZsNng2cWgxaw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="3Novator Tech Instagram"
                className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headings font-bold text-sm text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-xs text-gray-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headings font-bold text-sm text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.to} className="text-xs text-gray-600 hover:text-primary transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-headings font-bold text-sm text-primary mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link to={industry.to} className="text-xs text-gray-600 hover:text-primary transition-colors">
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-headings font-bold text-sm text-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">0349-8880182 / 0348-9164985</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">threenovator@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">Remote / Distributed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2024 3Novator Tech. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
