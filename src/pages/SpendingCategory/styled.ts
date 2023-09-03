import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  background: ${(props) => props.theme.white};

  max-width: 24rem;
  margin: auto;

  padding: 0 1rem;

  position: relative;
`

export const CardsCategory = styled.main``

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${(props) => props.theme.white};

  min-width: 15rem;

  padding: 1rem;
`

interface CategoryIconProps {
  $level: string
}

export const CategoryIcon = styled.span<CategoryIconProps>`
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.25rem;

  border: 4px solid ${(props) => props.theme.levels[Number(props.$level)]};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.black};
  }
`

interface FullBarProps {
  $level: string
}

export const FullBar = styled.div<FullBarProps>`
  width: 100%;
  max-width: 11rem;
  height: 1rem;
  border-radius: 9999px;
  background: ${(props) => props.theme.gray100};
`

interface ProgressBarProps {
  $percent: string
  $level: string
}

interface completeProgressProps {
  $percent: string
}

const completeProgress = keyframes<completeProgressProps>`
  0%{
    width: 0%;
  }
  50%{
    width: ${(props) => `${Number(props.$percent) / 2}%`};
  }
  100%{
    width: ${(props) => `${props.$percent}%`};
  }
`

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 1rem;
  background: ${(props) => props.theme.levels[Number(props.$level)]};
  width: ${(props) => `${props.$percent}%`};
  border-radius: 9999px;

  animation: ${completeProgress} 1s ease-in-out forwards;
`

interface ProgressTextProps {
  $level: string
}

export const ProgressText = styled.div<ProgressTextProps>`
  p {
    color: ${(props) => props.theme.levels[Number(props.$level)]};
    font-size: 2rem;
    font-weight: bold;
  }
`

export const MessageAlert = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  p {
    font-size: 1rem;
  }
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.levels[0]};
    font-weight: bold;
  }
`
