import * as S from './styled'

interface EmphasisProps {
  text: string
}

export function Emphasis({ text }: EmphasisProps) {
  return (
    <S.Contianer>
      <h1>{text}</h1>
      <div />
    </S.Contianer>
  )
}
