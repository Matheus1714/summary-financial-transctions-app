import * as S from './styled'

interface EmphasisProps {
  text: string
}

export function Emphasis({ text }: EmphasisProps) {
  return (
    <S.Container>
      <h1>{text}</h1>
      <div />
    </S.Container>
  )
}
