import { styled } from '@stitches/react'

export const Button = styled('button', {
  color: '$white',
  backgroundColor: '$green100',
  outline: '0.3px solid #07AF75',

  variants: {
    isBig: {
      true: {
        fontSize: '1.875rem',
        borderRadius: '10px',
        padding: '0.6rem'
      }
    }
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    filter: 'brightness(1.1)'
  }
})
