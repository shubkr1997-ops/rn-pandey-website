"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, Truck, Bike, ArrowUpRight } from "lucide-react";

interface Category {
  index: string;
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
  whatsappMessage: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    index: "01",
    title: "Bike Insurance",
    subtitle: "Two-Wheeler Protection",
    desc: "Zero-gap road shield with instant claims settlement. Covers all premium superbikes, scooters & cruisers across India.",
    cta: "Get Bike Cover",
    whatsappMessage: "Hello R.N. Pandey Insurance! I am interested in Bike Insurance for my two-wheeler. Please share quote details.",
    icon: <Bike className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    index: "02",
    title: "Car Insurance",
    subtitle: "Four-Wheeler Protection",
    desc: "Zero-depreciation. Nationwide cashless repairs. Luxury replacement vehicles. Comprehensive or third-party options.",
    cta: "Get Car Cover",
    whatsappMessage: "Hello R.N. Pandey Insurance! I am interested in Car Insurance for my four-wheeler. Please share quote details.",
    icon: <Car className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    index: "03",
    title: "Commercial Motor Vehicle",
    subtitle: "Commercial Vehicle Cover",
    desc: "Comprehensive coverage for trucks, taxis & fleet transport. Protects against third-party liability, transit damage & downtime.",
    cta: "Get Commercial Cover",
    whatsappMessage: "Hello R.N. Pandey Insurance! I am interested in Commercial Fleet / Vehicle Insurance. Please share quote details.",
    icon: <Truck className="w-6 h-6 md:w-7 md:h-7" />,
  },
];

export default function CategoryCardGrid() {
  return (
    <section id="categories" className="relative overflow-hidden bg-white py-12 scroll-mt-20 sm:scroll-mt-24">

      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-10 pb-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-luxury text-3xl md:text-5xl font-black text-brand-navy-darkest leading-tight tracking-tight">
              What We <span className="text-brand-gold-dark">Cover.</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-futuristic max-w-sm leading-relaxed md:text-right">
              Three specialist covers. One trusted insurer.<br />
              Instant digital claims — 24 / 7.
            </p>
          </div>
        </motion.div>

        {/* ── Coverage Tabs ── */}
        <div className="pb-12 space-y-4">
          {categories.map((cat) => (
            <a
              key={cat.index}
              href={`https://wa.me/919341501312?text=${encodeURIComponent(cat.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 md:grid-cols-12 gap-5 items-center px-6 py-5 md:py-6 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-brand-gold/60 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
            >
              {/* Column 1: Category Icon & Title (4 cols out of 12) */}
              <div className="md:col-span-4 lg:col-span-4 flex items-center gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 bg-white border-2 border-brand-gold/60 text-brand-gold-dark transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  {cat.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-extrabold font-futuristic text-brand-gold-dark mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-luxury text-lg md:text-xl lg:text-2xl font-black text-brand-navy-darkest group-hover:text-brand-gold-dark transition-colors duration-300 leading-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Column 2: Benefits & Scope (5 cols out of 12) */}
              <div className="md:col-span-5 lg:col-span-5">
                <p className="text-slate-600 text-xs md:text-sm font-medium font-futuristic leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              {/* Column 3: Instant Filing / CTA Button (3 cols out of 12, Right aligned) */}
              <div className="md:col-span-3 lg:col-span-3 flex md:justify-end">
                <span className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-black font-futuristic text-brand-navy-darkest border-2 border-brand-navy-darkest bg-white px-5 py-3 rounded-full group-hover:bg-brand-navy-darkest group-hover:text-white group-hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-sm">
                  {cat.cta}
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] shrink-0" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
