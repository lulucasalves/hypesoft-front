import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Formulary = styled.div`
  padding: 45px;
  background-color: ${colors.white};
  border-radius: 8px;
  width: 700px;
  height: 536px;

  @media (max-width: 1340px) {
    margin-bottom: 30px;
  }

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

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 840px) {
    justify-content: center;
    flex-direction: column;
  }

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
    font-size: 1.375rem;
  }
`
