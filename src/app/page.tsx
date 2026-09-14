"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, X, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");


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




    </main>
  );
}
