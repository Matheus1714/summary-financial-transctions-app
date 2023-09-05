import { Money } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CardAlert } from '../../components/CardAlert'
import { Header } from '../../components/Header'
import { Message } from '../../components/Message'
import { NextPage } from '../../components/NextPage'
import {
  TransactionsMonth,
  getTransactionsMonthInYear,
} from '../../services/api'
import { Chart, MONTHS } from './Chart'
import * as S from './styled'

export function SpendingMonth() {
  const location = useLocation()
  const { year, accountId } = location.state

  const [transactionsMonth, setTransactionsMonth] = useState<
    TransactionsMonth[]
  >([])

  const [showCardAlert, setShowCardAlert] = useState(false)
  const [showNextPage, setshowNextPage] = useState(false)
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const timerMessage = setTimeout(() => {
      setShowMessage(false)
    }, 2000)

    const timerCardAlert = setTimeout(() => {
      setShowCardAlert(true)
    }, 3000)

    const timerNextPage = setTimeout(() => {
      setshowNextPage(true)
    }, 5000)

    return () => {
      clearTimeout(timerMessage)
      clearTimeout(timerCardAlert)
      clearTimeout(timerNextPage)
    }
  }, [])

  useEffect(() => {
    getTransactionsMonthInYear(year, accountId).then((data) => {
      setTransactionsMonth(data)
    })
  }, [year, accountId])

  const dataChart = transactionsMonth.map((item) => item.percentage) || []

  const IndexmonthTopTransactions = transactionsMonth.reduce(
    (maxIndex, currentTransaction, currentIndex, arr) =>
      currentTransaction.percentage > arr[maxIndex].percentage
        ? currentIndex
        : maxIndex,
    0,
  )
  const monthTopTransactions = MONTHS[IndexmonthTopTransactions] || MONTHS[0]

  if (showMessage) {
    return <Message text={'Now transaction by month'} />
  }

  return (
    <S.Container>
      <Header title="Spending by Month" />
      <Chart data={dataChart} />
      {showCardAlert && (
        <CardAlert>
          <Money size={64} />
          <S.MessageAlert>
            <span>{monthTopTransactions}</span>
            <p>was the month with the highest transactions</p>
          </S.MessageAlert>
        </CardAlert>
      )}
      {showNextPage && (
        <NextPage to="/transactions/maps" state={{ year, accountId }} />
      )}
    </S.Container>
  )
}
