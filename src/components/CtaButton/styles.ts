import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Button = styled.div`
  margin-top: 40px;
  display: flex;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 20px 30px;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
  max-width: 180px;
  justify-content: center;

  p {
    white-space: nowrap;
    color: ${colors.black};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    transition: 0.4s;
    text-decoration: none;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${colors.primary};
    transition: 0.3s;

    p {
      color: ${colors.white};
      transition: 0.3s;
    }

    i {
      border-color: ${colors.white};
      transition: 0.3s;
    }

    div {
      background-color: ${colors.white};
      transition: 0.3s;
      width: 30px;
    }
  }
`

export const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  border-color: ${colors.black};
  transition: 0.4s;
`

export const Line = styled.div`
  display: inline-block;
  width: 10px;
  height: 2px;
  margin-right: -7px;
  background-color: ${colors.black};
  transition: 0.4s;
`
