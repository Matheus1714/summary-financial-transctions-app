import styled from 'styled-components'

export const Container = styled.header`
  padding: 2rem 2rem;

  h1 {
    text-align: center;
    color: ${(props) => props.theme.black};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`
