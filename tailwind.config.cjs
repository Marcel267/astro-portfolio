/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*/.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ['dracula'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		// themes: [
		// 	{
		// 	  mytheme: {
		// 		"primary": "#f44336",
		// 		"secondary": "#f6d860",
		// 		"accent": "#37cdbe",
		// 		"neutral": "#3d4451",
		// 		"base-100": "#ffffff",
		// 	  },
		// 	},
		//   ],

		// themes: [
		// 	{
		// 	  mytheme: {
		// 		...require("daisyui/src/theming/themes")["dracula"],
		// 		primary: "#7480ff",
		// 		secondary: "#ff52d9",
		// 	  },
		// 	},
		//   ],
		//   darkTheme: 'mytheme',

		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}