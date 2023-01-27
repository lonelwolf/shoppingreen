/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
            "./node_modules/flowbite/**/.js"
            ],
  theme: {
    extend: {},
    screens: {
      'sm': '630px',
      'md': '780px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1500px',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};