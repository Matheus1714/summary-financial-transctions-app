import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  background: ${(props) => props.theme.white};

  max-width: 24rem;
  margin: auto;

  padding: 0 1rem;

  position: relative;
`

export const ChartTransactionMonth = styled.main``

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${(props) => props.theme.white};

  min-width: 15rem;

  padding: 1rem;
`
