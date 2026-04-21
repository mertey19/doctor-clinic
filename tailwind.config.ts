import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        float: "float 8s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(37, 99, 168, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 168, 0.04) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 168, 0.12), transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
