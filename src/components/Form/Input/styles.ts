import { styled } from '@stitches/react'

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const InputContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  border: '1px solid $green200',
  borderRadius: '8px',
  padding: '0 0.5rem',
  boxShadow: '0 0 0.13rem #07AF75',
  transition: 'border boxShadow color 0.5s',

  variants: {
    focused: {
      focus: {
        border: '1px solid $green100',
        boxShadow: '0px 0px 0.3rem #08F5A3',

        svg: {
          color: '$green100'
        },

        '& > input::placeholder': {
          color: '$green100'
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
