import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#1b5bf7",
        dark:"#18191f",
        secondary:"#464359",
        cardbg:"#e0e8ff",
        background:"aliceblue",
        deliverycolor:"#FF5722",
        deliverybg:"rgba(255, 87, 34, 0.2)",
        goodzonecolor:"#F50000",
        goodzonebg:"rgba(245,0,0,0.2)",
        smsuzcolor:"#4473E5",
        smsuzbg:"rgba(68,115,229,0.2)",
        imancolor:"#01CAB0",
        imanbg:"rgba(1,202,176,0.2)",
        contact:"#0f001a",
        absaluteIcon:"rgba(68,103,232, 1)",
        absaluteNav:"#999",
        absaluteCard:"#e8e8e8",
      },
      boxShadow:{
        boxshadow:'2px 10px 28px rgba(75,0,129,.12)',
        shad:"0 1px 1px rgb(0 0 0/7%),0 2px 2px rgb(0 0 0/7%),0 4px 4px rgb(0 0 0/7%),0 8px 8px rgb(0 0 0/7%),0 16px 16px rgb(0 0 0/7%)"
      },
      padding:{
        padding:'40px 98px 88px',
        pInput:"18.5px 14px"
      },
      fontFamily:{
        manrope:"Manrope,sans-serif"
      },
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      ww:"900px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px"
    }
  },
  plugins: [],
};
export default config;
