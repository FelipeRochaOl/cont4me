import { styled } from '..'

export const Container = styled('main', {
  backgroundImage: '$background',
  color: '$font',
  height: '100vh',
  display: 'flex',
  alignItems: 'center'
})

export const HomeContainer = styled('section', {
  width: '1535px',
  height: '613.1px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-around'
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: '507px',
  maxHeight: '470.6px',
  gap: '4rem',

  img: {
    width: '400px',
    height: 'auto',
    marginBottom: '2rem'
  }
})

export const Fieldset = styled('fieldset', {
  all: 'unset',
  width: '100%',
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const Input = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  border: '1px solid $green200',
  borderRadius: '8px',
  padding: '0 0.5rem',
  boxShadow: '0 0 0.13rem #07AF75',
  transition: 'border boxShadow color 0.5s',

  '&.focus': {
    border: '1px solid $green100',
    boxShadow: '0px 0px 0.3rem #08F5A3',

    svg: {
      color: '$green100'
    },

    '& > input::placeholder': {
      color: '$green100'
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

export const Button = styled('button', {
  fontSize: '1.875rem',
  color: '$white',
  backgroundColor: '$green100',
  borderRadius: '10px',
  outline: '0.3px solid #07AF75',
  padding: '0.6rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    filter: 'brightness(1.1)'
  }
})
