import { Message } from '../../components/Message'
import { useEffect, useState } from 'react'
import * as S from './styled'
import { NextPage } from '../../components/NextPage'
import { Loading } from '../../components/Loading'

export function Introduction() {
  const [message, setMessage] = useState('Do you know how much you spend?')
  const [loading, setLoading] = useState(true)
  const [showNextPage, setshowNextPage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Let's see your spending summary in the year 2022!")
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowNextPage(true)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <Message text={message} />
        {showNextPage && <NextPage to="/home" />}
      </S.Container>
    </>
  )
}
