import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                sand: {
                    50: "#f9f5f0",
                    100: "#f0e6d8",
                    200: "#e4d2b8",
                    300: "#d4b785",
                    400: "#c19758",
                    500: "#a7753d",
                    600: "#8a5a2f",
                    700: "#714829",
                    800: "#5e3c25",
                    900: "#4f3220"
                },
                teal: {
                    50: "#e7f8f7",
                    100: "#c4ede8",
                    200: "#9be0d7",
                    300: "#65ccbe",
                    400: "#2eaf9c",
                    500: "#1d9f8c",
                    600: "#117b6c",
                    700: "#0f6257",
                    800: "#0f4f47",
                    900: "#0f423c"
                }
            },
            fontFamily: {
                display: ["'DM Sans'", "'Segoe UI'", "system-ui", "sans-serif"],
                body: ["'Inter'", "'Segoe UI'", "system-ui", "sans-serif"]
            },
            boxShadow: {
                soft: "0 24px 70px rgba(0,0,0,0.08)",
                glow: "0 0 0 10px rgba(29,159,140,0.08)"
            }
        }
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};

export default config;
