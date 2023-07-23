import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './utils/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6E30',
        'primary-light': '#F89773',
        'secondary': '#2D3640',

        'lightgray': '#F1F1F3',

        'detail-light': '#E3E7EE',
        'detail-medium': '#E9D5D5',
        'detail-dark': '#E2E2E2',

        'main': '#242424',
      },
      boxShadow: {
        'custom-purple': '0px 0px 20px 0px #722BFE40',
      },
      fontFamily: {
        poppins: 'Poppins',
        roboto: 'Roboto',
      },
      fontSize: {
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        40: '40px',
        42: '42px',
        32: '32px',
        base: ['0.875rem', '1.5rem'],
      },
      container: {
        center: true,
        screens: {
          '2xl': '1310px',
        },
        padding: {
          DEFAULT: '1rem',
          xl: '2.25rem',
        },
      },
    },
  },
}
