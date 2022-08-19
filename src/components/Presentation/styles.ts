import { colors } from './../../styles/colors'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
`

export const TextSection = styled.div`
  margin-top: 230px;
  position: relative;
  width: 46.5%;
  z-index: 2;
`
export const Title = styled.h1`
  font-size: 80px;
  font-weight: 400;
  min-width: 800px;
  z-index: 1;
  position: relative;

  span {
    color: ${colors.primary};

    &:before {
      content: '';
      position: absolute;
      width: 594px;
      height: 36px;
      background: ${colors.primary};
      opacity: 0.15;
      left: 15px;
      bottom: 0px;
      z-index: 0;
    }
  }
`

export const Description = styled.p`
  margin-top: 32px;
  font-size: 20px;
  line-height: 32px;
  color: ${colors.muted};
  width: 580px;
`

export const PhotoDiv = styled.div`
  margin-right: -125px;
  width: 100%;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

export const Button = styled.a`
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 5px;
  margin-right: 15px;
  padding: 20px 30px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
  text-decoration: none;
  display: flex;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    transition: 0.3s;
  }
`

export const TextSocial = styled.p`
  margin-top: 157.5px;
  margin-bottom: 10px;
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonSocial = styled.a`
  background-color: ${colors.white};
  border-radius: 5px;
  align-items: center;
  display: flex;
  margin-right: 10px;
  padding: 15px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
  text-decoration: none;

  svg {
    fill: ${colors.black};
    font-size: 20px;
    transition: 0.4s;
  }

  &:hover {
    background-color: ${colors.primary};
    transition: 0.3s;

    svg {
      fill: ${colors.white};
      transition: 0.3s;
    }
  }
`
