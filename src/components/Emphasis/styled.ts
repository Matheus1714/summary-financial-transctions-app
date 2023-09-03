import styled from 'styled-components'

interface ContainerProps {
  $textize: number
}

export const Container = styled.div<ContainerProps>`
  h1 {
    font-size: ${(props) => `${props.$textize}rem`};
    color: ${(props) => props.theme.purpleNormal};

    margin: 3rem 0 0;
  }
`
