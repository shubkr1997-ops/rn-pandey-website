"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PersistentBackgroundVideo() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Refs for the two double-buffered video elements
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  // Ref tracking which video is currently active and visible
  const activeVideoIndexRef = useRef<1 | 2>(1);

  // Ref to prevent multiple triggers during the crossfade window
  const transitionTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    // Helper to dynamically locate active/inactive nodes
    const getVideos = () => {
      const active = activeVideoIndexRef.current === 1 ? v1 : v2;
      const inactive = activeVideoIndexRef.current === 1 ? v2 : v1;
      return { active, inactive };
    };

    // Ensure the active background video is always playing when visible
    const ensurePlay = () => {
      const { active } = getVideos();
      if (active && active.paused && isHomepage) {
        active.play().catch((err) => {
          console.log("Persistent video auto-play check pending interaction:", err);
        });
      }
    };

    // Trigger initial play check
    ensurePlay();

    // Cross-fade overlap duration in seconds
    const crossFadeTime = 0.4; 

    let animationFrameId: number;

    const checkLoopTime = () => {
      const { active, inactive } = getVideos();

      if (active && active.duration) {
        const duration = active.duration;
        const currentTime = active.currentTime;

        // Trigger loop crossfade exactly crossFadeTime seconds before the video ends
        if (duration > 0 && currentTime >= duration - crossFadeTime) {
          if (!transitionTriggeredRef.current) {
            transitionTriggeredRef.current = true;

            // Instantly reset the cued inactive video to the start and play it
            inactive.currentTime = 0;
            
            // Adjust z-index of buffers so the incoming video fades in ON TOP
            inactive.style.zIndex = "2";
            active.style.zIndex = "1";

            inactive.play()
              .then(() => {
                // Crossfade opacity values of the 100% opaque video channels
                if (activeVideoIndexRef.current === 1) {
                  v1.style.opacity = "0";
                  v2.style.opacity = "1";
                  activeVideoIndexRef.current = 2;
                } else {
                  v2.style.opacity = "0";
                  v1.style.opacity = "1";
                  activeVideoIndexRef.current = 1;
                }

                // Wait for CSS crossfade duration, then pause and reset the old video
                setTimeout(() => {
                  active.pause();
                  active.currentTime = 0;
                  transitionTriggeredRef.current = false;
                }, crossFadeTime * 1000 + 100);
              })
              .catch((err) => {
                console.log("Seamless loop transition failed:", err);
                transitionTriggeredRef.current = false;
              });
          }
        }
      }

      // Check on every frame for sub-millisecond precision
      animationFrameId = requestAnimationFrame(checkLoopTime);
    };

    // Start precision tracking
    animationFrameId = requestAnimationFrame(checkLoopTime);

    // Watchdog events to auto-recover playback
    v1.addEventListener("pause", ensurePlay);
    v2.addEventListener("pause", ensurePlay);
    window.addEventListener("focus", ensurePlay);
    window.addEventListener("scroll", ensurePlay);

    return () => {
      cancelAnimationFrame(animationFrameId);
      v1.removeEventListener("pause", ensurePlay);
      v2.removeEventListener("pause", ensurePlay);
      window.removeEventListener("focus", ensurePlay);
      window.removeEventListener("scroll", ensurePlay);
    };
  }, [isHomepage]);

  return (
    <div
      className={`fixed inset-0 w-full h-full z-0 pointer-events-none bg-brand-navy-darkest transition-opacity duration-1000 ease-in-out ${
        isHomepage ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      {/* 
        Video elements container.
        Rich opacity on dark navy for the original premium luxury aesthetic.
      */}
      <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
        {/* Buffer Video 1 */}
        <video
          ref={videoRef1}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center translate-z-0 transform-gpu will-change-transform"
          style={{
            opacity: 1,
            zIndex: 1,
            transition: "opacity 400ms ease-in-out",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Buffer Video 2 */}
        <video
          ref={videoRef2}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center translate-z-0 transform-gpu will-change-transform"
          style={{
            opacity: 0,
            zIndex: 0,
            transition: "opacity 400ms ease-in-out",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Luxury Typography Behind the Cutout (Layer 3 - z-[5], Above Videos, Strictly Behind Cutout) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5] px-4 -translate-y-56 sm:-translate-y-44 md:-translate-y-44 lg:-translate-y-44">
        {/* Majestic Single-Line Hero Typography behind Mr. R.N. Pandey */}
        <h1 className="font-luxury text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center tracking-[0.12em] sm:tracking-[0.18em] uppercase whitespace-nowrap select-none text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-white to-brand-gold drop-shadow-[0_4px_30px_rgba(212,175,55,0.45)]">
          MEMBER OF CO CLUB
        </h1>
      </div>

      {/* Static Foreground Subject (Layer 4 - Always on Top of Background Videos and Typography) */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-12">
        {/* Golden Highlight Flare directly behind the raised trophy */}
        <div 
          className="absolute left-1/2 top-[14%] sm:top-[12%] md:top-[10%] lg:top-[8%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] bg-brand-gold/35 rounded-full blur-[35px] pointer-events-none z-0" 
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-person.png"
          alt="R N Pandey with Trophy"
          className="h-[84%] sm:h-[90%] md:h-[94%] lg:h-[97%] w-auto object-contain object-bottom opacity-100 select-none pointer-events-auto filter drop-shadow-[0_15px_30px_rgba(10,22,40,0.35)] z-10"
        />
      </div>

      {/* Bottom gradient mask to fade cleanly into dark navy */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-darkest via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-darkest/70 via-transparent to-transparent pointer-events-none" />

      {/* Golden radial spotlight */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-b from-brand-gold/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Golden highlight flare under the rotating trophies platform at the bottom */}
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-gold/25 rounded-full blur-[70px] pointer-events-none" />
    </div>
  );
}
