import {
  AirplaneTilt,
  Money,
  PersonSimpleRun,
  House,
  ForkKnife,
  GameController,
  PiggyBank,
} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CardAlert } from '../../components/CardAlert'
import { Header } from '../../components/Header'
import { Message } from '../../components/Message'
import { NextPage } from '../../components/NextPage'
import { Card } from './Card'
import * as S from './styled'
import {
  getTransactionsCategoryInYear,
  TransactionsCategory,
} from '../../services/api'

interface IconsMapCategory {
  [key: string]: React.ComponentType<any>
}

const iconsMap: IconsMapCategory = {
  Sport: PersonSimpleRun,
  Travel: AirplaneTilt,
  House,
  Food: ForkKnife,
  Game: GameController,
  Investiment: PiggyBank,
  Default: Money,
}

export function SpendingCategory() {
  const location = useLocation()
  const { year, accountId } = location.state

  const [transactionsCategory, setTransactionsCategory] = useState<
    TransactionsCategory[]
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
    getTransactionsCategoryInYear(year, accountId).then((data) => {
      setTransactionsCategory(data)
    })
  }, [year, accountId])

  const topCategory = '' || transactionsCategory[0]?.category
  const topPercentage = '' || transactionsCategory[0]?.percentage
  const topIconCategory =
    iconsMap.Default || iconsMap[transactionsCategory[0]?.category]

  if (showMessage) {
    return <Message text={"First let's look at spending by category"} />
  }

  return (
    <S.Container>
      <Header title="Transactions by Category" />
      <S.CardsCategory>
        {transactionsCategory.map((item, index) => {
          return (
            <Card
              key={item.category}
              icon={iconsMap[item.category] || iconsMap.Default}
              percent={item.percentage}
              level={index}
            />
          )
        })}
      </S.CardsCategory>
      {showCardAlert && (
        <CardAlert>
          <Money size={64} />

          <S.MessageAlert>
            <p>You made more transactions in the category:</p>
            <span>{topCategory}</span>
          </S.MessageAlert>

          <Card icon={topIconCategory} percent={topPercentage} level={0} />
        </CardAlert>
      )}
      {showNextPage && (
        <NextPage to="/transactions/month" state={{ year, accountId }} />
      )}
    </S.Container>
  )
}
