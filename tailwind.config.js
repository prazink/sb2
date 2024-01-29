import plugin from 'tailwindcss'

export default {
  content: [
    './components/**/*.vue',
    './modules/**/*.vue',
    './stories/**/*.stories.ts',
    './formkit.config.js',
  ],
  darkMode: 'media',
  safelist: [
    {
      pattern: /text-loan-(car|personal|business|home|smsf|commercial|accredited)/,
      variants: ['hover', 'lg:hover', 'focus', 'lg:focus'],
    },
    {
      pattern: /bg-loan-(car|personal|business|home|smsf|commercial|accredited)/,
      variants: ['hover', 'lg:hover', 'focus', 'lg:focus'],
    },
    {
      pattern: /border-loan-(car|personal|business|home|smsf|commercial|accredited)/,
      variants: ['hover', 'lg:hover', 'focus', 'lg:focus'],
    },
    {
      pattern: /text-(left|center|right)/,
      variants: ['lg'], // used in ContentFullWidth to set alignment
    },
    'text-cerulean',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      'mobile+tablet': { max: '1023px' },
      max: '1336px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      // colors from styleguide
      'deep-sapphire': '#0a3370',
      'persian-blue': '#2825c1',
      cerulean: '#05b3cb',
      'jungle-green': '#2da48e',
      'picton-blue': '#4fa5e4',
      cerise: '#E9305D',
      font: {
        gray: '#141313',
        tundora: '#453e3e',
        storm: '#70737d',
      },
      grey: {
        footer: '#EFF3F7',
        500: '#bdbdbd',
        400: '#e7e7e7',
        300: '#f8f8f8',
        200: '#f1f3f7',
        100: '#f2f6fa',
      },
      inactive: '#d3d3d3',
      focused: '#28648f',
      error: '#f80e0e',
      gold: '#ffa739',
      success: '#0fbe8a',
      // loan colors
      loan: {
        car: '#fc5265',
        personal: '#8d32f7',
        smsf: '#d52a7d',
        business: '#079c59',
        commercial: '#bf9d00',
        home: '#0a3371',
        accredited: '#05A3B8',
      },
      // loan colors
      banner: {
        car: '#e9305d',
        personal: '#7554c4',
        smsf: '#ab3f70',
        business: '#3b8551',
        commercial: '#d1852c',
        home: '#266daf',
      },
      testimonials: {
        pink: '#FF576D',
        orange: '#EC7113',
        green: '#14AA64',
        purple: '#7846C8',
        blue: '#05A3B8',
      },
      // deciphered and simplified
      button: {
        DEFAULT: '#0a3370', // matches deep-sapphire
        hover: '#08295a',
        pressed: '#062148',
      },
      interaction: {
        ice: {
          pressed: '#D9E9F9',
        },
      },
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800, // i think this is missing in font imports
      heavy: 900,
    },
    fontFamily: {
      sans: ['Nexa', 'sans-serif'],
    },
    boxShadow: {
      card: '0px 7px 22px 4px rgba(114, 104, 104, 0.35)',
      'card-hover': '0px 4px 12px 5px rgba(0, 0, 0, 0.1)',
      menu: '0px 7px 24px 3px rgba(71, 64, 64, 0.47)',
    },
    extend: {
      fontFamily: {
        nexa: ['Nexa', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.875rem', '1.1'], // 62px
        h2: ['2.875rem', '1.2'], // 46
        h3: ['2.375rem', '1.3'], // 38
        h4: ['1.75rem', '1.4'], // 28
        h5: ['1.375rem', '1.5'], // 22
        'button-md': ['1.125rem', '1.3'], // 18px
        'button-sm': ['1rem', '1.3'], // 16px
        body: ['1.125rem', '1.8'], // 18px
        'body-sm': ['1rem', '1.8'], // 16px
        tiny: ['0.625rem', '1.6'], // 10px/16px
        link: ['0.9375rem', '1.8'], // 15px/27px
        // Mobile fontSize
        'h1-sm': ['2.5rem', '1.1'], // 40px
        'h2-sm': ['2rem', '1.2'], // 32px
        'h3-sm': ['1.75rem', '1.3'], // 28px
        'h4-sm': ['1.5rem', '1.4'], // 24px
        'h5-sm': ['1.25rem', '1.5'], // 20px
      },
      lineHeight: {
        1.1: '1.1',
        tighter: '1.3',
        relaxed: '1.6',
        1.8: '1.8',
      },
      zIndex: {
        negative: -1,
        1: 1,
        2: 2,
        3: 3,
      },
      content: {
        blank: '""',
        bullet: '"\\2022"',
        slash: '"/"',
        quote: '"\\""',
      },
      width: {
        '1em': '1em',
      },
      borderRadius: {
        pill: '0.625rem', // for header link items
      },
      spacing: {
        13: '3.25rem',
        'header-mobile': '70px',
        'header-desktop': '80px',
        // collapsable margin based off styleguide
        // 'desktop-sm': '48px', // p-12
        // 'desktop-md': '80px', // p-20
        // 'desktop-lg': '112px', // p-28
        // 'desktop-xl': '144px', // p-36
        // 'mobile-sm': '24px', // p-6
        // 'mobile-md': '40px', // p-10
        // 'mobile-lg': '56px', // p-14
        // 'mobile-xl': '80px', // p-20
      },
      willChange: {
        opacity: 'opacity',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      aspectRatio: {
        hero: '16/10',
        map: '3/1',
      },
      animation: {
        slideOutLeft: 'slideOutLeft 500ms ease-in-out 0s',
        slideOutRight: 'slideOutRight 500ms ease-in-out 0s',
        slideInLeft: 'slideInLeft 500ms ease-in-out 0s',
        slideInRight: 'slideInRight 500ms ease-in-out 0s',
      },
      backgroundImage: {
        'mtt-gradient-1': "url('/img/meet-the-team-background-01.svg')",
        'mtt-gradient-2': "url('/img/meet-the-team-background-02.svg')",
        'mtt-gradient-3': "url('/img/meet-the-team-background-03.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': angle => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              90: '90deg',
            },
          ),
        },
      )
    }),
  ],
}
