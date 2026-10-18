"use client";

import React, { useState } from "react";
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, ShieldCheck, Check } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Premium Quote",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in name, email, and phone.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // NOTE: Replace with your actual deployed CRM URL in production
      // e.g., https://your-crm-project.web.app/api/webhook/website
      const CRM_WEBHOOK_URL = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL || "https://rn-pandey-insurance--rn-pandey-insurance.asia-southeast1.hosted.app/api/webhook/website";
      
      const response = await fetch(CRM_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", subject: "Premium Quote", message: "" });
      }, 4000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 scroll-mt-20 sm:scroll-mt-24">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 opacity-30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-dark font-extrabold font-futuristic">
            Get In Touch
          </span>
          <h2 className="font-luxury text-3xl md:text-5xl font-bold mt-2 text-brand-navy-darkest">
            Contact <span className="text-brand-gold-dark">Premium Agent.</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Info + Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Info Grid */}
            <div className="group p-8 rounded-2xl bg-white hover:bg-slate-100/60 border border-slate-200 transition-all duration-300 shadow-md hover:shadow-xl space-y-6">
              <h3 className="font-luxury text-base md:text-lg font-black text-brand-navy-darkest mb-6">
                Corporate Headquarters
              </h3>

              <div className="space-y-4 font-futuristic text-xs text-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-brand-gold/60 flex items-center justify-center text-brand-gold-dark shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-extrabold block">Office Address</span>
                    <span className="leading-relaxed text-slate-700 font-bold">Pugmil Rd, opp. PAPER HOUSE, near inderpuri cinema, Friends Colony, Pugmil, Hazaribagh, Jharkhand 825301</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-brand-gold/60 flex items-center justify-center text-brand-gold-dark shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-extrabold block">Phone support</span>
                    <a
                      href="tel:+919934516400"
                      className="text-slate-700 font-bold hover:text-brand-gold-dark transition-colors duration-300 block"
                    >
                      +91 99345 16400
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-brand-gold/60 flex items-center justify-center text-brand-gold-dark shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-extrabold block">WhatsApp Concierge (AI 24/7)</span>
                    <a
                      href="https://wa.me/919341501312?text=Hello%20R.N.%20Pandey%20Insurance!%20I%20would%20like%20to%20inquire%20about%20your%20insurance%20policies."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 font-bold hover:text-brand-gold-dark transition-colors duration-300 block"
                    >
                      +91 93415 01312
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-brand-gold/60 flex items-center justify-center text-brand-gold-dark shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-extrabold block">Email Intake</span>
                    <span className="text-slate-700 font-bold">concierge@rnpandeyinsurance.com</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-brand-gold/60 flex items-center justify-center text-brand-gold-dark shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-extrabold block">Working Hours</span>
                    <span className="text-slate-700 font-bold">Mon - Sun | 09:30 AM - 08:00 PM IST (Claims Intake 24/7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Google Maps Embed */}
            <div className="rounded-2xl bg-white border border-slate-200 h-60 overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-300">
              {/* HQ Badge */}
              <div className="absolute top-3 right-3 z-10 flex items-center space-x-1.5 text-[9px] uppercase tracking-wider text-brand-gold-dark bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-gold/40 font-bold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-dark animate-pulse" />
                <span>HQ Location</span>
              </div>
              
              {/* Google Maps iframe */}
              <iframe
                src="https://maps.google.com/maps?q=RN+PANDEY+INSURANCE+CENTER,+Pugmil+Rd,+Hazaribagh,+Jharkhand+825301&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R N Pandey Insurance Center - Hazaribagh"
                className="w-full h-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Bottom label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy-darkest/80 to-transparent p-3 z-10">
                <div className="text-[9px] uppercase tracking-[0.25em] font-futuristic">
                  <span className="text-white block font-bold">Hazaribagh Office — Friends Colony, Pugmil</span>
                  <span className="text-white/60">23.9925° N | 85.3637° E</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Contact Form */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-white hover:bg-slate-100/60 border border-slate-200 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col h-full">
            <h3 className="font-luxury text-base md:text-lg font-black text-brand-navy-darkest mb-4">
              Corporate Inquiry Intake
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-gold-dark mb-1.5 font-futuristic font-extrabold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 hover:border-brand-gold focus:border-brand-gold-dark outline-none rounded-xl px-4 py-3 text-sm text-brand-navy-darkest focus:bg-white transition-all duration-300 font-futuristic"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-gold-dark mb-1.5 font-futuristic font-extrabold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 hover:border-brand-gold focus:border-brand-gold-dark outline-none rounded-xl px-4 py-3 text-sm text-brand-navy-darkest focus:bg-white transition-all duration-300 font-futuristic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-gold-dark mb-1.5 font-futuristic font-extrabold">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 hover:border-brand-gold focus:border-brand-gold-dark outline-none rounded-xl px-4 py-3 text-sm text-brand-navy-darkest focus:bg-white transition-all duration-300 font-futuristic"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-gold-dark mb-1.5 font-futuristic font-extrabold">
                    Inquiry Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 hover:border-brand-gold focus:border-brand-gold-dark outline-none rounded-xl px-4 py-3 text-sm text-brand-navy-darkest focus:bg-white transition-all duration-300 font-futuristic"
                  >
                    <option value="Premium Quote">Premium Policy Quote</option>
                    <option value="Claim Advisory">Claims Settlement Advisory</option>
                    <option value="Corporate Audit">Corporate Risk Audit</option>
                    <option value="Agent Support">Agent Consultation</option>
                  </select>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <label className="block text-[10px] uppercase tracking-widest text-brand-gold-dark mb-1.5 font-futuristic font-extrabold">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full h-full min-h-[120px] bg-slate-50 border border-slate-300 hover:border-brand-gold focus:border-brand-gold-dark outline-none rounded-xl px-4 py-3 text-sm text-brand-navy-darkest focus:bg-white transition-all duration-300 font-futuristic resize-none flex-grow"
                />
              </div>

              {error && (
                <div className="text-red-500 text-xs font-bold text-center mt-2">
                  {error}
                </div>
              )}

              {submitted ? (
                <div className="mt-auto py-4 px-6 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 flex items-center justify-center space-x-2 animate-pulse text-sm font-bold">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Your message has been secure-routed to our agent registry. We will contact you soon.</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-auto w-full py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-black text-white bg-brand-navy-darkest hover:bg-brand-gold-dark hover:text-brand-navy-darkest shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Inquiry Request'}</span>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
