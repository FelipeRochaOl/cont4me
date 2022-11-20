import * as Select from '@radix-ui/react-select'
import { FaCheck, FaChevronDown, FaChevronUp, FaEye } from 'react-icons/fa'
import {
  BalanceCents,
  BalanceCoin,
  BalanceContainer,
  BalanceCurrency,
  BalanceGeneral,
  BalanceLabel,
  BalanceTotal,
  BalanceValue
} from './styled'

export const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceCoin>
        <BalanceLabel htmlFor="coin">Moeda:</BalanceLabel>
        <Select.Root>
          <Select.Trigger className="selectTrigger" id="coin" aria-label="Coin">
            <Select.Value aria-label="real">Real</Select.Value>
            <Select.Icon className="selectIcon">
              <FaChevronDown size={15} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Content className="selectContent">
            <Select.ScrollUpButton className="selectScrollButton">
              <FaChevronUp size={15} />
            </Select.ScrollUpButton>
            <Select.Viewport asChild>
              <Select.Group>
                <Select.Item value="real" className="selectItem">
                  <Select.ItemText>Real</Select.ItemText>
                  <Select.ItemIndicator className="selectItemIndicator">
                    <FaCheck size={15} />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="dolar" className="selectItem">
                  <Select.ItemText>Dolar</Select.ItemText>
                  <Select.ItemIndicator className="selectItemIndicator">
                    <FaCheck size={15} />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="euro" className="selectItem">
                  <Select.ItemText>Euro</Select.ItemText>
                  <Select.ItemIndicator className="selectItemIndicator">
                    <FaCheck size={15} />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="libra" className="selectItem">
                  <Select.ItemText>Libra</Select.ItemText>
                  <Select.ItemIndicator className="selectItemIndicator">
                    <FaCheck size={15} />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="selectScrollButton">
              <FaChevronDown size={15} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Root>
      </BalanceCoin>
      <BalanceGeneral>
        <BalanceTotal>
          <BalanceLabel>Saldo:</BalanceLabel>
          <BalanceCurrency>R$</BalanceCurrency>
          <BalanceValue>1.000.000.000,</BalanceValue>
          <BalanceCents>00</BalanceCents>
        </BalanceTotal>
        <FaEye size={40} />
      </BalanceGeneral>
    </BalanceContainer>
  )
}
