import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 150px;
  align-items: center;
  flex-direction: column;
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  p {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${colors.muted};

    svg {
      fill: ${colors.secondary};
      font-size: 16px;
      margin: 0 5px;
    }

    a {
      margin-left: 5px;
      text-decoration: none;
      color: ${colors.primary};
      font-weight: 600;
    }
  }
`
