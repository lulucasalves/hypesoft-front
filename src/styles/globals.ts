import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${colors.black};
    color: ${colors.white};
  }
`
