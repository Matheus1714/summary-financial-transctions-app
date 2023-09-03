import { Money } from '@phosphor-icons/react'
import { CardAlert } from '../../components/CardAlert'
import { Header } from '../../components/Header'
import * as S from './styled'
import { useState, useEffect } from 'react'
import { Chart } from './Chart'
import { NextPage } from '../../components/NextPage'
import { Message } from '../../components/Message'

export function SpendingMonth() {
  const [showCardAlert, setShowCardAlert] = useState(false)
  const [showNextPage, setshowNextPage] = useState(false)
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardAlert(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowNextPage(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (showMessage) {
    return <Message text={'Now spending per month'} />
  }

  return (
    <S.Container>
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
      {showNextPage && <NextPage to="/transactions" />}
    </S.Container>
  )
}
