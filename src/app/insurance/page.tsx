"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamic imports for performance optimization
const CategoryCardGrid = dynamic(() => import("@/components/ui/CategoryCard"), {
  ssr: false,
  loading: () => <div className="min-h-96 w-full flex items-center justify-center text-gray-500">Loading Categories...</div>
});
const StatsSection = dynamic(() => import("@/components/ui/StatsSection"), {
  ssr: false,
  loading: () => <div className="min-h-96 w-full flex items-center justify-center text-gray-500">Loading Stats...</div>
});
const Gallery = dynamic(() => import("@/components/ui/Gallery"), {
  ssr: false,
  loading: () => <div className="min-h-60 w-full flex items-center justify-center text-gray-500">Loading Gallery...</div>
});
const Partners = dynamic(() => import("@/components/ui/Partners"), { ssr: false });
const FAQ = dynamic(() => import("@/components/ui/FAQ"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ui/ContactSection"), { ssr: false });
const DashboardTab = dynamic(() => import("@/components/ui/DashboardTab"), { ssr: false });

export default function InsurancePage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("categories");
  const [showDashboard, setShowDashboard] = useState(false);

  // Monitor page scroll to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["categories", "stats", "faq", "contact"];
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

  // Scroll to section from URL hash on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "home") {
      router.push("/");
      return;
    }
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden selection:bg-brand-gold/30 selection:text-white">
      
      {/* Luxury Nav Header */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onDashboardClick={() => setShowDashboard(true)}
      />

      {/* Spacer to push content below fixed Navbar */}
      <div className="h-20 bg-white" />

      {/* Partners infinite loop marquee */}
      <Partners />

      {/* 12 Insurance Categories grid */}
      <CategoryCardGrid />

      {/* Statistics & Area chart */}
      <StatsSection />

      {/* Photo Gallery */}
      <Gallery />

      {/* FAQs list accordion */}
      <FAQ />

      {/* Contact information form + custom SVG map */}
      <ContactSection />

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
