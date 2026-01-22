/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0C0C0C',
          card: '#1A1A1A',
          border: '#1F1F1F',
          green: '#22C55E',
          blue: '#3B82F6',
          orange: '#F59E0B',
          red: '#EF4444',
          text: '#E5E5E5',
          muted: '#737373',
          dim: '#525252',
        },
      },
    },
  },
  plugins: [],
};
