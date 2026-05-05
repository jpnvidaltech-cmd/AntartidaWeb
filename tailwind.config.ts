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
        // Brand palette — extraída del logo Antartida Labs
        "arctic-navy": {
          DEFAULT: "#0D1B2A",
          50: "#e8edf2",
          100: "#c5d2de",
          200: "#9fb5c8",
          300: "#7896b1",
          400: "#577f9f",
          500: "#3a6a8e",
          600: "#2e567a",
          700: "#1f3d5c",
          800: "#122840",
          900: "#0D1B2A",
          950: "#070e16",
        },
        "glaciar-neon": {
          DEFAULT: "#00C8E0",
          50: "#e0f9fc",
          100: "#b3f0f7",
          200: "#7fe6f2",
          300: "#4ddcec",
          400: "#1ed4e7",
          500: "#00C8E0",
          600: "#00a8bc",
          700: "#008799",
          800: "#006878",
          900: "#004a57",
        },
        "frost-white": {
          DEFAULT: "#F0F8FF",
          50: "#ffffff",
          100: "#F0F8FF",
          200: "#ddf0ff",
          300: "#c5e8ff",
          400: "#a8dcff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "arctic-gradient":
          "linear-gradient(135deg, #0D1B2A 0%, #122840 50%, #0a2240 100%)",
        "neon-gradient":
          "linear-gradient(135deg, #00C8E0 0%, #0099aa 100%)",
        "frost-gradient":
          "linear-gradient(180deg, #0D1B2A 0%, #0f2035 60%, #0D1B2A 100%)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 200, 224, 0.3), 0 0 60px rgba(0, 200, 224, 0.1)",
        "neon-lg":
          "0 0 40px rgba(0, 200, 224, 0.4), 0 0 100px rgba(0, 200, 224, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
