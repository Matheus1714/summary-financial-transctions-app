import * as S from './styled'
import { ReactNode } from 'react'

interface DefaultContainerProps {
  children: ReactNode
}

export function DefaultContainer({ children }: DefaultContainerProps) {
  return <S.Container>{children}</S.Container>
}
