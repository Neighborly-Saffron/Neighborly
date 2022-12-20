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
      'darkerblue': '#EB4D2A',
      'lighterblue': '#FFFFFF', //feed
      'darkergreen': '#354e19',
      'lightergreen': '#FFFFFF', //nav bar
      'goodgreen': '#22604E',
      'wizardred': 'red',
      'lightgray': 'lightgray',
      'darkgrey': '#5A5A5A',
      'lightlighterblue' : '#4BC0D9',
      'crazygreen' : '#EB4D2A',
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


/*
Medium turqouise- #6AD5CB

*/