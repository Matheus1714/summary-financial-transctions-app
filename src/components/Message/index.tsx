import * as S from './styled'
import { ReactNode } from 'react'

interface MessageProps {
  text: string
  icon?: ReactNode
}

export function Message({ text, icon }: MessageProps) {
  return (
    <S.Container>
      <S.Circle>
        <S.Text>{text}</S.Text>
        {icon && <>{icon}</>}
      </S.Circle>
    </S.Container>
  )
}
