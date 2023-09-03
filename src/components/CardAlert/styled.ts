import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

export const Container = styled.div`
  background: ${(props) => props.theme.purpleNormal};
  margin: 0 -1rem;
  width: 100%;
  height: 50%;

  text-align: center;

  position: absolute;
  bottom: 0;

  animation: ${slideUp} 1s ease;
  transform-origin: bottom center;

  > svg {
    margin: 2rem 0 1rem;
  }
`
