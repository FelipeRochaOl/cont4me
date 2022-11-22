import * as Select from '@radix-ui/react-select'
import { forwardRef, ReactNode } from 'react'
import { FaCheck } from 'react-icons/fa'
import { SelectItemContainer } from './styles'

interface ISelectItemProps {
  children: ReactNode
  value: string
  iconSize?: number
}

const SelectItemComponent = (
  { children, value, iconSize = 15 }: ISelectItemProps,
  ref: any
) => {
  return (
    <SelectItemContainer>
      <Select.Item key={value} value={value} className="selectItem" ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="selectItemIndicator">
          <FaCheck size={iconSize} />
        </Select.ItemIndicator>
      </Select.Item>
    </SelectItemContainer>
  )
}

export const SelectItem = forwardRef(SelectItemComponent)
