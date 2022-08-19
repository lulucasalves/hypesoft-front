import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const TextSocial = styled.p`
  margin-top: 157.5px;
  margin-bottom: 10px;

  @media (max-width: 1340px) {
    margin-top: 50px;
  }
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1340px) {
    justify-content: center;
  }
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
    font-size: 1.25rem;
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
