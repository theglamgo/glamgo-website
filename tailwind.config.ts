import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Glamgo brand — mirrors the mobile app's approved cream/champagne palette.
        brand: {
          bg: "#FBF9F4",            // cream canvas
          surface: "#FFFFFF",
          muted: "#FAF7F2",
          primary: "#0F0E13",       // deep charcoal
          gold: "#B58863",          // warm champagne bronze
          goldSoft: "#D4A574",
          goldTint: "#F7F1E8",
          text: "#0F0E13",
          textMuted: "#75706A",
          border: "#EAE4D9",
          borderLight: "#F2EFEB",
          success: "#2F6B5A",
          error: "#B14444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "18px", "2xl": "26px" },
      boxShadow: {
        soft: "0 8px 24px rgba(15,14,19,0.06)",
        gold: "0 4px 20px rgba(181,136,99,0.20)",
      },
    },
  },
  plugins: [],
};
export default config;
