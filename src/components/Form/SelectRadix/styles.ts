import { styled } from '@stitches/react'

export const SelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',

  label: {
    color: '$gray050',
    fontWeight: 600,
    fontSize: '$lg'
  },

  '.selectTrigger': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    outline: '0.3px solid $gray400',
    padding: '0 5px'
  },

  '.selectTrigger:hover': {
    color: 'white',
    backgroundColor: '$green100',

    '.selectIcon': {
      color: 'white'
    }
  },

  '.selectIcon': {
    display: 'block',
    color: '$gray100'
  },

  '.selectContent': {
    color: '$gray400',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid $gray400'
  },

  '.selectScrollButton': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: '$green200',
    cursor: 'default'
  }
})
