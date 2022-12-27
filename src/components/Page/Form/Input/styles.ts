import { styled } from '@stitches/react'

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
})

export const InputLabel = styled('label', {
  color: 'white',
  fontSize: '$2sm',
  marginLeft: '5px',
  position: 'absolute',
  top: '15px',
  left: '33px',
  transition: 'top 0.5s, left 0.5s, color 1s',

  variants: {
    focused: {
      focus: {
        top: '-20px',
        left: '0px',
        color: '$green100'
      }
    }
  }
})

export const InputContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  position: 'relative',
  border: '1px solid $green200',
  borderRadius: '8px',
  padding: '0 0.5rem',
  boxShadow: '0 0 0.13rem #07AF75',
  transition: 'border 0.5s, boxShadow 0.5s, color 0.5s',

  '& > input::placeholder': {
    transition: 'color 0.8s'
  },

  variants: {
    focused: {
      focus: {
        border: '1px solid $green100',
        boxShadow: '0px 0px 0.3rem #08F5A3',

        svg: {
          color: '$green100'
        },

        '& > input::placeholder': {
          color: 'white'
        }
      },
      unfocus: {}
    }
  },

  svg: {
    color: '$green200'
  }
})

export const InputField = styled('input', {
  all: 'unset',
  width: '100%',
  padding: '0.5rem 0',

  '&::placeholder': {
    color: '$green200',
    opacity: 0.6
  }
})

export const ErrorField = styled('span', {
  color: '$red050',
  fontSize: '$2sm',
  lineHeight: '1.2rem',
  marginLeft: '5px'
})
