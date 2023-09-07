import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      red: '#944654',
      black: '#020202',
      beige: '#F7F4EA',
      white: '#FFFFFF',
      gray: '#9DA2AB',
      blue1: '#8EB8E5',
      blue2: '#7C99B4',
    },
    fontFamily: {
      chainprinter: ['chainprinter', 'sans-serif'],
      liquorstore3d: ['liquorstore-3d', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
