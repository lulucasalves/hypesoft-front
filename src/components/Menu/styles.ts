import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40px 0;
`

export const ImageBackground = styled.div`
  width: 710px;
  height: 980px;
  background-color: ${colors.primary};
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 1340px) {
    display: none;
  }
`

export const Item = styled.a`
  font-size: 0.875rem;
  font-weight: bold;
  margin-right: 40px;
  cursor: pointer;
  text-transform: uppercase;
  opacity: 1;
  transition: 0.4s;
  text-decoration: none;
  z-index: 2;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`

export const Dots = styled.div`
  position: absolute;
  top: 300px;
  right: 200px;
  z-index: 3;

  @media (max-width: 1340px) {
    display: none;
  }
`

export const SelectLang = styled.select`
  top: 30px;
  position: fixed;
  left: 30px;
  padding: 10px;
  background-color: ${colors.black};
  border: 1px solid ${colors.grayBorder};
  border-radius: 8px;

  @media (max-width: 840px) {
    display: none;
  }
`
