import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { Message } from '../../components/Message'
import { NextPage } from '../../components/NextPage'
import * as S from './styled'
import { getAccounts } from '../../services/api'

export function Introduction() {
  const [year, setYear] = useState(0)
  const [accountId, setAccountId] = useState('')

  const [message, setMessage] = useState('Do you know how much you spend?')
  const [loading, setLoading] = useState(true)
  const [showNextPage, setshowNextPage] = useState(false)

  useEffect(() => {
    const timerLoading = setTimeout(() => {
      setLoading(false)
    }, 1000)

    const timerMessage = setTimeout(() => {
      setMessage(`Let's see your spending summary in the ${year}!`)
    }, 2000)

    const timerNextPage = setTimeout(() => {
      setshowNextPage(true)
    }, 3000)

    return () => {
      clearTimeout(timerLoading)
      clearTimeout(timerMessage)
      clearTimeout(timerNextPage)
    }
  }, [year])

  useEffect(() => {
    getAccounts().then((accounts) => {
      const account = accounts[0]
      setAccountId(account.account_id)
      setYear(2022)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <Message text={message} />
        {showNextPage && <NextPage to="/home" state={{ year, accountId }} />}
      </S.Container>
    </>
  )
}
