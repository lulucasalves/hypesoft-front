import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  height: 100px;
  width: 312px;
  align-items: center;
  display: flex;
  cursor: pointer;
  padding: 24px;
  margin-bottom: 5px;
  opacity: 1;
  transition: 0.3s;

  &:last-child {
    margin: 0;
  }

  &:hover {
    opacity: 0.9;
    transition: 0.3s;
    margin-left: -10px;
  }

  @media (max-width: 1340px) {
    &:last-child {
      margin-bottom: 50px;
    }
  }
`

export const ImageDiv = styled.div`
  border-radius: 100px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 52px;
  height: 52px;
  background-image: ${(props: { backgroundImage: string }) =>
    props ? props.backgroundImage : ''};
  margin-right: 15px;
`

export const Title = styled.h4`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 28px;
  color: ${colors.black};
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${colors.muted};

  span {
    color: ${colors.secondary};
  }
`
