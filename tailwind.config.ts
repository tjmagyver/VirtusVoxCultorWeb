import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        inriaSans: ['var(--font-inriaSans)']
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        red: {
          500: '#ED3237',
        },
        blue: {
          700: '#026180',
        },
        gray: {
          100: '#D9D9D9',
          300: '#767879',
        }
      }
    },
  },
  plugins: [],
}
export default config
