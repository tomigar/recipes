import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#5468ff",
            },
        },
    },
    safelist: [],
};
