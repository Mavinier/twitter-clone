const brandColors = {
  richBlack: '#15202B',
  onix: '#333639',
  silver: '#71767B',
  platinum: '#E7E9EA',
  birdBlue: '#1D9BF0',
};

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,

        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum,        
      }
    },
  },
  plugins: [],
};
