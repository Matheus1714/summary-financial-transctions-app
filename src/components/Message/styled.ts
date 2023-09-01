import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.white};

  height: 100vh;
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.div`
  max-width: 24rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`

export const Circle = styled.div`
  width: 37.5rem;
  height: 37.5rem;

  position: absolute;
  top: calc(50% - 18.75rem);
  left: calc(50% - 18.75rem);

  background: ${(props) => props.theme.purpleNormal};

  border-radius: 9999px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
