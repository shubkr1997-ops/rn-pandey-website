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
export default function InsurancePage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("categories");

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




    </main>
  );
}
