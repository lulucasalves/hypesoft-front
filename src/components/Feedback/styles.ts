import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Ballon = styled.div`
  position: relative;
  height: 415px;
  width: 890px;
  background-color: ${colors.white};
  border-radius: 3px;
  padding: 50px;

  @media (max-width: 840px) {
    width: 100%;
    height: 100%;
  }
`

export const ImageDiv = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`

export const FeedbackDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  svg {
    font-size: 1.75rem;
    fill: ${colors.yellow};
    margin-right: 8px;
  }

  p {
    color: ${colors.black};
    font-size: 1.125rem;
  }
`

export const TextFeedback = styled.p`
  color: ${colors.black};
  font-size: 2rem;
  line-height: 45px;
`

export const ArrowLeft = styled.div`
  position: absolute;
  padding: 15px;
  border-width: 0px 0px 2px 2px;
  transform: rotate(45deg);
  background-color: ${colors.white};
  top: ${(props: { top: string }) => (props.top ? props.top : '125px')};
  left: -12px;

  @media (max-width: 1340px) {
    display: none;
  }
`
