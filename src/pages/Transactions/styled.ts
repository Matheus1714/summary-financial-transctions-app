import styled from 'styled-components'
import * as DefaultContainerStyle from '../../components/DefaultContiner/styled'

export const Container = styled(DefaultContainerStyle.Container)`
  max-width: 24rem;
  margin: auto;
  position: relative;
  svg {
    position: absolute;
    z-index: -1;
  }
  p {
    text-align: center;
    font-size: 2.5rem;
    color: ${(props) => props.theme.black};
    font-weight: bold;
  }
`
