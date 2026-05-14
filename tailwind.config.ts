import type { Config } from "tailwindcss";

const tokenColor = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: tokenColor("background"),
        surface: tokenColor("surface"),
        "surface-bright": tokenColor("surface-bright"),
        "surface-dim": tokenColor("surface-dim"),
        "surface-variant": tokenColor("surface-variant"),
        "surface-container-lowest": tokenColor("surface-container-lowest"),
        "surface-container-low": tokenColor("surface-container-low"),
        "surface-container": tokenColor("surface-container"),
        "surface-container-high": tokenColor("surface-container-high"),
        "surface-container-highest": tokenColor("surface-container-highest"),
        primary: tokenColor("primary"),
        "on-primary": tokenColor("on-primary"),
        "primary-container": tokenColor("primary-container"),
        "on-primary-container": tokenColor("on-primary-container"),
        "primary-fixed": tokenColor("primary-fixed"),
        "primary-fixed-dim": tokenColor("primary-fixed-dim"),
        "inverse-primary": tokenColor("inverse-primary"),
        secondary: tokenColor("secondary"),
        "on-secondary": tokenColor("on-secondary"),
        "secondary-container": tokenColor("secondary-container"),
        "on-secondary-container": tokenColor("on-secondary-container"),
        "secondary-fixed": tokenColor("secondary-fixed"),
        "secondary-fixed-dim": tokenColor("secondary-fixed-dim"),
        "on-secondary-fixed": tokenColor("on-secondary-fixed"),
        tertiary: tokenColor("tertiary"),
        "on-tertiary": tokenColor("on-tertiary"),
        "tertiary-container": tokenColor("tertiary-container"),
        "on-tertiary-container": tokenColor("on-tertiary-container"),
        "on-background": tokenColor("on-background"),
        "on-surface": tokenColor("on-surface"),
        "on-surface-variant": tokenColor("on-surface-variant"),
        outline: tokenColor("outline"),
        "outline-variant": tokenColor("outline-variant"),
        "inverse-surface": tokenColor("inverse-surface"),
        "inverse-on-surface": tokenColor("inverse-on-surface"),
        error: tokenColor("error"),
        "on-error": tokenColor("on-error"),
        "error-container": tokenColor("error-container"),
        "on-error-container": tokenColor("on-error-container"),
      },
      fontFamily: {
        display: ["Metropolis", "system-ui", "sans-serif"],
        headline: ["Metropolis", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        label: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "max-width": "1440px",
      },
      maxWidth: {
        "max-width": "1440px",
      },
      borderRadius: {
        full: "9999px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
