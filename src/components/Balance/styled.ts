import { styled } from '@stitches/react'

export const BalanceContainer = styled('section', {
  maxWidth: '416px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const BalanceCoin = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '1.063rem',

  '.selectTrigger': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '124px',
    outline: '0.3px solid $gray400',
    padding: '0 10px'
  },

  '.selectTrigger:hover': {
    color: 'white',
    backgroundColor: '$green100',

    '.selectIcon': {
      color: 'white'
    }
  },

  '.selectIcon': {
    color: '$gray100'
  },

  '.selectContent': {
    color: '$gray400',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid $gray400'
  },

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

export const BalanceLabel = styled('label', {
  color: '$gray050',
  fontWeight: 600,
  fontSize: '$lg'
})

export const BalanceGeneral = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.063rem'
})

export const BalanceTotal = styled('div', {
  display: 'flex',
  alignItems: 'baseline'
})

export const BalanceCurrency = styled('span', {
  marginLeft: '1rem',
  fontWeight: 600,
  fontSize: '$lg'
})

export const BalanceValue = styled('span', {
  fontWeight: 600,
  fontSize: '$2lg'
})

export const BalanceCents = styled('span', {
  fontWeight: 100,
  fontSize: '$lg'
})
