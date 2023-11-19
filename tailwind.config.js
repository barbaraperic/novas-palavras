/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#033EA6",
				gray: "hsl(0, 0%, 96%)",
				mediumGray: "hsl(0, 0%, 87%)",
				// darkGray: "hsl(0, 0%, 33%)",
				dark: "hsl(0, 0%, 30%)",
				red: "hsl(7, 100%, 81%)",
				yellow: "hsl(60, 100%, 90%)",
				emmerald: "hsl(174, 81%, 32%)",
				sapphire: "#2138AB",
				eagle: "#B6BAA4",
				deepOak: "#3d260e",
				sepia: "#704214",
			},
			backgroundColor: {
				primary: "#FFFFFF",
				secondary: "#033EA6",
				secondaryLight: "#0451d8",
				greenishYellow: "#FFF9F2",
				deepOak: "#3d260e",
				// greenishYellow: "#6068AF",
				eagle: "#B6BAA4",
				// eagle: "#54DAD9",
			},
			fontFamily: {
				body: "var(--body-font)",
				headings: "var(--headings-font)",
			},
		},
	},
	plugins: [],
};
