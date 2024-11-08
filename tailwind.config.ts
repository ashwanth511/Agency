import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        freelancer_orange: '#FE5824',
        freelancer_black: '#101828',
        freelancer_gray: '#475467',
        freelancer_cream: '#F7E9D1',
        border: 'rgba(220, 220, 220, 0.80)',
      },
      fontFamily: {
        sans: ['var(--font-helvetica)'],
      },
    },
  },
  plugins: [],
};
export default config;
