/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        surface: {
          DEFAULT: "#11111a",
          light: "#1a1a24",
        },
        accent: {
          DEFAULT: "#a855f7",
          soft: "#c4b5fd",
          dark: "#7c3aed",
          darker: "#581c87",
        },
        glow: {
          cyan: "#22d3ee",
          violet: "#a855f7",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(120deg, #ffffff 0%, #c4b5fd 45%, #22d3ee 100%)",
        "gradient-title": "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.72) 100%)",
        "gradient-accent": "linear-gradient(135deg, #a855f7, #7c3aed)",
        "gradient-bar": "linear-gradient(90deg, #a855f7, #22d3ee)",
        "gradient-card": "linear-gradient(160deg, #0b0b14, #060610)",
        "gradient-conic": "conic-gradient(from 0deg, transparent 0deg, rgba(168, 85, 247, 0.9) 60deg, rgba(34, 211, 238, 0.7) 120deg, transparent 200deg, transparent 360deg)",
      },
      fontSize: {
        "title-sm": "clamp(2.75rem, 7vw, 5rem)",
        "subtitle-sm": "clamp(1.2rem, 2.4vw, 1.75rem)",
      },
      letterSpacing: {
        "eyebrow": "0.18em",
        "tight-tight": "-0.03em",
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        marqueeCopy: "marqueeCopy 100s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-a": "floatA 9s ease-in-out infinite",
        "float-b": "floatB 11s ease-in-out infinite",
        ping: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 1.6s ease-in-out infinite",
        "scroll-wheel": "scrollWheel 1.8s ease-in-out infinite",
        "hero-fade-up": "heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-fade-in": "heroFadeIn 0.9s ease-out forwards",
        spin: "spin 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        marqueeCopy: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        ping: {
          "75%, 100%": { transform: "scale(2.4)", opacity: "0" }
        },
        scrollWheel: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" }
        },
        heroFadeUp: {
          to: { opacity: "1", transform: "translateY(0)" }
        },
        heroFadeIn: {
          to: { opacity: "1" }
        },
        floatA: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-20px, 25px)" }
        },
        floatB: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(25px, -20px)" }
        },
        spin: {
          to: { transform: "rotate(360deg)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" }
        }
      },
    },
  },
  plugins: [],
};
