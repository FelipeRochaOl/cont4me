import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { Button } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isBig?: boolean
  children: ReactNode
}

const ButtonComponent = ({ children, ...props }: IButtonProps, ref: any) => {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  )
}

export const ButtonSubmit = forwardRef(ButtonComponent)
