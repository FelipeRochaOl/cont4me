import { theme } from '../styles'
import { darkTheme } from '../styles/dark'

export enum themeName {
  default = 'default',
  dark = 'dark'
}
export const themeFactory = (name: themeName) => {
  switch (name) {
    case themeName.dark:
      return darkTheme.className
    default:
      return theme.className
  }
}
