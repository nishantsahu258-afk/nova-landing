/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1016',
          soft: '#151824',
          line: '#262B3A',
        },
        paper: {
          DEFAULT: '#FAF9F6',
          soft: '#F1EFE9',
          line: '#E4E1D8',
        },
        signal: {
          DEFAULT: '#FFB238',
          dim: '#C98A24',
          bright: '#FFCB70',
        },
        ember: '#FF6A3D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        starfield: "radial-gradient(circle at 20% 20%, rgba(255,178,56,0.10), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,106,61,0.08), transparent 35%)",
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        burst: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        burst: 'burst 1.2s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
