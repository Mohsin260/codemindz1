/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-down_1s_ease-in-out]',
      'animate-[spinner-Grow_1s_ease-in-out]'
    ],
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
