import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Card = styled.div`
  width: 290px;
  height: 350px;
  background-color: ${colors.white};
  border-radius: 6px;
  padding: 37px;
  cursor: pointer;

  @media (max-width: 1340px) {
    margin-bottom: 20px;
  }

  svg {
    font-size: 2.5rem;
    fill: ${colors.black};
    transition: 0.6s;
  }

  img {
    transition: 0.6s;
  }

  .svgArrow {
    fill: none;
    path {
      stroke: ${colors.black};
      transition: 0.6s;
    }
  }

  &:hover {
    svg {
      fill: ${colors.secondary};
      transition: 0.6s;
    }

    p {
      transition: 0.6s;
      opacity: 1;
      max-width: 200px;
    }

    .svgArrow {
      fill: none;
      path {
        stroke: ${colors.secondary};
        transition: 0.6s;
      }
    }

    img {
      color: ${colors.secondary};
    }
  }
`

export const Title = styled.h4`
  font-size: 2rem;
  color: ${colors.black};
  margin-top: 90px;
  font-weight: 400;
`

export const Bar = styled.div`
  background-color: ${colors.secondary30};
  border-radius: 3px;
  width: 64px;
  height: 3px;
  margin-top: 15px;
  margin-bottom: 20px;
`

export const CtaDiv = styled.div`
  display: flex;
  align-items: center;
`

export const CtaText = styled.p`
  color: ${colors.secondary};
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: 600;
  opacity: 0;
  transition: 0.6s;
  max-width: 0;
  white-space: nowrap;
`
