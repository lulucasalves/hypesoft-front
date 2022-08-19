import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  align-items: center;
  flex-direction: column;
  background-image: url('./images/banner.png');
  height: 312px;

  @media (max-width: 840px) {
    padding: 5px;
  }

  @media (max-width: 840px) {
    margin-bottom: 100px;
  }
`

export const Text = styled.p`
  font-size: 2rem;
  line-height: 40px;

  @media (max-width: 840px) {
    text-align: center;
    font-size: 1.875rem;
  }

  span {
    color: ${colors.secondary};
  }
`
