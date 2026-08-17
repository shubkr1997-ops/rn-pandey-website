"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Devendra Singhania",
      role: "CEO, Singhania Logistics",
      comment: "R N Pandey Insurance provides the highest class of security. Their smart claim ledger settled our commercial cargo loss under 10 minutes. Unbelievable speed and professionalism.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Ananya Sharma",
      role: "Director, LifeCare Clinics",
      comment: "The health protection plan is truly sovereign tier. Direct international admission assistance and cashless processing makes medical emergencies completely worry-free.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Vikramaditya Roy",
      role: "Founder, Roy Capital",
      comment: "Elite asset protection for my vintage car collection and luxury estates. The personalized digital relationship manager answers immediately and processes requests with precision.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6s auto-slide
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-brand-gold/10 opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Quote Icon Background Indicator */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-gold/60 text-brand-gold-dark flex items-center justify-center shadow-sm animate-pulse">
            <Quote className="w-6 h-6" />
          </div>
        </div>

        {/* Sliding Area */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-2xl bg-white hover:bg-slate-100/60 border border-slate-200 hover:border-brand-gold/60 transition-all duration-300 shadow-md hover:shadow-xl text-center flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-base md:text-lg text-brand-navy-darkest font-luxury font-bold leading-relaxed max-w-2xl italic">
                &ldquo;{testimonials[index].comment}&rdquo;
              </p>

              {/* Customer Avatar & Name */}
              <div className="mt-8 flex items-center space-x-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/60 shadow-sm"
                />
                <div className="text-left">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-black text-brand-gold-dark">
                    {testimonials[index].name}
                  </h4>
                  <span className="text-[11px] text-slate-600 font-bold font-futuristic mt-0.5 block">
                    {testimonials[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Slides Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "bg-brand-gold-dark scale-125 shadow-sm" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
