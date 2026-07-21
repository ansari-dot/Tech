import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Toggle switch states
  const [preferences, setPreferences] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("3novator_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (type: string) => {
    localStorage.setItem(
      "3novator_cookie_consent",
      JSON.stringify({
        type,
        preferences,
        statistics,
        marketing,
        timestamp: new Date().toISOString(),
      })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl font-sans text-gray-800"
      >
        <div className="max-w-7xl mx-auto p-6 sm:p-8 flex flex-col gap-6">
          
          {/* Main Top Section: Logo + Message + 3 Stacked Buttons */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            
            {/* Left Column: Brand Logo */}
            <div className="w-full lg:w-48 flex-shrink-0 flex flex-col justify-between gap-4">
              <Link to="/" className="inline-block">
                <img
                  src="/assets/logo.ico"
                  alt="3Novator Tech Logo"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </Link>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>3Novator Privacy</span>
              </div>
            </div>

            {/* Middle Column: Cookie Notice Text */}
            <div className="flex-1">
              <h3 className="font-headings font-bold text-base sm:text-lg text-gray-900 mb-2">
                This website uses cookies
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
              </p>
            </div>

            {/* Right Column: 3 Stacked Brand-Colored Buttons */}
            <div className="w-full lg:w-56 flex flex-col gap-2.5 flex-shrink-0">
              <button
                onClick={() => saveConsent("allow_all")}
                className="w-full bg-primary hover:bg-opacity-95 active:scale-98 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-md transition-all shadow-sm cursor-pointer text-center"
              >
                Allow all
              </button>

              <button
                onClick={() => saveConsent("allow_selection")}
                className="w-full bg-primary hover:bg-opacity-95 active:scale-98 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-md transition-all shadow-sm cursor-pointer text-center"
              >
                Allow selection
              </button>

              <button
                onClick={() => saveConsent("deny")}
                className="w-full bg-primary hover:bg-opacity-95 active:scale-98 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-md transition-all shadow-sm cursor-pointer text-center"
              >
                Deny
              </button>
            </div>

          </div>

          {/* Bottom Divider & Interactive Toggles Row */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            {/* Toggles Container */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold text-gray-800">
              
              {/* Necessary (Always Active) */}
              <div className="flex items-center gap-3">
                <span>Necessary</span>
                <div className="w-11 h-6 rounded-full bg-primary relative inline-flex items-center justify-end px-1 cursor-not-allowed opacity-90">
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                </div>
              </div>

              {/* Preferences */}
              <div className="flex items-center gap-3">
                <span>Preferences</span>
                <button
                  type="button"
                  onClick={() => setPreferences(!preferences)}
                  className={`w-11 h-6 rounded-full transition-colors relative inline-flex items-center px-1 cursor-pointer ${
                    preferences ? "bg-primary justify-end" : "bg-gray-800 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                </button>
              </div>

              {/* Statistics */}
              <div className="flex items-center gap-3">
                <span>Statistics</span>
                <button
                  type="button"
                  onClick={() => setStatistics(!statistics)}
                  className={`w-11 h-6 rounded-full transition-colors relative inline-flex items-center px-1 cursor-pointer ${
                    statistics ? "bg-primary justify-end" : "bg-gray-800 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center gap-3">
                <span>Marketing</span>
                <button
                  type="button"
                  onClick={() => setMarketing(!marketing)}
                  className={`w-11 h-6 rounded-full transition-colors relative inline-flex items-center px-1 cursor-pointer ${
                    marketing ? "bg-primary justify-end" : "bg-gray-800 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                </button>
              </div>

            </div>

            {/* Show details link */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-primary hover:underline font-bold text-xs inline-flex items-center gap-1 cursor-pointer self-end sm:self-auto"
            >
              <span>{showDetails ? "Hide details" : "Show details"}</span>
              {showDetails ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

          </div>

          {/* Details Accordion Panel */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-3"
            >
              <div>
                <span className="font-bold text-gray-800">Necessary Cookies:</span> Essential for security, session state, and navigation across 3Novator Tech platform.
              </div>
              <div>
                <span className="font-bold text-gray-800">Preferences Cookies:</span> Remember language settings and region preferences.
              </div>
              <div>
                <span className="font-bold text-gray-800">Statistics & Analytics:</span> Help us analyze visitor interaction to optimize system performance.
              </div>
              <div>
                <span className="font-bold text-gray-800">Marketing Cookies:</span> Used to serve relevant announcements and measure campaign reach. Read our{" "}
                <Link to="/privacy" className="text-primary font-semibold hover:underline">
                  Privacy Policy
                </Link>.
              </div>
            </motion.div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
