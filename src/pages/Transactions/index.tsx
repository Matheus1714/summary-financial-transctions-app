import { useState, useEffect } from 'react'
import { Emphasis } from '../../components/Emphasis'
import { ExplositonRaysIcon } from './ExplosionRays'
import * as S from './styled'
import { NextPage } from '../../components/NextPage'
import { Message } from '../../components/Message'
import { getTransactionsQuantityInYear } from '../../services/api'

export function Transactions() {
  const [showNextPage, setShowNextPage] = useState(false)
  const [showMessage, setShowMessage] = useState(true)
  const [transactionsQuantityInYear, setTransactionsQuantityInYear] =
    useState(0)

  useEffect(() => {
    const timerMessage = setTimeout(() => {
      setShowMessage(false)
    }, 2000)

    const timerNextPage = setTimeout(() => {
      setShowNextPage(true)
    }, 3000)

    return () => {
      clearTimeout(timerMessage)
      clearTimeout(timerNextPage)
    }
  }, [setShowMessage, setShowNextPage])

  useEffect(() => {
    getTransactionsQuantityInYear(
      '2022',
      'a2368661-7b18-4dee-ae58-64bc6fa2ceb6',
    ).then((quantity) => {
      setTransactionsQuantityInYear(quantity)
    })
  }, [])

  if (showMessage) {
    return (
      <Message text={'Do you know how many transactions you made in 2022?'} />
    )
  }

  return (
    <>
      <S.Container>
        <ExplositonRaysIcon />
        <p>You made</p>
        <Emphasis text={transactionsQuantityInYear.toString()} textSize={6} />
        <p>transactions in 2022</p>
      </S.Container>
      {showNextPage && <NextPage to="/transactions/maps" />}
    </>
  )
}
