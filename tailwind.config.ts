import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      hero: "polygon(0 0, 100% 0, 100% 10%, 0 50%);",
      features: "polygon(0 0, 100% 0, 100% 0%, 0 100%);",
    },
    extend: {
      colors: {
        my_color_1: "#635BFF",
        my_color_2: "#00d4ff",
        my_color_3: "#0CE88B",
        my_color_black: "#0D0D0D",
        my_color_dark_gray: "#262626",
        my_color_title: "#0A2540",
        my_color_text: "#425466",
        my_color_background: "#fff",
        my_color_light_background: "#f6f9fc",
        my_color_dark_background: "#0a2540",
        my_color_border: "#e5e7eb",
        my_color_text_dark_background: "#adbdcc",
        my_color_text_link_hover: "#fff",
      },
      maxWidth: {
        my_max_width: "82.5rem",
      },
      gap: {
        my_gap_lg: "3rem",
        my_gap: "1.5rem",
        my_gap_sm: "0.5rem",
      },
      borderRadius: {
        my_border_radius: "0.5rem",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
