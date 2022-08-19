import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Content = styled.div`
  padding: 45px;
  background-color: ${colors.white};
  border-radius: 8px;
  width: 516px;
  height: 536px;

  @media (max-width: 840px) {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`

export const Title = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 32px;
  color: ${colors.black};
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  div {
    background-color: ${colors.secondary10};
    padding: 22px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.875rem;
      stroke: ${colors.secondary};
      fill: ${colors.secondary};
      path {
        stroke: ${colors.secondary};
      }
    }
  }

  p {
    word-wrap: break-word;
    font-size: 1.125rem;
    line-height: 28px;
    margin-left: 20px;
    color: ${colors.black};
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;

  a {
    background-color: transparent;
    padding: 20px;
    border-radius: 50px;
    border: 1px solid ${colors.grayBorder};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s;

    svg {
      font-size: 1.25rem;
      fill: ${colors.black};
      transition: 0.3s;
    }

    &:hover {
      border-color: none;
      background-color: ${colors.primary};
      transition: 0.3s;

      svg {
        fill: ${colors.white};
        transition: 0.3s;
      }
    }
  }
`
