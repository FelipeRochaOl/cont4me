import { styled } from '@stitches/react'

export const HeaderListPage = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const Breadcrumbs = styled('div', {
  color: '$green200',
  fontSize: '$md',
  padding: '5px 0',
  borderBottom: '1px solid $gray400',

  'a, svg': {
    marginLeft: '0.125rem'
  }
})

export const FormImport = styled('form', {
  display: 'flex',
  width: '100%',
  gap: '0.5rem',

  button: {
    borderRadius: '5px',
    width: '155px'
  }
})

export const InputFile = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  padding: '0.188rem',
  gap: '0.313rem',
  color: '$green200',
  border: '1px solid $green200',
  borderRadius: '5px'
})

export const LinkContainer = styled('div', {
  color: '$gray050',
  fontSize: '$sm',
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '5px'
  }
})

export const ListContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',

  'li + li': {
    marginTop: '10px'
  }
})

export const ListHeader = styled('li', {
  display: 'flex',
  alignItems: 'center',
  color: '$green200',
  fontWeight: '600',
  padding: '10px',
  gap: '5px',

  button: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'
  },

  '.checkbox': {
    cursor: 'pointer'
  },

  '.cnpj, .name, .phone': {
    flex: 1
  },

  '.action': {
    width: '150px',
    textAlign: 'center'
  }
})

export const ListContent = styled('li', {
  outline: '0.3px solid $gray050',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  height: '70px',
  padding: '10px',
  boxShadow: '0px 0px 5px #D5D0D0',
  transition: 'outline 0.5s, boxShadow 0.5s, margin-left 0.3s',
  cursor: 'pointer',

  '&:hover': {
    marginLeft: '10px',
    outline: '0.3px solid $green100',
    boxShadow: '0px 0px 0.3rem #08F5A3'
  },

  div: {
    display: 'flex',
    alignContent: 'center',
    textAlign: 'left',

    'span + span': {
      color: '$gray050'
    }
  },

  '.checkbox': {
    cursor: 'pointer',
    color: '$green200',
    marginRight: '5px'
  },

  '.cnpj, .name, .phone': {
    flex: 1,
    flexDirection: 'column'
  },

  '.action': {
    width: '150px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
    color: '$green200',

    svg: {
      cursor: 'pointer'
    }
  }
})
