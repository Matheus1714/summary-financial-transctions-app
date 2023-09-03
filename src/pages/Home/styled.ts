import styled from 'styled-components'
import * as DefaultContainerStyle from '../../components/DefaultContiner/styled'

export const Container = styled(DefaultContainerStyle.Container)`
  background: ${(props) => props.theme.white};

  max-width: 24rem;
  margin: auto;
  padding: 0 4rem 0;

  gap: 2rem;
`

export const Year = styled.div`
  h1 {
    font-size: 6rem;
    color: ${(props) => props.theme.purpleNormal};

    margin: 3rem 0 0;
  }
  div {
    height: 0.5rem;
    width: 100%;

    background: ${(props) => props.theme.purpleNormal};

    border-radius: 9999px;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.black};

  margin: 1rem 0 1rem;

  text-align: center;
`

export const Logo = styled(DefaultContainerStyle.Center)`
  gap: 1rem;

  p {
    font-size: 2rem;
    color: ${(props) => props.theme.purpleNormal};
  }
`
