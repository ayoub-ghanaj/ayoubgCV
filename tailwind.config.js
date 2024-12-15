import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-sans)'
  			],
  			mono: [
  				'var(--font-mono)'
  			]
  		},
  		animation: {
			'logo-cloud': 'scroll 20s linear infinite',
			'btn-shimmer': 'shimmer 2s linear infinite',
		  },
		  keyframes: {
			scroll: {
			  '0%': { transform: 'translateX(0)' },
			  '100%': { transform: 'translateX(-100%)' },
			},
			shimmer: {
			  '0%': { backgroundPosition: '200% 0' },
			  '100%': { backgroundPosition: '-200% 0' },
			},
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  darkMode: ["class"],
  plugins: [nextui()],
}
