"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { 
  Car, 
  ShieldAlert, 
  Heart, 
  Home, 
  HeartHandshake, 
  ShieldCheck, 
  Flame,
  Bike,
  Plane,
  Anchor,
  Clock,
  Baby,
  Activity,
  TrendingUp,
  Briefcase,
  Truck,
  Users,
  ShoppingBag
} from "lucide-react";

interface MouseCoords {
  x: number;
  y: number;
}

const CARD_CATEGORIES = [
  { name: "Health Insurance", icon: HeartHandshake, color: "#00E5FF", subtitle: "Wellness Shield" },
  { name: "Life Insurance", icon: Heart, color: "#D4AF37", subtitle: "Family Legacy" },
  { name: "Car Insurance", icon: Car, color: "#00FF66", subtitle: "Auto Security" },
  { name: "Home Insurance", icon: Home, color: "#FF2E93", subtitle: "Estate Shield" },
  { name: "Fire Insurance", icon: Flame, color: "#FF7A00", subtitle: "Hazard Guard" },
  { name: "Travel Insurance", icon: Plane, color: "#3B82F6", subtitle: "Global Secure" },
  { name: "Business Insurance", icon: Briefcase, color: "#3B82F6", subtitle: "Enterprise Guard" },
  { name: "Investment Plans", icon: TrendingUp, color: "#10B981", subtitle: "Wealth Growth" }
];

export default function Main3dScene({ mouse }: { mouse: MouseCoords }) {
  const sceneRef = useRef<THREE.Group>(null);
  const shieldRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);
  const router = useRouter();

  // Smooth mouse movement interpolation
  useFrame((state) => {
    if (!sceneRef.current) return;

    // Calculate target rotations based on mouse
    const targetX = (mouse.y * Math.PI) * 0.15;
    const targetY = (mouse.x * Math.PI) * 0.15;

    // Smooth lerp for the entire scene rotation
    sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, targetX, 0.05);
    sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, targetY, 0.05);

    // Rotate individual rings
    if (ringRef1.current) {
      ringRef1.current.rotation.z += 0.005;
      ringRef1.current.rotation.x += 0.002;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= 0.003;
      ringRef2.current.rotation.y += 0.004;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.x -= 0.003;
      ringRef3.current.rotation.y -= 0.002;
    }

    // Gentle floating for the shield center hub
    if (shieldRef.current) {
      shieldRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.15;
      shieldRef.current.rotation.y += 0.003;
    }
  });

  const handleNavigate = (categoryName: string) => {
    const formatted = encodeURIComponent(categoryName.replace(/\s+/g, "-").toLowerCase());
    router.push(`/insurance?category=${formatted}`);
  };

  return (
    <group ref={sceneRef}>
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#2E5AAC" />
      <directionalLight position={[0, 5, 5]} intensity={1.2} color="#ffffff" />
      <spotLight position={[0, 10, 0]} intensity={2} angle={0.6} penumbra={1} color="#FFF8DC" castShadow />

      {/* Floating 3D Shield Mesh */}
      <group ref={shieldRef} position={[0, 0, 0]}>
        <mesh>
          {/* Standard Shield geometry constructed using an Octahedron / Cone mix */}
          <cylinderGeometry args={[1.5, 0.2, 0.4, 3]} />
          <meshPhysicalMaterial
            color="#112255"
            emissive="#2E5AAC"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.9}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            transmission={0.4} // Glassmorphism effect
            thickness={0.5}
            ior={1.5}
          />
        </mesh>

        {/* Central glowing core inside the shield */}
        <Sphere args={[0.3, 32, 32]}>
          <meshBasicMaterial color="#D4AF37" toneMapped={false} />
        </Sphere>
      </group>

      {/* Floating Rings (Nested Toruses for futuristic energy field) */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={ringRef2} rotation={[Math.PI / -4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.02, 8, 100]} />
        <meshPhysicalMaterial
          color="#2E5AAC"
          emissive="#2E5AAC"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      <mesh ref={ringRef3} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.015, 8, 80]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>

      {/* Particles Starfield for background texture */}
      <Stars radius={100} depth={50} count={2000} factor={6} saturation={0.5} fade speed={1.5} />

      {/* Original 3D Holographic Icons floating in the inner layer */}
      <FloatingHolographicIcon
        position={[2.8, 1.8, -1]}
        color="#D4AF37"
        icon={<Heart className="w-5 h-5 text-brand-gold" />}
        label="Life Insurance"
      />
      <FloatingHolographicIcon
        position={[-3, 1.5, 1.2]}
        color="#00E5FF"
        icon={<HeartHandshake className="w-5 h-5 text-cyan-400" />}
        label="Health Insurance"
      />
      <FloatingHolographicIcon
        position={[3.2, -1.2, 1.5]}
        color="#00FF66"
        icon={<Car className="w-5 h-5 text-green-400" />}
        label="Car Insurance"
      />
      <FloatingHolographicIcon
        position={[-2.8, -2, -1.5]}
        color="#FF007F"
        icon={<Home className="w-5 h-5 text-pink-400" />}
        label="Home Insurance"
      />
      <FloatingHolographicIcon
        position={[0, 3.2, 0.5]}
        color="#D4AF37"
        icon={<ShieldCheck className="w-5 h-5 text-brand-gold animate-pulse" />}
        label="RN Pandey Guard"
      />
      <FloatingHolographicIcon
        position={[1.5, -3.2, -1]}
        color="#FF8A00"
        icon={<Flame className="w-5 h-5 text-orange-400" />}
        label="Fire Cover"
      />

      {/* NEW Layer: 18 Floating Premium Glassmorphism Category Cards (Outer Orbit Ring) */}
      {CARD_CATEGORIES.map((cat, idx) => (
        <FloatingGlassCard
          key={`card-${idx}`}
          cat={cat}
          index={idx}
          onNavigate={handleNavigate}
        />
      ))}
    </group>
  );
}

