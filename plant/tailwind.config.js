/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        WhiteSuave:'#F2ECE1',
        Cafe:'#a52a2a',
        Fondo:'#F4D993',
        Containers:'#f8f8ff',
        Footer: '#deb887',
      },
      keyframes:{
        'slide-left-to-right':{
          '0%':{
            transform: 'translateX(23rem)'
          },
          '50%': {
            transform: 'translateX(-5rem)' 
          },
          '100%': {
            transform: 'translateX(0rem)' 
          },  
        },

        'slide-left-to-right2':{
          '0%':{
            transform: 'translateX(23rem)'
          },
          '50%': {
            transform: 'translateX(-5rem)' 
          },
          '100%': {
            transform: 'translateX(0rem)' 
          },  
        },

        'slide-right-to-left':{
          '0%':{
            transform: 'translateX(-23rem)'
          },
          '50%': {
            transform: 'translateX(5rem)' 
          },
          '100%': {
            transform: 'translateX(0rem)' 
          },  
        },

        'slide-top':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top2':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top3':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top4':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top5':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
      },
      animation: {
        'slide-left': 'slide-left-to-right 1s ease-in-out',
        'slide-left2': 'slide-left-to-right2 1.5s ease-in-out',
        'slide-right': 'slide-right-to-left 1s ease-in-out',
        'slide-top': 'slide-top 0.8s ease-in-out',
        'slide-top2': 'slide-top 1s ease-in-out',
        'slide-top3': 'slide-top 1.2s ease-in-out',
        'slide-top4': 'slide-top 1.4s ease-in-out',
        'slide-top5': 'slide-top 1.6s ease-in-out',
      },
    },
  },
  plugins: [],
}