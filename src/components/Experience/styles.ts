import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
  align-items: center;

  @media (max-width: 1340px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 840px) {
    padding-bottom: 50px;
  }
`

export const Text = styled.p`
  font-size: 2rem;
  line-height: 40px;

  @media (max-width: 1340px) {
    text-align: center;
    margin-bottom: 50px;
  }

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

  @media (max-width: 1340px) {
    width: 100%;
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }
`
