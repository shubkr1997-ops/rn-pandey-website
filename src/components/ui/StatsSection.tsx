"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, FileText, CalendarCheck, ShieldCheck } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

// Custom Counter hook for numeric counts animation
function AnimatedCounter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(handle);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: "Happy Customers", end: 95000, suffix: "+", icon: <Users className="w-6 h-6" /> },
    { label: "Claims Settled", end: 99, suffix: ".8%", icon: <FileText className="w-6 h-6" /> },
    { label: "Years Experience", end: 28, suffix: "+", icon: <CalendarCheck className="w-6 h-6" /> },
    { label: "Insurance Partners", end: 45, suffix: "+", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  // Mock data for Recharts Graph
  const chartData = [
    { year: "2021", settlement: 89, volume: 15 },
    { year: "2022", settlement: 92, volume: 22 },
    { year: "2023", settlement: 95, volume: 38 },
    { year: "2024", settlement: 97, volume: 55 },
    { year: "2025", settlement: 99.2, volume: 72 },
    { year: "2026", settlement: 99.8, volume: 95 }
  ];

  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-slate-50 scroll-mt-20 sm:scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 opacity-40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-dark font-extrabold font-futuristic">
            Company Performance
          </span>
          <h2 className="font-luxury text-3xl md:text-5xl font-bold mt-2 text-brand-navy-darkest">
            Performance <span className="text-brand-gold-dark">Index.</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white hover:bg-slate-100/80 border border-slate-200/80 transition-all duration-300 flex flex-col items-center text-center shadow-md hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-slate-50 border-2 border-brand-gold/60 text-brand-gold-dark transition-transform duration-300 group-hover:scale-110 shadow-sm mb-4">
                {stat.icon}
              </div>
              <h3 className="font-luxury text-2xl md:text-3xl font-black text-brand-navy-darkest group-hover:text-brand-gold-dark transition-colors duration-300">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </h3>
              <p className="text-brand-gold-dark text-xs font-futuristic mt-2 uppercase tracking-[0.2em] font-extrabold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Performance Chart Panel */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-luxury text-lg md:text-xl font-black text-brand-navy-darkest">
                Claims Resolution Scale
              </h3>
              <p className="text-xs text-slate-600 font-futuristic mt-1">
                Year-on-year audit of claim response speed and settlement rates.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold font-futuristic uppercase tracking-wider">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-brand-gold rounded-full border border-brand-gold/60" />
                <span className="text-slate-700">Settlement Ratio (%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-slate-400 rounded-full border border-slate-300" />
                <span className="text-slate-700">Claims Solved (k)</span>
              </div>
            </div>
          </div>

          {/* Area Chart Container */}
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSettlement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748B" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#64748B" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(10,22,40,0.08)" />
                <XAxis dataKey="year" stroke="rgba(10,22,40,0.6)" fontSize={11} tickLine={false} />
                <YAxis stroke="rgba(10,22,40,0.6)" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(212, 175, 55, 0.4)",
                    borderRadius: "12px",
                    color: "#0A1628",
                    fontSize: "12px",
                    fontWeight: "bold",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="settlement"
                  stroke="#D4AF37"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorSettlement)"
                  name="Settlement Rate (%)"
                />
                <Area
                  type="monotone"
                  dataKey="volume"
                  stroke="#64748B"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorVolume)"
                  name="Annual Claims Volume (k)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
