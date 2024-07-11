import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      "2md": "880px",
      lg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
      " max-xl": "2000px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "2000px",
      },
    },
    extend: {
      colors: {
        accent: "#D2412E",
        primary: "#7985d4",
        primaryAccent: "#23313e",
        lightBg: "#f4f8fa",
      },
      spacing: {
        "header-height": "var(--header-height)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scaleIn: 'scaleIn 1s forwards',
        scaleOut: 'scaleOut 1s forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config