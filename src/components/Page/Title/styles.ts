import { styled } from '@stitches/react'

export const TitleContainer = styled('header', {
  display: 'flex',
  alignItems: 'baseline',
  color: '$green200'
})

export const TitleContent = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '54px',
  marginRight: '10px',
  fontWeight: 500,

  span: {
    color: '$gray050'
  }
})
