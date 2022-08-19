import { colors } from './../../styles/colors'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;

  @media (max-width: 1340px) {
    justify-content: center;
    align-items: center;
  }
`

export const TextSection = styled.div`
  margin-top: 230px;
  position: relative;
  width: 46.5%;
  z-index: 2;

  @media (max-width: 1340px) {
    margin-top: 80px;
    text-align: center;
    width: 100%;
  }
`
export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  min-width: 800px;
  z-index: 1;
  position: relative;
  animation: titleAnimation 1s forwards;

  @keyframes titleAnimation {
    from {
      margin-left: -100px;
      opacity: 0;
    }

    to {
      margin-left: 0;
      opacity: 1;
    }
  }

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

      @media (max-width: 1340px) {
        width: 500px;
        left: 120px;
      }
    }
  }

  @media (max-width: 840px) {
    font-size: 3rem;
    min-width: 0;

    span {
      &:before {
        height: 20px;
        width: 300px;
        left: 20px;
      }
    }
  }
`

export const Description = styled.p`
  margin-top: 32px;
  font-size: 1.25rem;
  line-height: 32px;
  color: ${colors.muted};
  width: 580px;
  animation: descriptionAnimation 1.5s forwards;

  @keyframes descriptionAnimation {
    from {
      margin-left: -100px;
      opacity: 0;
    }

    to {
      margin-left: 0;
      opacity: 1;
    }
  }

  @media (max-width: 1340px) {
    width: 100%;
  }
`

export const PhotoDiv = styled.div`
  margin-right: -125px;
  width: 100%;

  animation: photoAnimation 1.5s forwards;

  @keyframes photoAnimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 1340px) {
    display: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  animation: buttonsAnimation 2s forwards;

  @keyframes buttonsAnimation {
    from {
      margin-left: -100px;
      opacity: 0;
    }

    to {
      margin-left: 0;
      opacity: 1;
    }
  }

  @media (max-width: 1340px) {
    justify-content: center;
  }
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
