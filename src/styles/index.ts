import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      background:
        'linear-gradient(95deg, #FFF 80%, rgba(8, 245, 163, .8) 100%)',
      backgroundHeader:
        'linear-gradient(1deg, #FFF 30%, rgba(8, 245, 163, .3) 100%)',
      font: '#2F2E41',
      white: '#FFF',

      gray050: '#D5D0D0',
      gray100: '#e1e1e6',
      gray400: '#8E8B8B',
      gray800: '#2F2E41',
      gray900: '#121214',

      green100: '#08F5A3',
      green200: '#07AF75',

      red050: '#FC0505',
      red100: '#D60C0C'
    },

    fontSizes: {
      '2sm': '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      '2lg': '1.875rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem'
    }
  }
})
