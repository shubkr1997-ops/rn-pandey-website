"use client";

import React from "react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavClick?: (section: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const handleItemClick = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative mt-24 border-t border-white/15 bg-[#030712] overflow-hidden shadow-2xl pb-16 sm:pb-0">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-radial opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-gold opacity-15 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand Info (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:pr-12">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center text-brand-gold-dark shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-luxury text-lg font-extrabold tracking-widest text-white">
                  R N PANDEY
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold -mt-0.5 font-futuristic font-extrabold">
                  Insurance & Wealth Security
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-white/60 font-futuristic font-medium leading-relaxed">
              Guardians of your legacy. Providing elite-tier asset protection, digital claims settlement, and futuristic wealth security for elite clientele worldwide.
            </p>
            {/* Social Icons - Light Mode Minimalist */}
            <div className="flex space-x-3 pt-2">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  url: "#"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  url: "#"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.86.508 9.388.508 9.388.508s7.528 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  url: "#"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 1.974 14.107.95 11.49.95c-5.438 0-9.863 4.373-9.867 9.801-.001 1.73.461 3.414 1.336 4.931L1.946 22.1l6.701-1.946z" />
                    </svg>
                  ),
                  url: "https://wa.me/919341501312?text=Hello%20R.N.%20Pandey%20Insurance!%20I%20would%20like%20to%20inquire%20about%20your%20insurance%20policies."
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-gold/15 border border-white/10 hover:border-brand-gold/50 text-white/70 hover:text-brand-gold flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Support (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-black text-brand-gold-dark block font-futuristic">
              Corporate Office
            </span>
            <ul className="space-y-3.5 text-xs md:text-sm text-white/60 font-futuristic font-semibold">
              <li className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-brand-gold-dark shrink-0 mt-0.5" />
                <span className="leading-relaxed">Pugmil Rd, opp. PAPER HOUSE, near inderpuri cinema, Friends Colony, Pugmil, Hazaribagh, Jharkhand 825301</span>
              </li>
              <li className="flex items-center space-x-3.5">
                <Phone className="w-4 h-4 text-brand-gold-dark shrink-0" />
                <a
                  href="https://wa.me/919934516400?text=Hello%20R%20N%20Pandey%20Insurance%2C%20I%20would%20like%20to%20inquire%20about%20your%20insurance%20policies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-300"
                >
                  +91 99345 16400
                </a>
              </li>
              <li className="flex items-center space-x-3.5">
                <Mail className="w-4 h-4 text-brand-gold-dark shrink-0" />
                <span>support@rnpandeyinsurance.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 my-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-white/40 font-futuristic font-medium text-center md:text-left">
          <div className="max-w-md md:max-w-none">
            &copy; {new Date().getFullYear()} R N Pandey Insurance. All Rights Reserved. Crafted for premium security.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
