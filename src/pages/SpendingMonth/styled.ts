import styled, { keyframes } from 'styled-components'
import { MAX_HEIGHT_BALLS } from './Chart'

export const Container = styled.div`
  height: 100vh;

  background: ${(props) => props.theme.white};

  max-width: 24rem;
  margin: auto;

  padding: 0 1rem;

  position: relative;
`

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(${MAX_HEIGHT_BALLS}, 1fr);
  grid-row-gap: 0.25rem;
  grid-template-areas:
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .'
    'ylabel . . . . . . . . . . . .';
`

export const YLabel = styled.div`
  grid-area: ylabel;
  justify-self: center;
  align-self: center;

  color: ${(props) => props.theme.black};

  p {
    direction: rtl;
    writing-mode: vertical-lr;
  }
`

export const XLabel = styled.div`
  grid: 1;
  justify-self: center;
  align-self: center;

  p {
    writing-mode: vertical-lr;
    color: ${(props) => props.theme.black};
  }
`

interface BallProps {
  $visible: string
}

interface appearProps extends BallProps {}

const appear = keyframes<appearProps>`
  0%{
    opacity:0;
    transform: translateX(-10px);
  }
  50%{
    ${(props) => (props.$visible === 'true' ? 0.5 : 0)};
    transform: translateX(10px);
  }
  100%{
    ${(props) => (props.$visible === 'true' ? 1 : 0)};
    transform: translateX(0);
  }
`

export const Ball = styled.div<BallProps>`
  justify-self: center;
  justify-self: center;
  align-self: center;
  grid: 1;

  width: 1rem;
  height: 1rem;
  background: ${(props) => props.theme.purpleNormal};
  border-radius: 50%;

  opacity: ${(props) => (props.$visible === 'true' ? 1 : 0)};

  animation: ${appear} 1s ease-in-out forwards;
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
