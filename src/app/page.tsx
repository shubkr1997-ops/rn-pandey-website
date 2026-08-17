"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, X, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const DashboardTab = dynamic(() => import("@/components/ui/DashboardTab"), { ssr: false });

export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");
  const [showDashboard, setShowDashboard] = useState(false);


  // Monitor page scroll to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "categories", "stats", "faq", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    // Redirect to the insurance details page with the section hash via SPA router
    router.push(`/insurance#${sectionId}`);
  };

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden selection:bg-brand-gold/30 selection:text-white">
      
      {/* Luxury Nav Header */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onDashboardClick={() => setShowDashboard(true)}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      >
        {/* Background layer handles rendering globally via layout.tsx */}

        {/* Clean background loops and centered subject with no text overlays */}



      </section>

      {/* Premium Footer */}
      <Footer onNavClick={handleNavClick} />


      {/* Client Dashboard Overlay Drawer Console */}
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-6 py-10 relative">
              
              {/* Close Button Header */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-brand-gold/60 flex items-center justify-center">
                    <Shield className="w-4.5 h-4.5 text-brand-gold-dark" />
                  </div>
                  <div>
                    <h2 className="font-luxury text-lg font-bold text-brand-navy-darkest">
                      RN Pandey Sovereign Dashboard
                    </h2>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">Secure client access node: Active</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowDashboard(false)}
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-300 hover:border-brand-gold/60 text-slate-500 hover:text-brand-gold-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Dashboard panel */}
              <DashboardTab />

              {/* Info advice warning */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-xs text-slate-600 font-futuristic">
                <Info className="w-4 h-4 text-brand-gold-dark shrink-0" />
                <span>To modify active bank credentials or transfer claims to external ledgers, please contact your royal security advisor directly.</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
