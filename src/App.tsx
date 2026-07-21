/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import IndustriesPage from "./pages/IndustriesPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";

import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

import PortfolioPage from "./pages/PortfolioPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookieBanner from "./components/CookieBanner";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {

  return (

    <BrowserRouter>
      <ScrollToTop />
      <CookieBanner />

      <div className="w-full min-h-screen bg-white">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:industry" element={<IndustryDetailPage />} />
          <Route path="/industries/:industry/:solution" element={<SolutionDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:service" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<PortfolioDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>

      </div>

    </BrowserRouter>

  );

}