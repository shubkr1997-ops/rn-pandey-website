"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Download,
  Calendar,
  AlertCircle,
  FileCheck,
  CheckCircle,
  Clock,
  QrCode,
  Bell,
  ArrowRight,
  TrendingUp,
  CreditCard
} from "lucide-react";

interface TimelineStep {
  label: string;
  desc: string;
  status: "complete" | "current" | "upcoming";
  date: string;
}

export default function DashboardTab() {
  const [claimProgress, setClaimProgress] = useState(48); // percentage completion
  const steps: TimelineStep[] = [
    { label: "Claim Submitted", desc: "Digital verification ledger check", status: "complete", date: "June 25, 2026" },
    { label: "Verification", desc: "AI audit of loss parameters", status: "complete", date: "June 26, 2026" },
    { label: "Inspection", desc: "Drone/IoT claim damage report assessment", status: "current", date: "In Progress" },
    { label: "Approved", desc: "Contract approval execution", status: "upcoming", date: "Pending" },
    { label: "Payment Released", desc: "Instant bank ledger transfer", status: "upcoming", date: "Pending" }
  ];

  const activePolicies = [
    { name: "Premium Health Protection", id: "RNP-HLTH-88301", coverage: "₹1,50,00,000", premium: "₹2,500/mo", status: "Active", renewal: "July 24, 2026" },
    { name: "Executive Motor Shield", id: "RNP-AUTO-20391", coverage: "₹25,00,000", premium: "₹1,800/mo", status: "Expires Soon", renewal: "July 08, 2026" }
  ];

  const notifications = [
    { text: "AI verification check complete for claim CLM-99201", time: "2 hrs ago", type: "success" },
    { text: "Your Executive Motor Shield renewal is due in 9 days", time: "1 day ago", type: "warning" }
  ];

  return (
    <section className="py-12 bg-transparent text-brand-navy-darkest">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: Policies list + Timeline Tracker */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Dashboard Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Active Policies", val: "2" },
              { label: "Pending Claims", val: "1" },
              { label: "Total Coverage", val: "₹1.75 Cr" },
              { label: "Loyalty Tier", val: "Premium" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 shadow-md hover:border-brand-gold/60 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-futuristic block">
                  {stat.label}
                </span>
                <span className="text-xl font-bold font-luxury text-brand-gold-dark block mt-1.5">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>

          {/* Active Policies Section */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-luxury text-base font-bold text-brand-navy-darkest flex items-center space-x-2.5">
                <Shield className="w-4 h-4 text-brand-gold-dark" />
                <span>Active Coverage Portfolios</span>
              </h3>
              <button className="text-[10px] uppercase tracking-wider font-extrabold text-brand-gold-dark hover:text-brand-navy-darkest flex items-center space-x-1 transition-colors duration-300">
                <span>Add Portfolio</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-4">
              {activePolicies.map((policy, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-brand-gold/60 transition-all duration-300 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2.5">
                      <h4 className="font-luxury text-sm font-bold text-brand-navy-darkest group-hover:text-brand-gold-dark transition-colors duration-300">
                        {policy.name}
                      </h4>
                      <span
                        className={`text-[8px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                          policy.status === "Active"
                            ? "bg-brand-gold/15 border border-brand-gold/50 text-brand-gold-dark"
                            : "bg-amber-100 border border-amber-400 text-amber-800"
                        }`}
                      >
                        {policy.status}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block font-mono">{policy.id}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-6 text-left sm:text-right">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-futuristic">Sum Insured</span>
                      <span className="text-xs font-bold text-slate-800 block mt-0.5">{policy.coverage}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-futuristic">Premium</span>
                      <span className="text-xs font-bold text-brand-gold-dark block mt-0.5">{policy.premium}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-futuristic">Next Renewal</span>
                      <span className="text-xs font-bold text-slate-800 block mt-0.5">{policy.renewal}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 shrink-0">
                    <button className="p-2.5 rounded-xl bg-white border border-slate-300 hover:border-brand-gold/60 text-slate-700 hover:text-brand-gold-dark transition-all duration-300" title="Download Policy Contract">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                    {policy.status === "Expires Soon" && (
                      <button className="text-[9px] uppercase tracking-wider font-extrabold bg-brand-gold-dark hover:bg-brand-navy-darkest text-white px-3.5 py-2 rounded-xl transition-colors duration-300 shadow-sm">
                        Renew
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Claims Progress & Timeline */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
              <div>
                <h3 className="font-luxury text-base font-bold text-brand-navy-darkest flex items-center space-x-2.5">
                  <TrendingUp className="w-4.5 h-4.5 text-brand-gold-dark" />
                  <span>Real-Time Claim Tracker</span>
                </h3>
                <span className="text-[10px] text-slate-500 mt-0.5 block font-mono">Claim ID: CLM-99201 (Motor Damage)</span>
              </div>
              <div className="flex items-center space-x-2 bg-brand-gold/15 border border-brand-gold/50 px-3.5 py-1 rounded-full text-xs text-brand-gold-dark font-bold">
                <Clock className="w-3.5 h-3.5 animate-spin-slow" />
                <span className="font-semibold">Estimated Payout: 4 hours</span>
              </div>
            </div>

            {/* Progress bar container */}
            <div className="relative h-1.5 bg-slate-200 rounded-full mb-10 mt-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${claimProgress}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-gold to-brand-gold-dark shadow-sm rounded-full"
              />
              <div
                className="absolute w-3.5 h-3.5 rounded-full bg-white shadow-sm border-2 border-brand-gold-dark top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                style={{ left: `${claimProgress}%` }}
              />
            </div>

            {/* Timeline Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-row md:flex-col items-start gap-4 md:gap-3 group">
                  
                  {/* Step status node */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border text-xs transition-all duration-500 ${
                        step.status === "complete"
                          ? "bg-brand-gold-dark border-brand-gold-dark text-white font-extrabold shadow-sm"
                          : step.status === "current"
                          ? "bg-brand-gold/20 border-2 border-brand-gold-dark text-brand-gold-dark shadow-sm font-extrabold"
                          : "bg-slate-100 border-slate-300 text-slate-500"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : step.status === "current" ? (
                        <FileCheck className="w-4 h-4" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    {/* Responsive vertical connector line for mobile */}
                    <div className="md:hidden w-[1.5px] h-10 bg-slate-200 mt-1" />
                  </div>

                  {/* Step details */}
                  <div className="space-y-1">
                    <h4
                      className={`text-xs font-bold font-luxury ${
                        step.status === "upcoming" ? "text-slate-500" : "text-brand-navy-darkest"
                      }`}
                    >
                      {step.label}
                    </h4>
                    <p className="text-[10px] text-slate-600 font-futuristic leading-relaxed">
                      {step.desc}
                    </p>
                    <span className="text-[9px] text-brand-gold-dark font-mono font-bold block mt-1">{step.date}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: ID Card + Notifications */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Premium Digital ID Card */}
          <div className="relative p-6 rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-brand-gold/60 transition-all duration-300 shadow-md hover:shadow-xl group">
            
            {/* Holographic metallic background glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-gold/15 to-transparent blur-xl pointer-events-none" />

            {/* ID Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-slate-50 border border-brand-gold/60 flex items-center justify-center text-brand-gold-dark shadow-sm">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-luxury text-xs font-bold tracking-widest text-brand-navy-darkest">
                  R N PANDEY
                </span>
              </div>
              <span className="text-[8px] uppercase tracking-widest text-brand-gold-dark bg-brand-gold/15 border border-brand-gold/40 px-2.5 py-0.5 rounded-full font-mono font-bold">
                PREMIUM ID
              </span>
            </div>

            {/* ID Content info */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-futuristic">Cardholder</span>
                <span className="text-sm font-bold text-brand-navy-darkest font-luxury tracking-wide mt-0.5 block uppercase">
                  Mr. R N Pandey
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-futuristic">Lattice Code</span>
                  <span className="text-xs font-bold text-slate-800 font-mono block mt-0.5">
                    RNP-9882-ELT
                  </span>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-futuristic">Tier Priority</span>
                  <span className="text-xs font-bold text-brand-gold-dark block mt-0.5">
                    Level 01 VIP
                  </span>
                </div>
              </div>
            </div>

            {/* Footer QR code area */}
            <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-futuristic">Validity</span>
                <span className="text-[10px] text-slate-700 font-futuristic font-bold block">Dec 2028 | Global</span>
              </div>
              {/* QR Box */}
              <div className="w-12 h-12 bg-slate-50 border border-slate-300 rounded-xl flex items-center justify-center p-1 cursor-pointer hover:border-brand-gold transition-all duration-300 text-brand-gold-dark shadow-sm">
                <QrCode className="w-8 h-8" />
              </div>
            </div>

            {/* Card download trigger */}
            <button className="w-full py-2.5 bg-slate-50 border border-slate-300 hover:border-brand-gold/60 rounded-xl mt-6 text-[10px] uppercase tracking-wider font-extrabold text-brand-navy-darkest hover:text-brand-gold-dark flex items-center justify-center space-x-2 transition-all duration-300 shadow-sm">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Add to Digital Wallet</span>
            </button>
          </div>

          {/* Recent notifications panel */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
            <h3 className="font-luxury text-sm font-bold text-brand-navy-darkest mb-4 flex items-center space-x-2.5">
              <Bell className="w-4 h-4 text-brand-gold-dark" />
              <span>Notifications Panel</span>
            </h3>

            <div className="space-y-3">
              {notifications.map((notif, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3 text-xs font-futuristic leading-relaxed hover:border-brand-gold/40 transition-all duration-300"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-brand-gold-dark" />
                  <div className="flex-1 space-y-1">
                    <p className="text-slate-700 text-[11px] font-bold">{notif.text}</p>
                    <span className="text-[9px] text-slate-500 font-mono block">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
