import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.white};
  }
  body{
    background: ${(props) => props.theme.purpleNormal};
    
    color: ${(props) => props.theme.white};
    font-family: 'Poppins', sans-serif;
    
    -webkit-font-smoothing: antialiased;
  }
`
