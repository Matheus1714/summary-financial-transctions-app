import { Emphasis } from '../../components/Emphasis'
import { ExplositonRaysIcon } from './ExplosionRays'
import * as S from './styled'

export function Transactions() {
  return (
    <S.Container>
      <ExplositonRaysIcon />
      <p>You made</p>
      <Emphasis text="123729" />
    </S.Container>
  )
}