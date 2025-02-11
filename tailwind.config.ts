import type { Config } from 'tailwindcss';

export default {
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
        'tva-orange': '#FFB857',
      },
      screens: {
        mobile: '480px',
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, css: string) => void }) {
      addVariant('supports-hover', '@media (hover: none)');
    },
    function ({ addVariant }: { addVariant: (name: string, css: string) => void }) {
      addVariant('no-hover', '@media (hover: none)');
    },
  ],
} satisfies Config;
