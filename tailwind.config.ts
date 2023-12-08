import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      inriaSans: ['var(--font-inriaSans)'],
    },
    colors: {
      white: '#FFFFFF',
      white_off: '#F5F5F5',
      black: '#000000',
      red: {
        500: '#ED3237',
      },
      blue: {
        700: '#026180',
      },
      gray: {
        50: '#B2B9BB',
        100: '#D9D9D9',
        300: '#767879',
      },
      green: {
        500: '#00DD31',
      },
    },
  },
  plugins: [],
}
export default config
