import { useState, useEffect } from 'react'
import { Emphasis } from '../../components/Emphasis'
import { ExplositonRaysIcon } from './ExplosionRays'
import * as S from './styled'
import { NextPage } from '../../components/NextPage'
import { Message } from '../../components/Message'

export function Transactions() {
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
      setshowNextPage(true)
    }, 3000)
    return () => clearTimeout(timer)
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
        <Emphasis text="123729" textSize={6} />
        <p>transactions in 2022</p>
      </S.Container>
      {showNextPage && <NextPage to="/transactions/maps" />}
    </>
  )
}
