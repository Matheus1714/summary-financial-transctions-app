import { HandWaving } from '@phosphor-icons/react'
import { Message } from '../Message'
import * as S from './styled'

export function Goodbye() {
  return (
    <S.Container>
      <Message
        text="See you next year!"
        icon={
          <S.IconContainerWithMoveHand>
            <HandWaving size={60} />
          </S.IconContainerWithMoveHand>
        }
      />
    </S.Container>
  )
}
