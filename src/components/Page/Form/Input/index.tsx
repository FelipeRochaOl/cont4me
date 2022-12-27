import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import {
  ErrorField,
  InputContainer,
  InputContent,
  InputField,
  InputLabel
} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  focused?: boolean
  error?: FieldError | undefined
}

const InputComponent = (
  { icon, error, focused, ...props }: InputProps,
  ref?: any
) => {
  return (
    <InputContainer ref={ref} className="input">
      {
        <InputLabel focused={focused ? 'focus' : undefined}>
          {props.placeholder}
        </InputLabel>
      }
      <InputContent focused={focused ? 'focus' : 'unfocus'}>
        {icon}
        <InputField {...props} />
      </InputContent>
      {error && <ErrorField>{error.message}</ErrorField>}
    </InputContainer>
  )
}

export const Input = forwardRef(InputComponent)
