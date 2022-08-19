import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
  align-items: center;
`

export const Text = styled.p`
  font-size: 32px;
  line-height: 40px;

  span {
    color: ${colors.secondary};
  }
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`
