import * as S from './styled'

interface MessageProps {
  text: string
}

export function Message({ text }: MessageProps) {
  return (
    <S.Container>
      <S.Circle>
        <S.Text>{text}</S.Text>
      </S.Circle>
    </S.Container>
  )
}
