/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Background
        bg: {
          primary: "var(--color-bg-primary)",
          footer: "var(--color-bg-footer)",
          light: "var(--color-bg-light)",
          button: "var(--color-btn-primary-bg)",
          "button-hover": "var(--color-btn-primary-bg-hover)",
          "button-active": "var(--color-btn-bg-active)",
          "button-inactive": "var(--color-btn-bg-inactive)",
          icon: "var(--color-icon-primary-bg)",
          banner: "var(--color-banner-primary-bg)",
          navbar: "var(--color-nav-primary-bg)",
          switch: "var(--color-sw-primary-bg)",
          card: "var(--color-card-primary-bg)",
        },

        // Svg
        svg: {
          icon: "var(--color-icon-primary-svg)",
          banner: "var(--color-banner-primary-svg)",
        },

        // Text
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          thirty: "var(--color-text-thirty)",
          name: "var(--color-text-name)",
          exp: "var(--color-text-exp)",
          icon: "var(--color-icon-primary-label)",
          banner: "var( --color-banner-primary-label)",
          button: "var(--color-btn-primary-label)",
          "button-active": "var(--color-btn-text-active)",
          "button-inactive": "var(--color-btn-text-inactive)",
          "card-title": "var(--color-card-primary-title)",
          "card-description": "var(--color-card-primary-label)",
        },

        // Shadow
        shadow: { xs: "var(--color-shadow-xs)" },

        // Border
        border: {
          dashed: "var(--color-border-dashed)",
          left: "var(--color-border-left)",
        },
      },
    },
  },
  plugins: [],
};
