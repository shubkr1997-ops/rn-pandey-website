"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      q: "How fast does R N Pandey Insurance process medical claims?",
      a: "Our automated AI claim verification ledger audits and clears Standard Health Claims in under 10 minutes. For major incidents requiring local inspections, a drone report or IoT field validation is finalized within 4 hours."
    },
    {
      q: "What benefits does the Sovereign VIP Tier offer?",
      a: "Sovereign Tier cardholders enjoy 100% cashless medical settlements internationally, direct 24/7 access to executive medical suites, luxury replacement vehicles during auto claims, and dedicated legal representation for wealth audits."
    },
    {
      q: "Are electric vehicles covered under Motor Insurance?",
      a: "Yes, our Executive Motor Shield covers premium EVs (including Tesla, Audi e-tron, BMW iX) and superbike models. We offer zero-depreciation coverage, high-voltage battery protection, and complimentary roadside supercharger towing."
    },
    {
      q: "How does R N Pandey Insurance determine my premium?",
      a: "Our underwriting engine assesses age-based health metrics, vehicle classification risk ratings, geographical location safety records, and coverage requirements to calculate the lowest possible premium structure for maximum security."
    },
    {
      q: "Can I download my ID card and policy contract offline?",
      a: "Absolutely. All policies, premium invoices, and digital wallet ID cards are downloadable as offline-secured PDFs directly from your Client Dashboard."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white scroll-mt-20 sm:scroll-mt-24">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-dark font-extrabold font-futuristic">
            Information Center
          </span>
          <h2 className="font-luxury text-3xl md:text-5xl font-bold mt-2 text-brand-navy-darkest">
            Frequently Asked <span className="text-brand-gold-dark">Questions.</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-brand-gold/60 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl"
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 flex justify-between items-center text-left gap-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white border-2 border-brand-gold/60 text-brand-gold-dark transition-transform duration-300 group-hover:scale-110 shadow-sm">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-luxury text-sm md:text-base font-black text-brand-navy-darkest group-hover:text-brand-gold-dark transition-colors duration-300">
                      {faq.q}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center shrink-0 text-brand-gold-dark shadow-sm">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated content body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-slate-600 font-medium font-futuristic leading-relaxed border-t border-slate-200 bg-white/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
