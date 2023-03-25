module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}', "./node_modules/flowbite/**/*.js"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
			colors: {
				"rich-black": "#0d1b2aff",
				"oxford-blue": "#1b263bff",
				"yinmn-blue": "#415a77ff",
				"silver-lake-blue": "#778da9ff",
				"platinum": "#e0e1ddff",
			}
		},
	},
	plugins: [require('flowbite/plugin')],
};
