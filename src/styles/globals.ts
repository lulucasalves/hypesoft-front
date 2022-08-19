import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    color: ${colors.white};
  }

  body {
    background-color: ${colors.black};
  }

  html {
    scroll-behavior:smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`
