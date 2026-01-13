import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f766e",
          light: "#0ea5a5"
        },
        accent: "#f59e0b"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 118, 110, 0.15)",
        "dark-lg": "0 10px 40px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        "2.5xl": "1.375rem"
      },
      backgroundImage: {
        "body-gradient":
          "radial-gradient(circle at top, rgba(14,165,165,0.16), transparent 55%), radial-gradient(circle at bottom, rgba(245,158,11,0.12), transparent 55%)",
        "body-gradient-dark":
          "radial-gradient(circle at top, rgba(14,165,165,0.08), transparent 55%), radial-gradient(circle at bottom, rgba(245,158,11,0.06), transparent 55%)"
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
