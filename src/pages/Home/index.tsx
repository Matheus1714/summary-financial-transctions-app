import * as S from './styled'
import hyperplaneLogoDark from '../../assets/hyperplane-logo-dark.svg'
import { Emphasis } from '../../components/Emphasis'
import { useEffect, useState } from 'react'
import { NextPage } from '../../components/NextPage'

export function Home() {
  const [showNextPage, setshowNextPage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowNextPage(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <S.Container>
      <Emphasis text={'2022'} textSize={6} />
      <S.Title>Finantial Summary</S.Title>
      <S.Logo>
        <img src={hyperplaneLogoDark} alt="" />
        <p>Hyperplane</p>
      </S.Logo>
      {showNextPage && <NextPage to="/spending" />}
    </S.Container>
  )
}
