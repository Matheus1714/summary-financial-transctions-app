import * as S from './styled'
import { ReactNode } from 'react'

interface CardAlertProps {
  children: ReactNode
}

export function CardAlert({ children }: CardAlertProps) {
  return <S.Container>{children}</S.Container>
}
