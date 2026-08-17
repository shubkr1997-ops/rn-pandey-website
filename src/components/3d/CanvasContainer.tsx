"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Main3dScene from "./Main3dScene";
import { Shield } from "lucide-react";

export default function CanvasContainer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [cameraZ, setCameraZ] = useState(10.0);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coords between -1 and 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCameraZ(13.5); // Pull camera further back on mobile to fit all orbits
      } else if (window.innerWidth < 1024) {
        setCameraZ(11.5); // Tablet/medium screens
      } else {
        setCameraZ(10.0); // Desktop default
      }
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    return <CanvasFallbackLoader />;
  }

  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Main3dScene mouse={mouse} />
      </Canvas>
    </div>
  );
}

// 2D Glowing Glass Loader for SSR/Preload state
function CanvasFallbackLoader() {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-brand-navy-darkest/40 backdrop-blur-md z-10">
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-brand-navy-medium border border-brand-gold/30 shadow-gold-glow animate-pulse">
        <Shield className="w-8 h-8 text-brand-gold" />
        <div className="absolute -inset-1 rounded-full border border-brand-gold/10 animate-ping opacity-60" />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80 mt-6 font-luxury font-bold">
        Initializing 3D Matrix...
      </p>
    </div>
  );
}
