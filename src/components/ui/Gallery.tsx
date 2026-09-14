"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/WhatsApp Image 2026-09-14 at 1.20.03 PM.jpeg",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/WhatsApp Image 2026-09-14 at 1.20.04 PM (1).jpeg",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/WhatsApp Image 2026-09-14 at 1.20.04 PM (2).jpeg",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/WhatsApp Image 2026-09-14 at 1.20.04 PM (3).jpeg",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/WhatsApp Image 2026-09-14 at 1.20.04 PM.jpeg",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/WhatsApp Image 2026-09-14 at 1.20.05 PM.jpeg",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image.png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image (2).png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image (3).png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image (4).png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image (5).png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image (6).png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  },
  {
    src: "/gallery/Pasted image (7).png",
    alt: "RN Pandey Gallery",
    caption: "RN Pandey Updates",
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 px-6 md:px-10 lg:px-16 bg-slate-50 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Gold Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-gold/10 via-brand-gold/20 to-brand-gold/10 border border-brand-gold/30 mb-6 shadow-sm">
            <Camera className="w-4 h-4 text-brand-gold-dark" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-dark font-futuristic font-extrabold">
              Exclusive Collection
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-luxury text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy-darkest tracking-wide leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold">Gallery</span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-slate-500 font-futuristic mt-4 max-w-2xl mx-auto leading-relaxed">
            Moments that define <span className="text-brand-navy-darkest font-bold">excellence</span> — a glimpse into our legacy of 
            <span className="text-brand-gold-dark font-bold"> trust</span> and premium service.
          </p>

          {/* Decorative Divider with side lines */}
          <div className="flex items-center justify-center mt-6 space-x-3">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-brand-gold/50" />
            <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            <div className="w-8 h-0.5 bg-brand-gold rounded-full" />
            <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-brand-gold/50" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-500"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-48 md:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-darkest/80 via-brand-navy-darkest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-xs md:text-sm font-futuristic font-bold tracking-wide translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {image.caption}
                </p>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-brand-gold/0 group-hover:bg-brand-gold/80 transition-all duration-500 shadow-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-navy-darkest/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Display */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center mt-5">
                <p className="text-white font-futuristic font-bold text-sm md:text-base tracking-wide">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="text-white/40 text-xs font-mono mt-1">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
