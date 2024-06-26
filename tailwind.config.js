/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryshade1: '#d90e15',
        primaryshade2: '#ae0b11',
        primaryshade3: '#82080d',
        primaryshade4: '#570608',
        primaryshade5: '#2b0304',

        secondaryshade1: '#016c31',
        secondaryshade2: '#015627',
        secondaryshade3: '#01411d',
        secondaryshade4: '#002b14',
        secondaryshade5: '#00160a',

        infoshade1: '#ffe081',
        infoshade2: '#ccb367',
        infoshade3: '#ffe69a',
        infoshade4: '#99864d',
        infoshade5: '#ffecb3',
        infoshade6: '#fff9e5',

        sanluisblack: '#263238',
        sanluisdgrey: '#4D4D4D',
        sanluisgrey: '#717171',
        sanluislgrey: '#ABBED1',
        sanluisgreyblue: '#F5F7FA',
      },
    },
  },
  plugins: [],
}

