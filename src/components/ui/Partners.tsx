"use client";

import React from "react";
import Image from "next/image";

export default function Partners() {
  const partnersList = [
    { name: "Tata AIG", icon: <Image src="/logos/tata_aig.png" alt="Tata AIG" width={16} height={16} className="shrink-0 rounded-sm" /> },
    { name: "Digit", icon: <Image src="/logos/digit.png" alt="Digit" width={16} height={16} className="shrink-0 rounded-sm" /> },
    { name: "Bajaj Finance", icon: <Image src="/logos/bajaj.png" alt="Bajaj Finance" width={16} height={16} className="shrink-0 rounded-sm" /> },
    { name: "HDFC ERGO", icon: <Image src="/logos/hdfc_ergo.png" alt="HDFC ERGO" width={16} height={16} className="shrink-0 rounded-sm" /> }
  ];

  // Duplicate list to achieve infinite scroll effect
  const doublePartners = [...partnersList, ...partnersList, ...partnersList, ...partnersList];

  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4 md:gap-10">
        
        {/* Title side badge - Text sizes kept exactly as original */}
        <div className="shrink-0 text-center md:text-left">
          <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-bold block font-futuristic">
            Trusted By
          </span>
          <span className="font-luxury text-sm font-bold text-brand-gold-dark uppercase tracking-wider block mt-0.5">
            Insurance Partners
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
                  <div className="w-6 h-6 rounded-md bg-slate-50 border border-brand-gold/60 flex items-center justify-center overflow-hidden">
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
