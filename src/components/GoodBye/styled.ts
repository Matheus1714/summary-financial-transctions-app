import { createIconContainer } from '../Message/styled'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div``

const moveHand = keyframes`
  0%{
    transform : rotate(0deg);
  }
  50%{
    transform : rotate(45deg);
  }
  100%{
    transform : rotate(0deg);
  }
`

export const IconContainerWithMoveHand = createIconContainer(moveHand)
