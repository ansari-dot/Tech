import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
  onGetStartedClick: () => void;
}

export default function NavBar({ onNavClick, activeSection, onGetStartedClick }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "HOME", value: "home", path: "/" },
    { label: "ABOUT", value: "about", path: "/about" },
    { label: "SERVICES", value: "services", path: "/services" },
    { label: "INDUSTRIES", value: "industries", path: "/industries" },
    { label: "PORTFOLIO", value: "portfolio", path: "/portfolio" },
    { label: "CONTACT", value: "contact", path: "/contact" },
  ];

  const handleItemClick = (value: string) => {
    onNavClick(value);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border px-4 sm:px-6 md:px-8 transition-all duration-300" style={{ padding: '4px 1rem' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand Logo and Text */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleItemClick("home")}
          id="nav-logo"
        >
          <img
            src="/assets/logo.ico"
            alt="3Novotar Tech Logo"
            className="h-16 sm:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6" id="desktop-menu">
          {navItems.map((item) => {
            const isActive = item.path ? location.pathname === item.path : activeSection === item.value;

            if (item.path) {
              return (
                <Link
                  key={item.value}
                  to={item.path}
                  className={`font-sans text-[11px] xl:text-xs font-medium transition-all duration-300 relative py-1 hover:text-primary ${isActive ? "text-primary" : "text-foreground"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent-green rounded-full"
                      style={{ bottom: "-6px" }}
                    />
                  )}
                </Link>
              );
            }

            return (
              <button
                key={item.value}
                onClick={() => handleItemClick(item.value)}
                className={`font-sans text-[11px] xl:text-xs font-medium transition-all duration-300 relative py-1 hover:text-primary ${isActive ? "text-primary" : "text-foreground"
                  }`}
                style={{ contentVisibility: "auto" }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent-green rounded-full"
                    style={{ bottom: "-6px" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:block">
          <button
            onClick={onGetStartedClick}
            className="bg-primary hover:bg-opacity-90 active:scale-95 text-white font-sans font-semibold text-[10px] px-4 py-2 rounded-[4px] tracking-widest uppercase transition-all shadow-sm shadow-primary/10 cursor-pointer"
            id="btn-get-started-desktop"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-foreground hover:text-primary transition-colors rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-100"
            aria-label="Toggle navigation menu"
            id="mobile-menu-hamburger"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[65px] sm:top-[77px] z-40 bg-white border-t border-border transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          }`}
        id="mobile-menu-drawer"
      >
        <div className="flex flex-col h-[calc(100vh-80px)] p-6 bg-white overflow-y-auto">
          <div className="flex flex-col gap-4 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleItemClick(item.value)}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg font-sans text-sm font-semibold text-left transition-all ${isActive
                      ? "text-primary bg-primary/5 border-l-4 border-accent-green"
                      : "text-foreground hover:text-primary hover:bg-slate-50 border-l-4 border-transparent"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-accent-green" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-border pb-12">
            <button
              onClick={() => {
                setIsOpen(false);
                onGetStartedClick();
              }}
              className="w-full bg-primary hover:bg-opacity-95 text-white font-sans font-semibold text-sm py-3.5 rounded-[4px] tracking-widest uppercase text-center transition-all shadow-md shadow-primary/15"
              id="btn-get-started-mobile"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
