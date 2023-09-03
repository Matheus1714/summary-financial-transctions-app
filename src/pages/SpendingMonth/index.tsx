import { Money } from '@phosphor-icons/react'
import { CardAlert } from '../../components/CardAlert'
import { Header } from '../../components/Header'
import * as S from './styled'
import { useState } from 'react'
import { Chart } from './Chart'

export function SpendingMonth() {
  const [showCardAlert, setShowCardAlert] = useState(false)

  const handleCardAlertClick = () => {
    if (!showCardAlert) {
      setShowCardAlert(true)
    }
  }
  return (
    <S.Container onClick={handleCardAlertClick}>
      <Header title="Spending by Month" />
      <Chart />
      {showCardAlert && (
        <CardAlert>
          <Money size={64} />
          <S.MessageAlert>
            <span>May</span>
            <p>was the month with the highest spending</p>
          </S.MessageAlert>
        </CardAlert>
      )}
    </S.Container>
  )
}
