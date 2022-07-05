/** @type {import('tailwindcss').Config} */
const lightShadowColor = '#BABECC';
const lightReflectColor = '#FFFFFF';
const darkShadowColor = '#070a10';
const darkReflectColor = '#1b263e';

module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: '#EBECF0',
				dark: '#111827',
				color0: '#00ADB5',
			},
			keyframes: {
				fromLeft: {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				fromRight: {
					'0%': {
						transform: 'translateX(100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
			},
			animation: {
				slideFromLeft: 'fromLeft 0.4s',
				slideFromRight: 'fromRight 0.4s',
			},
			boxShadow: {
				light: `2px 2px 5px ${lightShadowColor}`,
				dark: `2px 2px 5px ${darkShadowColor}`,
				lightOuter: `2px 2px 5px ${lightShadowColor}, -2px -2px 5px ${lightReflectColor}`,
				lightOuterLong: `5px 5px 20px ${lightShadowColor}, -5px -5px 20px ${lightReflectColor}`,
				lightOuterShort: `1px 1px 2px ${lightShadowColor}, -1px -1px 2px ${lightReflectColor}`,
				lightInner: `inset 2px 2px 5px ${lightShadowColor}, inset -2px -2px 5px ${lightReflectColor}`,
				lightInnerShort: `inset 1px 1px 2px ${lightShadowColor}, inset -1px -1px 2px ${lightReflectColor}`,
				lightInnerLong: `inset 5px 5px 20px ${lightShadowColor}, inset -5px -5px 20px ${lightReflectColor}`,
				darkOuter: `2px 2px 5px ${darkShadowColor}, -2px -2px 5px ${darkReflectColor}`,
				darkOuterLong: `5px 5px 20px ${darkShadowColor}, -5px -5px 20px ${darkReflectColor}`,
				darkOuterShort: `1px 1px 2px ${darkShadowColor}, -1px -1px 2px ${darkReflectColor}`,
				darkInner: `inset 2px 2px 5px ${darkShadowColor}, inset -2px -2px 5px ${darkReflectColor}`,
				darkInnerShort: `inset 1px 1px 2px ${darkShadowColor},inset -1px -1px 2px ${darkReflectColor}`,
				darkInnerLong: `inset 5px 5px 20px ${darkShadowColor}, inset -5px -5px 20px ${darkReflectColor}`,
			},
		},
	},
	plugins: [],
};
