import styled, { Keyframe } from 'styled-components'
import * as DefaultContainerStyle from '../DefaultContiner/styled'

export const Container = styled(DefaultContainerStyle.Container)`
  background: ${(props) => props.theme.white};

  position: relative;

  overflow: hidden;
`

export const Text = styled.div`
  max-width: 24rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`

export const Circle = styled(DefaultContainerStyle.Center)`
  width: 37.5rem;
  height: 37.5rem;

  position: absolute;

  background: ${(props) => props.theme.purpleNormal};
  border-radius: 9999px;

  flex-direction: column;
`

type AnimationKeyframesType = Keyframe

export const createIconContainer = (
  animationKeyframes: AnimationKeyframesType,
) => {
  const IconContainer = styled.div`
    animation: ${animationKeyframes} 1s infinite;
  `

  return IconContainer
}
