import * as S from './styled'
import hyperplaneLogoDark from '../../assets/hyperplane-logo-dark.svg'
import { Emphasis } from '../../components/Emphasis'

export function Home() {
  return (
    <S.Container>
      <Emphasis text={'2022'} textSize={6} />
      <S.Title>Finantial Summary</S.Title>
      <S.Logo>
        <img src={hyperplaneLogoDark} alt="" />
        <p>Hyperplane</p>
      </S.Logo>
    </S.Container>
  )
}
