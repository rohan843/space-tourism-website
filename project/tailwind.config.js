/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/home/background-home-desktop.jpg')",
        crew: "url('./assets/crew/background-crew-desktop.jpg')",
        destination: "url('./assets/destination/background-destination-desktop.jpg')",
        tech: "url('./assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
