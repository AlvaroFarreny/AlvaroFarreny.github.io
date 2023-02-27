module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}', "./node_modules/flowbite/**/*.js"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
