import { ReactNode } from 'react'
import { themeName } from '../factories/ThemeFactory'

export type ThemeContextData = {
  theme: string
  setTheme: (name: themeName) => void
}

export interface ThemeProviderProps {
  children: ReactNode
}
