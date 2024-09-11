/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, addDynamicIconSelectors()],
};
