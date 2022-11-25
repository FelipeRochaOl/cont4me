import { forwardRef, useState } from 'react'
import { FaQuestion } from 'react-icons/fa'
import { SummaryContainer } from './styles'

interface ISummary {
  integer: string
  cents?: string
}

interface ISummaryCellProps {
  balance: ISummary
  provision?: string
  type: 'income' | 'outcome' | 'paid'
}

const SummaryCellComponent = (
  {
    balance: { integer = '0', cents = '00' },
    provision,
    type
  }: ISummaryCellProps,
  ref: any
) => {
  const [summaryOver, setSummaryOver] = useState(false)
  const handleOverSummary = (show: boolean) => {
    setSummaryOver(show)
  }
  return (
    <SummaryContainer
      onMouseOver={() => handleOverSummary(true)}
      onMouseOutCapture={() => handleOverSummary(false)}
      isOver={summaryOver ? type : undefined}
      ref={ref}
    >
      <span>
        {integer},<sub>{cents}</sub>
      </span>
      <small>/de {provision}</small>
      <FaQuestion
        size={12}
        style={{ display: summaryOver ? 'block' : 'none' }}
      />
    </SummaryContainer>
  )
}

export const SummaryCell = forwardRef(SummaryCellComponent)