// Sub-component for individual holographic floating icons (Original design preserved)
function FloatingHolographicIcon({
  position,
  color,
  icon,
  label
}: {
  position: [number, number, number];
  color: string;
  icon: React.ReactNode;
  label: string;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Sinusoidal float offsets
    const time = state.clock.getElapsedTime();
    const uniqueOffset = position[0] * 123.45; // Deterministic phase offset
    meshRef.current.position.y = position[1] + Math.sin(time * 1.2 + uniqueOffset) * 0.25;
    meshRef.current.rotation.y = time * 0.5;
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Hologram Core Spherical Node */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : 0.4}
          roughness={0.1}
          metalness={0.9}
          transmission={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Glowing outer wireframe */}
      <mesh>
        <sphereGeometry args={[0.38, 8, 8]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
      </mesh>

      {/* Embed HTML Icon/Label inside R3F Scene */}
      <Html distanceFactor={8} position={[0, 0, 0]} center>
        <div
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 pointer-events-none select-none ${
            hovered ? "scale-110" : "scale-100"
          }`}
          style={{ width: "120px" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-navy-darkest/90 border-2 shadow-lg backdrop-blur-md"
            style={{ borderColor: color, boxShadow: hovered ? `0 0 15px ${color}` : "none" }}
          >
            {icon}
          </div>
          <span
            className="text-[9px] uppercase tracking-wider text-center mt-2.5 font-bold font-futuristic text-white bg-brand-navy-darkest/70 px-2 py-0.5 rounded-full border border-white/5 backdrop-blur-xs whitespace-nowrap"
            style={{ textShadow: `0 0 8px ${color}` }}
          >
            {label}
          </span>
        </div>
      </Html>
    </group>
  );
}

// NEW component for individual floating premium glassmorphism category cards
function FloatingGlassCard({
  cat,
  index,
  onNavigate
}: {
  cat: typeof CARD_CATEGORIES[number];
  index: number;
  onNavigate: (categoryName: string) => void;
}) {
  const cardGroupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Layout 4 on the left, 4 on the right
  const isLeft = index < 4;
  const sideIndex = index % 4;
  
  // Static coordinate positioning in 3D
  const baseX = isLeft ? -5.8 : 5.8;
  const baseY = 4.5 - (sideIndex * 3.0); 
  const baseZ = -0.5; // positioned slightly behind the main interactive rings plane

  useFrame((state) => {
    if (!cardGroupRef.current) return;

    const time = state.clock.getElapsedTime();
    // Deterministic unique floating frequencies
    const freqX = 0.4 + (index % 3) * 0.15;
    const freqY = 0.5 + (index % 2) * 0.2;
    const freqZ = 0.3 + (index % 4) * 0.1;

    // Slow independent floating motion (drifts)
    const floatX = Math.sin(time * freqX + index) * 0.22;
    const floatY = Math.cos(time * freqY + index * 2) * 0.22;
    const floatZ = Math.sin(time * freqZ + index * 3) * 0.15;

    // Apply floating offsets around base points
    cardGroupRef.current.position.x = baseX + floatX;
    cardGroupRef.current.position.y = baseY + floatY;
    cardGroupRef.current.position.z = baseZ + floatZ;

    // Slow lazy spin
    cardGroupRef.current.rotation.y = Math.sin(time * 0.15 + index * 1.5) * 0.08;
    cardGroupRef.current.rotation.x = Math.cos(time * 0.1 + index) * 0.05;
  });

  const IconComponent = cat.icon;

  return (
    <group ref={cardGroupRef}>
      {/* Invisible anchor node */}
      <mesh visible={false}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
      </mesh>

      {/* Glass card HTML element wrapper */}
      <Html distanceFactor={10} position={[0, 0, 0]} center>
        <div
          onClick={() => onNavigate(cat.name)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative group p-5 md:p-6 rounded-[24px] w-56 md:w-64 lg:w-72 bg-white/[0.14] border border-brand-gold/45 shadow-[0_8px_32px_0_rgba(212,175,55,0.08)] backdrop-blur-[20px] transition-all duration-500 ease-out cursor-pointer hover:bg-white/[0.18] hover:border-brand-gold/75 select-none overflow-hidden"
          style={{
            boxShadow: hovered 
              ? "0 12px 40px 0 rgba(212,175,55,0.22), inset 0 0 10px rgba(255,255,255,0.05)" 
              : "0 8px 32px 0 rgba(212,175,55,0.08), inset 0 0 5px rgba(255,255,255,0.02)",
            transform: hovered ? "translateY(-8px) scale(1.05)" : "translateY(0) scale(1.0)",
          }}
        >
          {/* Glass reflection gradient swipe */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />

          {/* Card Content */}
          <div className="flex items-center justify-between mb-2">
            <IconComponent 
              className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300"
              style={{ 
                color: cat.color,
                filter: hovered ? `drop-shadow(0 0 6px ${cat.color})` : "none"
              }}
            />
            <span className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-brand-gold/80 font-bold font-futuristic text-right pl-2">
              {cat.subtitle}
            </span>
          </div>

          <div className="mt-4">
            <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-bold text-white tracking-wide font-luxury leading-tight whitespace-normal break-words">
              {cat.name}
            </h4>
          </div>

          {/* Glowing dot decorative element */}
          <div 
            className="w-1.5 h-1.5 rounded-full absolute bottom-3 right-3 transition-all duration-300"
            style={{ 
              backgroundColor: cat.color,
              boxShadow: hovered ? `0 0 8px ${cat.color}` : `0 0 3px ${cat.color}60`
            }}
          />
        </div>
      </Html>
    </group>
  );
}
