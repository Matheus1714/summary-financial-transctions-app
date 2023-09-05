import * as S from './styled'

export const MAX_HEIGHT_BALLS = 10

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

interface ChartProps {
  data: number[]
}

export function Chart({ data }: ChartProps) {
  const ballHeights = Array.from({ length: MAX_HEIGHT_BALLS }, (_, i) => i)

  const months = MONTHS

  function BallControl(rowIndex: number, colIndex: number, key: string) {
    const amountOfBalls = data[colIndex]
    const ballsHeight = MAX_HEIGHT_BALLS - rowIndex - 1
    const isVisibleBall = ballsHeight < amountOfBalls
    return <S.Ball key={key} $visible={isVisibleBall.toString()} />
  }

  return (
    <S.ChartContainer>
      <S.YLabel>
        <p>% Transactions</p>
      </S.YLabel>

      {ballHeights.map((ballHeight, rowIndex) =>
        months.map((month, colIndex) =>
          BallControl(rowIndex, colIndex, `${month}:${ballHeight}`),
        ),
      )}

      {months.map((month) => (
        <S.XLabel key={month}>
          <p>{month}</p>
        </S.XLabel>
      ))}
    </S.ChartContainer>
  )
}
