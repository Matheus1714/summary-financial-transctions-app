import styled, { keyframes } from 'styled-components'
import { createIconContainer } from './../../components/Message/styled'

export const Container = styled.div``

const shakeIcon = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`

export const IconContainerWithShake = createIconContainer(shakeIcon)
