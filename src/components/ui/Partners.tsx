"use client";

import React from "react";
import { ShieldAlert, Award, Gem, Anchor, Compass } from "lucide-react";

export default function Partners() {
  const partnersList = [
    { name: "Magma Reinsurance", icon: <ShieldAlert className="w-4 h-4 text-brand-gold-dark shrink-0" /> },
    { name: "Allianz Sovereign", icon: <Gem className="w-4 h-4 text-brand-gold-dark shrink-0" /> },
    { name: "ICICI Elite Shield", icon: <Award className="w-4 h-4 text-brand-gold-dark shrink-0" /> },
    { name: "HDFC Core Protection", icon: <Anchor className="w-4 h-4 text-brand-gold-dark shrink-0" /> },
    { name: "SBI General Premium", icon: <Compass className="w-4 h-4 text-brand-gold-dark shrink-0" /> }
  ];

  // Duplicate list to achieve infinite scroll effect
  const doublePartners = [...partnersList, ...partnersList, ...partnersList];

  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4 md:gap-10">
        
        {/* Title side badge - Text sizes kept exactly as original */}
        <div className="shrink-0 text-center md:text-left">
          <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-bold block font-futuristic">
            Backed By
          </span>
          <span className="font-luxury text-sm font-bold text-brand-gold-dark uppercase tracking-wider block mt-0.5">
            Sovereign Partners
          </span>
        </div>

        {/* Marquee Wrapper */}
        <div className="flex-1 overflow-hidden relative">
          {/* Side blurs for cinematic overlap */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling items track */}
          <div className="marquee-container py-1">
            <div className="marquee-content gap-6 pr-6">
              {doublePartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/80 hover:border-brand-gold/60 transition-all duration-300 shadow-sm whitespace-nowrap"
                >
                  <div className="w-6 h-6 rounded-md bg-slate-50 border border-brand-gold/60 flex items-center justify-center">
                    {partner.icon}
                  </div>
                  <span className="text-[11px] font-luxury font-bold uppercase tracking-wider text-brand-navy-darkest">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
