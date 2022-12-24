import { styled } from '@stitches/react'
import { lighten } from 'polished'

export const SummaryContainer = styled('summary', {
  position: 'relative',
  borderRadius: '5px',
  paddingTop: '5px',
  transition: 'background-color 0.5s ease',

  variants: {
    isOver: {
      income: {
        cursor: 'pointer',
        outline: '0.5px solid $green200',
        color: '$green200',
        backgroundColor: lighten('0.1', 'rgba(8,245,163,0.1)'),
        svg: {
          color: '$green200'
        }
      },
      outcome: {
        cursor: 'pointer',
        outline: '0.5px solid $red100',
        color: '$red100',
        backgroundColor: lighten('0.1', 'rgba(252,5,5,0.1)'),
        svg: {
          color: '$red100'
        }
      },
      paid: {
        cursor: 'pointer',
        outline: '0.5px solid $green200',
        color: '$green200',
        backgroundColor: lighten('0.1', 'rgba(8,245,163,0.1)'),
        svg: {
          color: '$green200'
        }
      }
    }
  },

  svg: {
    position: 'absolute',
    right: 0
  }
})
