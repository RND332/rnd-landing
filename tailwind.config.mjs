/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			keyframes: {
				"gradient-shift": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				"socials-shift": {
					"100%": { transform: "translateY(-384px)" },
				},
			},
			animation: {
				gradient: "gradient-shift 4s ease infinite",
				socials: "socials-shift 10s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
