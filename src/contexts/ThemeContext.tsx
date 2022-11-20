import { createContext, useState } from 'react'
import {
  ThemeContextData,
  ThemeProviderProps
} from '../interfaces/IThemeContent'

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('default')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
