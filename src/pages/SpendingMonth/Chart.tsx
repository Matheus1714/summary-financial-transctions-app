import * as S from './styled'

export const MAX_HEIGHT_BALLS = 10

export function Chart() {
  const data = [3, 5, 3, 10, 4, 2, 3, 3, 3, 3, 6, 8]

  const ballHeights = Array.from({ length: MAX_HEIGHT_BALLS }, (_, i) => i)

  const months = [
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
