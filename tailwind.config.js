/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg':'url(/src/assets/images/CTA.png)'
      },
      keyframes :{
        fade:{
          '0%, 100%':{opacity:'0'},
          '50%':{opacity:'1'}
        },
      },
      animation:{
        fade:'fade 5s ease-in-out infinite',
      },
      colors:{
        darkGray:'#0f0e17',
        lightGray:'#232323',
        glowLeft:'#4000ff',
        glowRight:'#ff0072'
      },
      boxShadow:{
        'left-glow':'-10px 0 30px 10px rgba(64,0,255,0.5)',
        'right-glow':'-10px 0 30px 10px rgba(255,0,114,0.5)',
      },
    },
  },
  plugins: [],
}

