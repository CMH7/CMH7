/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'axion-home': "url('images/Axion.png')",
				'dp': "url('images/dp.jpg')"
			},
			colors: {
				'Teal': '#64ffda',
				'PrimaryBlue': '#081426',
				'MidBlue': '#112240',
				'SecondBlue': '#0a192f',
				'Def': '#6d758d',
				'DefLight': '#8892B0',
				'Highlight': '#ccd6f6',
				'DarkChoco': '#685345',
				'Choco': '#ad8b73',
				'Mocha': '#ceab93',
				'DarkTan': '#e3caa5',
				'Tan': '#e9d5b7',
				'LightTan': '#fffbe9'
			},
		}
	},
	plugins: []
};
