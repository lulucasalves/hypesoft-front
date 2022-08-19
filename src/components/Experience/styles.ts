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
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 88px;
      height: 20px;
      background: ${colors.secondary};
      opacity: 0.15;
      left: -2px;
      bottom: 0px;
      z-index: 0;
    }
  }
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`
