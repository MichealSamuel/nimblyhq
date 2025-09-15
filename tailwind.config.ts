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
        portal: {
          primary: "hsl(var(--portal-primary))",
          secondary: "hsl(var(--portal-secondary))",
          glow: "hsl(var(--portal-glow))",
          deep: "hsl(var(--portal-deep))",
          surface: "hsl(var(--portal-surface))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-portal": "var(--gradient-portal)",
        "gradient-hero": "var(--gradient-hero)",  
        "gradient-glow": "var(--gradient-glow)",
      },
      boxShadow: {
        "portal": "var(--shadow-portal)",
        "glow": "var(--shadow-glow)",
        "elevation": "var(--shadow-elevation)",
      },
      transitionProperty: {
        "portal": "var(--transition-portal)",
        "glow": "var(--transition-glow)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "var(--shadow-glow)",
          },
          "50%": {
            boxShadow: "0 0 60px hsl(var(--portal-glow) / 0.5)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "welcome-fade": {
          "0%": {
            opacity: "0",
            background: "hsl(220 27% 4%)",
          },
          "100%": {
            opacity: "1",
            background: "var(--gradient-hero)",
          },
        },
        "title-reveal": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8) translateY(30px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0px)",
            filter: "blur(0px)",
          },
        },
        "slide-up-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "slide-left-fade": {
          "0%": {
            opacity: "0",
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        "slide-right-fade": {
          "0%": {
            opacity: "0",
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) translateY(20px)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05) translateY(-5px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0px)",
          },
        },
        "particles-fade": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "0.2",
            transform: "scale(1)",
          },
        },
        "curtain-reveal": {
          "0%": {
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "welcome-fade": "welcome-fade 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "title-reveal": "title-reveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "slide-up-fade": "slide-up-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-left-fade": "slide-left-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-right-fade": "slide-right-fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "bounce-in": "bounce-in 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "particles-fade": "particles-fade 2s ease-out forwards",
        "curtain-reveal": "curtain-reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
