import { Line } from '../Line'
import * as S from './styled'

interface EmphasisProps {
  text: string
  textSize: number
}

export function Emphasis({ text, textSize }: EmphasisProps) {
  return (
    <S.Container $textize={textSize}>
      <h1>{text}</h1>
      <Line />
    </S.Container>
  )
}
