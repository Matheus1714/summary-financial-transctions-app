import styled from 'styled-components'

export const Contianer = styled.div`
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
