import { Linkedin, Twitter, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const services = [
    "Custom Software Development",
    "Cloud & DevOps Engineering",
    "Mobile App Development",
    "QA & Software Testing",
    "Data & AI Solutions",
  ];

  const industries = [
    "Healthcare",
    "FinTech",
    "Education",
    "Logistics",
    "Manufacturing",
    "Retail",
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img 
                src="/assets/logo.ico" 
                alt="3Novotar Tech Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              We build innovative software solutions that help businesses grow, adapt, and lead in the digital age.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors">
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
                  <a href={link.href} className="text-xs text-gray-600 hover:text-primary transition-colors">
                    {link.label}
                  </a>
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
                  <a href="#" className="text-xs text-gray-600 hover:text-primary transition-colors">
                    {service}
                  </a>
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
                  <a href="#" className="text-xs text-gray-600 hover:text-primary transition-colors">
                    {industry}
                  </a>
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
                <span className="text-xs text-gray-600">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">hello@3novatortech.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">
                  123 Innovation Drive,<br />
                  Suite 100, Tech City, CA 94043
                </span>
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
            <a href="#" className="text-xs text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
