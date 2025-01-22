const siteConfig = require('../_data/site.json')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,js}",
    "./src/**/**/*.{njk,md,js}",
    "./src/**/**/**/*.{njk,md,js}",
    "./src/**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        'red': siteConfig.branding.colors.red,
        'black': siteConfig.branding.colors.black,
        'white': siteConfig.branding.colors.white,
      },
      fontFamily: {
        'serif': [
          siteConfig.branding.typography.fonts.serif.family || 'Adelphe',
          ...defaultTheme.fontFamily.serif
        ],
        'serif-italic': [
          siteConfig.branding.typography.fonts['serif-italic'].family || 'Adelphe-italic'
        ],
        'sans': [
          siteConfig.branding.typography.fonts.sans.family || 'Amiamie',
          ...defaultTheme.fontFamily.sans
        ],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '1.1' }],
        'h2': ['3.5rem', { lineHeight: '1.2' }],
        'h3': ['2.5rem', { lineHeight: '1.3' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'custom-pl': 'calc(50vw - min(1680px, 87.5vw) / 2)',
      },
      maxWidth: {
        'screen-xl': '1680px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            maxWidth: 'none',
            h1: {
              color: 'white',
              fontFamily: 'serif',
              fontSize: '4.5rem',
              lineHeight: '1.1',
            },
            h2: {
              color: 'white',
              fontFamily: 'serif',
              fontSize: '3.5rem',
              lineHeight: '1.2',
              position: 'relative',
              scrollMarginTop: '100px',
            },
            h3: {
              color: 'white',
              fontFamily: 'serif',
              fontSize: '2.5rem',
              lineHeight: '1.3',
              position: 'relative',
              scrollMarginTop: '100px',
            },
            p: {
              color: 'white',
              fontSize: '1.125rem',
              lineHeight: '1.75',
            },
            a: {
              color: siteConfig.branding.colors.red,
              textDecoration: 'none',
              '&:hover': {
                color: 'white',
              },
            },
            strong: {
              color: 'white',
            },
            blockquote: {
              borderLeftColor: siteConfig.branding.colors.red,
              color: 'white',
              fontStyle: 'italic',
            },
            code: {
              color: 'white',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            '.anchor': {
              position: 'absolute',
              left: '-1em',
              textDecoration: 'none',
              opacity: 0,
              color: siteConfig.branding.colors.red,
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              }
            },
            'h2:hover .anchor, h3:hover .anchor': {
              opacity: 0.5,
            },
            img: {
              borderRadius: '0.5rem',
            },
            figcaption: {
              color: '#9CA3AF', // text-gray-400
              fontStyle: 'italic',
            },
            ul: {
              color: 'white',
            },
            ol: {
              color: 'white',
            },
            li: {
              color: 'white',
            },
            table: {
              color: 'white',
            },
            thead: {
              color: 'white',
              borderBottomColor: siteConfig.branding.colors.red,
            },
            'tbody tr': {
              borderBottomColor: '#374151', // border-gray-700
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}