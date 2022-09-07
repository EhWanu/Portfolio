/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./*.html"],
	theme: {
		extend: {
			screens: {
				sm: "480px",
				md: "768px",
				lg: "1024px",
				xl: "1280",
			},
			spacing: {
				big: "48rem",
			},
		},
		fontFamily: {
			nunito: ["Nunito", "sans-serif"],
		},
	},
	plugins: [],
};
