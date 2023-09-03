import { Line } from '../Line'
import * as S from './styled'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Container>
      <h1>{title}</h1>
      <Line />
    </S.Container>
  )
}
