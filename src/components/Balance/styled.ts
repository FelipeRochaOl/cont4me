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
  '.selectContainer': {
    gap: '1.063rem'
  },

  '.selectTrigger': {
    minWidth: '124px',
    outline: '0.3px solid $gray400',
    padding: '0 10px'
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
