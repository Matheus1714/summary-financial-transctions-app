import styled from 'styled-components'
import * as DefaultContainerStyle from '../../components/DefaultContiner/styled'

export const Container = styled(DefaultContainerStyle.Container)`
  max-width: 24rem;
  margin: auto;
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
