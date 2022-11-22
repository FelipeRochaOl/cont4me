import { FaEye } from 'react-icons/fa'
import { SelectItem } from '../Form/SelectItem'
import { SelectRadix } from '../Form/SelectRadix'
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
        <SelectRadix id="coin" label="Moeda" defaultValue="Real">
          <SelectItem value="Real">Real</SelectItem>
          <SelectItem value="Dolar">Dolar</SelectItem>
          <SelectItem value="Euro">Euro</SelectItem>
          <SelectItem value="Libra">Libra</SelectItem>
        </SelectRadix>
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
