import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  height: 120px;
  width: 155px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  svg {
    path {
      stroke: ${colors.secondary};
    }
  }
`
