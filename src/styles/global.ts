import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$background',
    color: '$font',
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '$md',
    color: '$gray400'
  },

  button: {
    all: 'unset',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '$lg',
    textAlign: 'center'
  },

  'li, ul, ol, a': {
    all: 'unset'
  },

  h1: {
    fontSize: '$3xl',
    letterSpacing: '-0.063rem'
  }
})
