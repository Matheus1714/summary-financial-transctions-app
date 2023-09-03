import { Header } from '../../components/Header'
import * as S from './styled'
import {
  PersonSimpleRun,
  ForkKnife,
  GameController,
  HouseLine,
  AirplaneTilt,
  Money,
} from '@phosphor-icons/react'
import { Card } from './Card'
import { useEffect, useState } from 'react'
import { CardAlert } from '../../components/CardAlert'
import { NextPage } from '../../components/NextPage'
import { Message } from '../../components/Message'

export function SpendingCategory() {
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
    return <Message text={"First let's look at spending by category"} />
  }

  return (
    <S.Container>
      <Header title="Spending by Category" />
      <S.CardsCategory>
        <Card icon={PersonSimpleRun} percent={0.7} level={0} />
        <Card icon={ForkKnife} percent={0.2} level={1} />
        <Card icon={GameController} percent={0.08} level={2} />
        <Card icon={HouseLine} percent={0.01} level={3} />
        <Card icon={AirplaneTilt} percent={0.01} level={4} />
      </S.CardsCategory>
      {showCardAlert && (
        <CardAlert>
          <Money size={64} />

          <S.MessageAlert>
            <p>Do you spent more money on the:</p>
            <span>Sport Category</span>
          </S.MessageAlert>

          <Card icon={PersonSimpleRun} percent={0.7} level={0} />
        </CardAlert>
      )}
      {showNextPage && <NextPage to="/spending/month" />}
    </S.Container>
  )
}
