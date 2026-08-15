/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#FAF7F2',
        bgSurface: '#FFFFFF',
        bgCard: '#FAF6F0',
        bgCardHover: '#F3ECE2',
        bgDark: '#191410',
        bgDarkSurface: '#251E18',
        textPrimary: '#1C1510',
        textSecondary: '#5C5248',
        textMuted: '#8C8074',
        accentEspresso: '#2C1A11',
        accentAmber: '#C86D43',
        accentAmberHover: '#B55C33',
        accentGold: '#D4A359',
        accentMatcha: '#2D5A46',
        accentMatchaLight: '#E8F2EC',
        accentBerry: '#8B3A4C',
        borderLight: '#E8DFD3',
        borderMedium: '#D5C7B4',
        borderDark: '#3D3228',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
}
