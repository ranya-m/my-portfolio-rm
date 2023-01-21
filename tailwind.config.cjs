/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  colors: {
     tranparent: 'tranparent',
     spaceBlue: '#300BB2',
     spacePurple:'#6D0EB1',
     mylight: '#f5f3ff',
     mylightOpaque: '#f1f1f15a',
     mydark: '#00172d',
     pink: '#ED1C94',
     yellow: '#FDE519',
     myblue: '#0091D5',
     myorange: '#F4470B',
     mylightblue: '#48CEF7',
     myred: '#F72C1F',
     mylavander: '#7377AD',
  },
    extend: {
      fontFamily: {
        display: ['Pally', 'Comic Sans MS', 'sans-serif'],
        body: ['Pally', 'Comic Sans MS', 'sans-serif'],
      },
  },
 
},
plugins: [],
}

