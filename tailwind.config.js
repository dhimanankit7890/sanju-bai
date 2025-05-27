/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#666666',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideIn': 'slideIn 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'borderPulse': 'borderPulse 2s infinite',
        'floatIn': 'floatIn 1.2s ease-out',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'rgba(0, 0, 0, 0.1)' },
          '50%': { borderColor: 'rgba(0, 0, 0, 0.5)' },
        },
        floatIn: {
          '0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'system-ui',
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};