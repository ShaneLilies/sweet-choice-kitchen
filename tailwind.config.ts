import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cream: "hsl(var(--cream))",
        chocolate: "hsl(var(--chocolate))",
        coral: "hsl(var(--coral))",
        caramel: "hsl(var(--caramel))",
        vanilla: "hsl(var(--vanilla))",
        "pink-frosting": "hsl(var(--pink-frosting))",
        berry: "hsl(var(--berry))",
        mint: "hsl(var(--mint))",
        honey: "hsl(var(--honey))",
        cinnamon: "hsl(var(--cinnamon))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 16px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'warm': '0 4px 24px -6px hsla(15, 60%, 40%, 0.12), 0 2px 8px -2px hsla(15, 60%, 40%, 0.08)',
        'warm-lg': '0 12px 40px -8px hsla(15, 60%, 40%, 0.18), 0 4px 16px -4px hsla(15, 60%, 40%, 0.12)',
        'warm-xl': '0 20px 60px -12px hsla(15, 60%, 40%, 0.22), 0 8px 24px -6px hsla(15, 60%, 40%, 0.15)',
        'glow': '0 0 30px -5px hsla(15, 70%, 50%, 0.25)',
        'inner-glow': 'inset 0 2px 20px -5px hsla(38, 90%, 60%, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent 0%, hsla(var(--primary-foreground), 0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;