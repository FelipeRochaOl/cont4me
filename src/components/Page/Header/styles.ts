import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  paddingTop: '0.375rem',
  color: '$green200',

  '.SeparatorRoot': {
    backgroundColor: '$green200',
    height: '1px',
    width: '95%',
    marginRight: '0.313rem'
  }
})

export const HeaderPrincipal = styled('section', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const HeaderContent = styled('section', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',

  img: {
    marginRight: '1.875rem'
  },

  '.navigationMenuList': {
    display: 'flex',
    alignItems: 'flex-end',
    height: '38px'
  },

  '.navigationMenuItem': {
    fontWeight: 300,
    paddingRight: '1.375rem',

    'a.active': {
      fontWeight: '600',
      color: '$green100'
    },

    '& + &': {
      borderLeft: '1px solid $green200',
      paddingLeft: '1.375rem'
    }
  }
})

export const NavigationMenuLinkIcon = styled('div', {
  position: 'relative',

  svg: {
    position: 'absolute',
    right: '-12px',
    top: '-5px'
  }
})

export const UserContainer = styled('section', {
  display: 'flex',
  alignItems: 'center'
})

export const UserContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$sm',
  marginRight: '5px',

  span: {
    maxWidth: '18.75rem',
    fontWeight: '600'
  }
})

export const UserAvatar = styled('div', {
  display: 'flex',
  position: 'relative',

  '.avatarContent': {
    userSelect: 'none',
    width: '86px',
    height: '86px',
    borderRadius: '100%',
    outline: '0.1px solid $green200'
  },

  '.avatarImage': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
  },

  svg: {
    position: 'absolute',
    right: '7px',
    bottom: 0
  }
})
