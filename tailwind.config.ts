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
        primary: { DEFAULT: "#EB6B2A" },
        slate: "#252E3D",
        amber: "#FCB002",
        darkgray: "#333333",
        gray1: "#9F9D9D",
        gray2: "#D9D9D9",
        lightgray: "#EDEDED",
        lightergray: "#F2F2F2",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        DEFAULT: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
