import * as Select from '@radix-ui/react-select'
import { forwardRef, ReactElement, useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { SelectContainer } from './styles'

interface ISelectComponent {
  id: string
  label: string
  defaultValue?: string
  placeholder?: string
  iconSize?: number
  children: ReactElement[]
}

const SelectComponent = (
  {
    id,
    label,
    defaultValue,
    placeholder,
    iconSize = 15,
    children
  }: ISelectComponent,
  ref: any
) => {
  const [selectData, setSelectData] = useState('')

  const handleSelectValue = (selectedValue: string) => {
    setSelectData(selectedValue)
  }

  useEffect(() => {
    if (defaultValue && !selectData) {
      setSelectData(defaultValue)
    }
  }, [defaultValue, selectData])

  if (selectData) {
    return (
      <SelectContainer ref={ref} className="selectContainer">
        <label htmlFor={id}>{label}:</label>
        <Select.Root value={selectData} onValueChange={handleSelectValue}>
          <Select.Trigger className="selectTrigger" id={id} aria-label={label}>
            <Select.Value aria-label={selectData} className="selectValue">
              {selectData}
            </Select.Value>
            {!defaultValue && placeholder && (
              <Select.Value placeholder={placeholder} />
            )}
            <Select.Icon className="selectIcon">
              <FaChevronDown size={iconSize} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Content className="selectContent">
            <Select.ScrollUpButton className="selectScrollButton">
              <FaChevronUp size={iconSize} />
            </Select.ScrollUpButton>
            <Select.Viewport asChild>
              <Select.Group>{children}</Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="selectScrollButton">
              <FaChevronDown size={iconSize} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Root>
      </SelectContainer>
    )
  }
  return <SelectContainer>carregando...</SelectContainer>
}

export const SelectRadix = forwardRef(SelectComponent)
