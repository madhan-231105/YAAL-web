import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import JewelleryRental from "./pages/JewelleryRental";
import SareeDraping from "./pages/SareeDraping";
import PlateDecoration from "./pages/PlateDecoration";
import AboutUs from "./pages/AboutUs";


/* 🔥 Scroll To Top On Route Change */
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewellery" element={<JewelleryRental />} />
            <Route path="/saree-draping" element={<SareeDraping />} />
            <Route path="/plate-decoration" element={<PlateDecoration />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;