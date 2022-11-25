import { styled } from '@stitches/react'

export const CalendarBillContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '782px',
  margin: '0 auto',
  marginTop: '4.75rem'
})

export const CalendarBillHeader = styled('header', {
  display: 'flex',
  alignItems: 'baseline',
  color: '$green200',

  h1: {
    flex: 1,
    marginLeft: '54px',
    fontWeight: 500
  }
})

export const CalendarBillContent = styled('div', {
  width: '618.5px',
  margin: '0 auto',
  marginTop: '27px'
})

export const CalendarBillTable = styled('table', {
  width: '100%',
  borderCollapse: 'none',

  tr: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottom: '0.2px solid $green200',
    fontSize: '$md'
  },

  th: {
    width: '100%',
    fontWeight: 300
  },

  td: {
    width: '100%',
    fontWeight: 300
  },

  thead: {
    'tr:first-child': {
      borderTop: '0.2px solid $green200'
    },

    '.topTableBill': {
      th: {
        color: '$green200',
        fontSize: '$sm',

        span: {
          fontWeight: 500,
          fontSize: '$lg'
        },

        '&:first-child': {
          textAlign: 'left'
        },

        '&:last-child': {
          textAlign: 'right'
        }
      },

      '.selectContainer': {
        gap: '0.313rem',

        label: {
          color: '$green200',
          fontSize: '$sm',
          fontWeight: 300
        },

        '.selectTrigger': {
          padding: '0 5px',
          outline: '0.3px solid $green200',
          color: '$green100',

          span: {
            fontSize: '$2sm',

            '& + &': {
              marginLeft: '5px'
            }
          }
        },

        '.selectItem': {
          span: {
            fontSize: '$2sm',
            marginRight: '5px'
          }
        },

        '.selectTrigger:hover': {
          outline: '0.3px solid $green200',
          color: 'white'
        }
      }
    },

    '.titleTableBill th': {
      fontWeight: 500,
      fontSize: '$md',
      padding: '0.313rem',

      span: {
        lineHeight: '0.875rem',
        display: 'flex',
        flexDirection: 'column'
      },

      small: {
        fontWeight: 200,
        fontSize: '$3sm'
      }
    }
  },

  tbody: {
    td: {
      padding: '5px 0'
    },

    summary: {
      lineHeight: '0.938rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      span: {
        display: 'flex',
        alignItems: 'baseline'
      },

      small: {
        fontWeight: 200,
        fontSize: '$3sm'
      }
    }
  },

  tfoot: {
    tr: {
      borderBottom: 0
    },

    td: {
      padding: '5px 0',
      fontWeight: 500
    },

    summary: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      span: {
        display: 'flex',
        alignItems: 'baseline'
      },

      small: {
        fontWeight: 200,
        fontSize: '$3sm'
      }
    }
  }
})

export const CalendarBillFooter = styled('footer', {
  margin: '20px auto'
})
