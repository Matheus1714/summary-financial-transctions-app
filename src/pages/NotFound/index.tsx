import * as S from './styled'
import { MaskSad } from '@phosphor-icons/react'
import { Message } from '../../components/Message'

export function NotFound() {
  return (
    <S.Container>
      <Message
        text="Page Not Found (404)"
        icon={
          <S.IconContainerWithShake>
            <MaskSad size={60} />
          </S.IconContainerWithShake>
        }
      />
    </S.Container>
  )
}
