import { styled } from '@stitches/react'

export const SelectItemContainer = styled('div', {
  '.selectItemIndicator': {
    color: '$green100'
  },

  '.selectItem': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px'
  },

  '.selectItem[data-disabled]': {
    color: '$gray100',
    pointerEvents: 'none'
  },

  '.selectItem[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$green100',
    color: 'white'
  },

  '.selectItem:hover': {
    color: 'white',
    backgroundColor: '$green100',

    '.selectItemIndicator': {
      color: 'white'
    }
  }
})
