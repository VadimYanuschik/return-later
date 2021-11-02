import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
    }
    body {
      font-family: "OpenSans-Regular", serif;
    }
    
    h1,h2,h3,h4,h5,h6 {
      font-family: "OpenSans-Bold", serif;
    }
    
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.black}
    }
`

export default GlobalStyles