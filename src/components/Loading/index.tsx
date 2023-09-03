import * as S from './styled'
import hyperplaneLogoLight from '../../assets/hyperplane-logo-light.svg'
import { RingLoader } from 'react-spinners'
import { LoadingDots } from './LoadingDots'

export function Loading() {
  return (
    <S.Container>
      <img src={hyperplaneLogoLight} alt="hyperplane logo on loading page" />
      <S.LoaderContainer>
        <RingLoader
          color="#fff"
          speedMultiplier={0.5}
          className="loader"
          size={300}
        />
      </S.LoaderContainer>
      <LoadingDots />
    </S.Container>
  )
}
