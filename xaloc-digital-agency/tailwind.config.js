/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xaloc: {
          charcoal: '#1A1A1A',
          orange: '#FF6B35',
          yellow: '#FFB800',
          coral: '#FF3366',
          beige: '#F5F5F5',
        },
        gray: {
          900: '#1A1A1A',
          800: '#2D2D2D',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
          200: '#E5E5E5',
          100: '#F5F5F5',
        },
        orange: {
          500: '#FF6B35',
          400: '#FF8A65',
          300: '#FFAB91',
        },
        yellow: {
          400: '#FFB800',
          300: '#FFC947',
        },
        pink: {
          500: '#FF3366',
          400: '#FF5983',
        }
      },
      fontFamily: {
        primary: ['Inter', 'Helvetica Neue', 'sans-serif'],
        display: ['Orbitron', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-word': 'slide-in-word 0.8s ease-out',
        'video-fade-in': 'video-fade-in 1s ease-in-out forwards',
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          glow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.8)' },
          },
          'pulse-glow': {
            '0%, 100%': { 
              opacity: '0.3',
              transform: 'scale(1)' 
            },
            '50%': { 
              opacity: '0.8',
              transform: 'scale(1.1)' 
            },
          },
          'slide-in-right': {
            from: {
              opacity: '0',
              transform: 'translateX(100px)'
            },
            to: {
              opacity: '1',
              transform: 'translateX(0)'
            },
          },
          'slide-in-left': {
            from: {
              opacity: '0',
              transform: 'translateX(-100px)'
            },
            to: {
              opacity: '1',
              transform: 'translateX(0)'
            },
          },
          'fade-in-up': {
            from: {
              opacity: '0',
              transform: 'translateY(30px)'
            },
            to: {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
          'slide-in-word': {
            '0%': { 
              opacity: '0',
              transform: 'translateX(-20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          'video-fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      }
    },
  },
  plugins: [],
}
