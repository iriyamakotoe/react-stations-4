/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			white: '#ffffff',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			green: '#13ce66',
			yellow: '#ffc82c',
			gray: {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#fed7aa',
				300: '#e5e7eb',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
			},
			orange: {
				50: '#fff7ed',
				100: '#ffedd5',
				200: '#fed7aa',
				300: '#fdba74',
				400: '#fb923c',
				500: '#f97316',
				600: '#ea580c',
				700: '#c2410c',
				800: '#9a3412',
				900: '#7c2d12',
			},
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
}
