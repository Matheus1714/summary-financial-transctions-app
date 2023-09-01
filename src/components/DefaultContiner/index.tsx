import * as S from './styled'
import { ReactNode } from 'react'

interface DefaultContainerProps {
  children: ReactNode
}

export function DefaultContainer({ children }: DefaultContainerProps) {
  return <S.Contianer>{children}</S.Contianer>
}
