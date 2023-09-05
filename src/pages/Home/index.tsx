import * as S from './styled'
import hyperplaneLogoDark from '../../assets/hyperplane-logo-dark.svg'
import { Emphasis } from '../../components/Emphasis'
import { useEffect, useState } from 'react'
import { NextPage } from '../../components/NextPage'
import { useLocation } from 'react-router-dom'

export function Home() {
  const location = useLocation()
  const { year, accountId } = location.state

  const [showNextPage, setshowNextPage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowNextPage(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <S.Container>
      <Emphasis text={year.toString()} textSize={6} />
      <S.Title>Finantial Summary</S.Title>
      <S.Logo>
        <img src={hyperplaneLogoDark} alt="" />
        <p>Hyperplane</p>
      </S.Logo>
      {showNextPage && (
        <NextPage to="/transactions/category" state={{ year, accountId }} />
      )}
    </S.Container>
  )
}
