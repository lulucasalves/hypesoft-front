import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const CardDiv = styled.div`
  width: 397px;
  height: 240px;
  background-color: ${colors.white};
  border-radius: 10px 10px 8px 8px;
  cursor: pointer;

  @media (max-width: 1340px) {
    margin-bottom: 130px;
  }

  @media (max-width: 840px) {
    text-align: center;
    width: 100%;
  }

  img {
    border-radius: 8px 8px 0 0;
  }

  .svgArrow {
    path {
      stroke: ${colors.secondary};
    }
  }

  &:hover {
    p {
      transition: 0.6s;
      opacity: 1;
      max-width: 200px;
    }
  }
`

export const Title = styled.h4`
  font-size: 1.5rem;
  color: ${colors.black};
  text-align: left;
  font-weight: 400;
  margin-bottom: 15px;
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

export const Card = styled.div`
  width: 100%;
  background-color: ${colors.white};
  border-radius: 6px;
  padding: 25px;
`
