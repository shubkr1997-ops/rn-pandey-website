import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#112255",
            darkest: "#0A1628",
            dark: "#112255",
            medium: "#1E3A7A",
            light: "#2E5AAC",
            slate: "#2D4070",
          },
          gold: {
            DEFAULT: "#D4AF37", // Premium Gold
            dark: "#AA820A",
            light: "#F3E5AB",
            pale: "#FFF8DC",
            bright: "#FFD700",
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse-slow": "spin-reverse 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-1.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        }
      },
      boxShadow: {
        "gold-glow": "0 0 15px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 30px rgba(212, 175, 55, 0.4)",
        "blue-glow": "0 0 25px rgba(21, 57, 124, 0.3)",
        "glass": "0 8px 32px 0 rgba(3, 7, 18, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
};
export default config;
