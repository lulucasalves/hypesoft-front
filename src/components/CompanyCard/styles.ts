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
  opacity: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }

  svg {
    path {
      stroke: ${colors.secondary};
    }
  }
`
