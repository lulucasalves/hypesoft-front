import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
  align-items: center;
  position: relative;
`

export const Formulary = styled.div`
  padding: 45px;
  background-color: ${colors.white};
  border-radius: 8px;
  width: 700px;
  height: 536px;
`

export const Content = styled.div`
  padding: 45px;
  background-color: ${colors.white};
  border-radius: 8px;
  width: 516px;
  height: 536px;
`

export const Title = styled.h4`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 32px;
  color: ${colors.black};
`

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  input {
    padding: 14px 20px;
    color: ${colors.black};
    background-color: transparent;
    padding: 14px 20px;
    width: 100%;
    height: 52px;
    border: 1px solid ${colors.grayBorder};
    border-radius: 4px;
    transition: 0.2s;

    &:focus {
      outline: none !important;
      transition: 0.2s;
      border: 1px solid ${colors.primary};
    }
  }
`

export const TextArea = styled.textarea`
  margin-bottom: 16px;
  width: 100%;
  height: 152px;
  color: ${colors.black};
  background-color: transparent;
  padding: 14px 20px;
  border: 1px solid ${colors.grayBorder};
  border-radius: 4px;
  resize: none;

  &:focus {
    outline: none !important;
    transition: 0.2s;
    border: 1px solid ${colors.primary};
  }
`

export const DotsDiv = styled.div`
  position: absolute;
  top: -35px;
  right: -77px;
`

export const Button = styled.div`
  padding: 17px 32px;
  border-radius: 8px;
  background-color: ${colors.primary};
  max-width: 229px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }

  p {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
  }

  svg {
    font-size: 22px;
  }
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
      font-size: 30px;
      stroke: ${colors.secondary};
      fill: ${colors.secondary};
      path {
        stroke: ${colors.secondary};
      }
    }
  }

  p {
    font-size: 18px;
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
      font-size: 20px;
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
