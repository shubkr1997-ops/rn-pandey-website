"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowUpRight, User } from "lucide-react";

interface NavbarProps {
  onNavClick?: (section: string) => void;
  activeSection?: string;
}

export default function Navbar({ onNavClick, activeSection = "home" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "categories", label: "Insurance Categories" },
    { id: "stats", label: "Company Stats" },
    { id: "faq", label: "FAQs" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    if (onNavClick) {
      onNavClick(id);
    } else {
      // Fallback scroll behaviour
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-brand-navy-darkest/90 backdrop-blur-2xl py-3.5 shadow-md border-white/10"
          : "bg-brand-navy-darkest/70 backdrop-blur-xl py-5 border-white/5"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 flex justify-between items-center">
        {/* Luxury Brand Logo - Clean Emblem */}
        <Link
          href="#"
          onClick={() => handleItemClick("home")}
          className="flex items-center space-x-3 group"
        >
          <div className="flex items-center justify-center text-brand-gold transition-transform duration-300 group-hover:scale-110 shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-luxury text-lg md:text-xl font-extrabold tracking-widest text-white group-hover:text-brand-gold transition-colors duration-300 drop-shadow-sm">
              R N PANDEY
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 -mt-0.5 font-futuristic font-extrabold group-hover:text-white/80">
              Wealth & Insurance
            </span>
          </div>
        </Link>

        {/* Desktop Menu - Bold Minimalist with Center Dot Indicator */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`text-xs uppercase tracking-[0.22em] font-black font-futuristic transition-all duration-300 relative py-2 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-gold shadow-gold-glow rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons - Bold & Clean */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/919341501312?text=Hello%20R.N.%20Pandey%20Insurance!%20I%20would%20like%20to%20get%20a%20free%20insurance%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] font-black text-brand-navy-darkest bg-brand-gold hover:bg-brand-gold-dark px-5 py-2.5 rounded-lg shadow-sm transition-all duration-300 hover:scale-105"
          >
            <span>Get Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-brand-gold transition-colors duration-300 p-2.5 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] h-[calc(100vh-64px)] z-40 bg-brand-navy-darkest/95 backdrop-blur-xl border-t border-white/10 transition-all duration-500 transform ${
          isOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`text-lg uppercase tracking-wider text-left py-2 border-b border-white/10 font-futuristic transition-all duration-300 hover:text-brand-gold hover:pl-2 ${
                activeSection === item.id ? "text-white font-black" : "text-white/60 font-bold"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col space-y-4 pt-6">
            <a
              href="https://wa.me/919341501312?text=Hello%20R.N.%20Pandey%20Insurance!%20I%20would%20like%20to%20get%20a%20free%20insurance%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-1.5 text-sm uppercase tracking-wider font-black text-brand-navy-darkest bg-brand-gold hover:bg-brand-gold-dark px-6 py-3 rounded-lg shadow-sm w-full"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
