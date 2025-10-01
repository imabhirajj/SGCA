/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				bg: '#0b0e14',
				surface: '#111522',
				mutedSurface: '#0f1320',
				text: '#e6e9ef',
				muted: '#aab3c5',
				primary: '#5b8cff',
				primary600: '#3e73ff',
				accent: '#00d1b2',
				warning: '#ffcc66',
				danger: '#ff6b6b',
			},
			borderRadius: {
				lg: '14px',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				heading: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

