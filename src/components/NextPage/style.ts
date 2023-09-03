import styled, { keyframes } from 'styled-components'

const nextPageAnimation = keyframes`
  0%, 100%{
    opacity: 0.7;
  }
  25%, 75%{
    opacity: 0.8;
  }
  50%{
    opacity: 0.9;
  }
`

const sizeAnimation = keyframes`
  0%, 100%{
    height: 5rem;
  }
  25%, 75%{
    height: 5.2rem;
  }
  50%{
    height: 5.4rem;
  }
`

export const ContainerNextPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border-radius: 50%;
  background: ${(props) => props.theme.purpleLight};

  a {
    border-radius: 50%;
    display: flex;

    align-items: center;
    justify-content: center;

    :hover {
      background: ${(props) => props.theme.purpleLightHover};
      transition: background 0.2s;
    }
    :active {
      background: ${(props) => props.theme.purpleLightActive};
      transition: background 0.2s;
    }
  }

  svg {
    border-radius: 50%;
    color: ${(props) => props.theme.purpleNormal};
    width: 100%;
    animation: ${sizeAnimation} 1s infinite;
  }

  animation: ${nextPageAnimation} 1s infinite;
`
