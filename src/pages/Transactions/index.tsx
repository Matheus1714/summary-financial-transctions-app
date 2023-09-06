import { useState, useEffect } from 'react'
import { Emphasis } from '../../components/Emphasis'
import { ExplositonRaysIcon } from './ExplosionRays'
import * as S from './styled'
import { NextPage } from '../../components/NextPage'
import { Message } from '../../components/Message'
import { getTransactionsQuantityInYear } from '../../services/api'
import { useLocation } from 'react-router-dom'

export function Transactions() {
  const location = useLocation()
  const { year, accountId } = location.state

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
    getTransactionsQuantityInYear(year, accountId).then((quantity) => {
      setTransactionsQuantityInYear(quantity)
    })
  }, [year, accountId])

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
      {showNextPage && (
        <NextPage to="/transactions/maps" state={{ year, accountId }} />
      )}
    </>
  )
}
