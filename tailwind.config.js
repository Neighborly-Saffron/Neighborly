/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./Client/src/**/*.{js,jsx}','./public/index.html'],
	darkMode: 'class',
	theme: {
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
			'white' : '#FFFFFF',
			'black' : '#000000',
      'darkerblue': '#87c4f0',
      'lighterblue': '#aaddf2',
      'darkergreen': '#354e19',
      'lightergreen': '#47AA51',
      'goodgreen': '#22604E',
      'wizardred': 'red',
      'lightgray': 'lightgray',
      'darkgrey': '#5A5A5A'
    },
		extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "calendar": "72px"
      }),
      backgroundImage: {
        logo: "url(/public/logo.png)"
      }
    },
	},
	plugins: [],
};
