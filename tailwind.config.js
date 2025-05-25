/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'atlas': {
          'navy': '#1a2b3d',
          'deep-blue': '#2c4a6d',
          'sky': '#5b8fb9',
          'light-sky': '#a8c7e0',
          'gold': '#d4a574',
          'warm-gold': '#e6c09a',
          'coral': '#e67e5b',
          'light-coral': '#f4a582',
          'sage': '#87a878',
          'cream': '#faf7f2',
          'sand': '#f5e6d3',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out infinite',
        'dash': 'dash 20s linear infinite',
        'dash-reverse': 'dash-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        dash: {
          to: { strokeDashoffset: '-10' },
        },
        'dash-reverse': {
          to: { strokeDashoffset: '10' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.05'%3E%3Cpath d='M0 0h1v1H0zM39 0h1v1h-1zM0 39h1v1H0zM39 39h1v1h-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'compass-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c4a6d' fill-opacity='0.03'%3E%3Cpath d='M30 30l15-15M30 30l15 15M30 30l-15 15M30 30l-15-15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
};