
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Orbitron', 'Share Tech Mono', 'system-ui', 'sans-serif'],
				mono: ['Share Tech Mono', 'SF Mono', 'Menlo', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				code: {
					DEFAULT: '#0A1120',
					foreground: '#E2F3F4'
				},
				'code-blue': '#0CF7FF',
				'code-green': '#26F09B', 
				'code-purple': '#A277FF',
				'code-red': '#FF5277',
				'code-yellow': '#FFCC00',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideInRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				glitch: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				// New sci-fi animations
				scanline: {
					'0%': { transform: 'translateY(-100%)' },
					'50%, 100%': { transform: 'translateY(100%)' }
				},
				blink: {
					'0%, 49%, 51%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				dataStream: {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '0% 100%' }
				},
				hologram: {
					'0%, 100%': { opacity: '0.8', filter: 'hue-rotate(0deg)' },
					'50%': { opacity: '1', filter: 'hue-rotate(30deg)' }
				},
				circuit: {
					'0%': { backgroundSize: '100%', opacity: '0.8' },
					'50%': { backgroundSize: '105%', opacity: '1' },
					'100%': { backgroundSize: '100%', opacity: '0.8' }
				},
				radar: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				typing: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				caret: {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--primary))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-in-right': 'slideInRight 0.5s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
				'pulse-slow': 'pulse 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'shimmer': 'shimmer 2s infinite linear',
				'glitch': 'glitch 0.8s ease-in-out infinite alternate',
				// New sci-fi animation classes
				'scanline': 'scanline 3s linear infinite',
				'blink': 'blink 2s infinite',
				'data-stream': 'dataStream 10s linear infinite',
				'hologram': 'hologram 4s ease-in-out infinite',
				'circuit': 'circuit 6s ease-in-out infinite',
				'radar': 'radar 5s linear infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'caret': 'caret 0.75s step-end infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-noise': 'url("/noise.png")',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(0,255,255,0) 0%, rgba(0,255,255,0.1) 25%, rgba(0,255,255,0.1) 75%, rgba(0,255,255,0) 100%)',
				'cyber-gradient': 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'subtle': '0 2px 10px rgba(0, 0, 0, 0.15)',
				'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)',
				'spotlight': '0 0 25px rgba(0, 60, 60, 0.2)',
				'neon': '0 0 10px hsl(var(--primary) / 30%), 0 0 20px hsl(var(--primary) / 20%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
