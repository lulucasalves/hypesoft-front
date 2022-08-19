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
`

export const Text = styled.p`
  font-size: 32px;
  line-height: 40px;

  span {
    color: ${colors.secondary};
  }
`
