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

  @media (max-width: 840px) {
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    margin-bottom: 10px;
    margin-top: -10px;
  }

  svg {
    path {
      stroke: ${colors.secondary};
    }
  }
`
