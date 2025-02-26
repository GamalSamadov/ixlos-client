import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,scss,css}',
    './src/**/*.module.{scss,css}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: 'var(--blue)',
          light: 'var(--blue-light)',
        },
        sky_blue: {
          DEFAULT: 'var(--sky-blue)',
          light: 'var(--sky-blue-light)',
          light_border: 'var(--sky-blue-light-border)',
        },
        purple: 'var(--purple)',
        white: {
          DEFAULT: 'var(--white)',
          hover: 'var(--white-hover)',
          blur: 'var(--white-blur)',
        },
        gray: {
          DEFAULT: 'var(--gray)',
          blur: 'var(--gray-blur)',
          hover: 'var(--gray-hover)',
        },
      },
      fontFamily: {
        poppins: ['var(--poppins)', 'sans-serif'],
        josefin_sans: ['var(--josefin-sans)', 'sans-serif'],
        naskh: ['var(--naskh)', 'sans-serif'],
        'naskh-bold': ['var(--naskh-bold)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
