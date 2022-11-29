import { styled } from '@stitches/react'

export const Container = styled('main', {
  paddingTop: '1.25rem',
  backgroundImage: '$backgroundProfile'
})

export const ProfileContainer = styled('section', {
  maxWidth: '620px',
  margin: '0px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.75rem',

  h1: {
    color: '$green200'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '0 57px',

    '.input': {
      width: '100%',
      '& + &': {
        marginTop: '2.188rem'
      }
    },

    button: {
      width: '100%',
      margin: '2.188rem 0'
    }
  },

  footer: {
    paddingBottom: '1.25rem'
  }
})

export const UserContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',

  '.return': {
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})

export const UserAvatar = styled('a', {
  display: 'flex',
  position: 'relative',
  margin: '0 auto',

  '.avatarContent': {
    userSelect: 'none',
    width: '283px',
    height: '283px',
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
    right: '80px',
    bottom: 0,
    color: '$green200'
  }
})
