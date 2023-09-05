import * as S from './styled'
import { ElementType } from 'react'

interface CardProps {
  icon: ElementType
  percent: number
  level?: number
}

export function Card({ icon: Icon, percent, level = 0 }: CardProps) {
  const percentDecimal = Math.floor(100 * percent)
  return (
    <S.Card>
      <S.CategoryIcon $level={level.toString()}>
        <Icon size={32} />
      </S.CategoryIcon>
      <S.FullBar $level={level.toString()}>
        <S.ProgressBar
          $percent={percentDecimal.toString()}
          $level={level.toString()}
        />
      </S.FullBar>
      <S.ProgressText $level={level.toString()}>
        <p>{percentDecimal}%</p>
      </S.ProgressText>
    </S.Card>
  )
}
