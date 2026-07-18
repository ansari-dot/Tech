/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

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


export default function App() {

  return (

    <BrowserRouter>

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
        </Routes>

      </div>

    </BrowserRouter>

  );

}