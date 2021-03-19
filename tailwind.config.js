module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        '17': '-17deg',
        
    },
    skew: {
      'min-12': '-12deg',
      'min-6': '-6deg'
      
     },
     screens: {
      'xs': '305px',
    
    },
  } 
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
