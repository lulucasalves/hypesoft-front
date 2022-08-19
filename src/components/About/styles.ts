import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
  align-items: center;

  @media (max-width: 1340px) {
    flex-direction: column;
  }

  animation: descriptionAnimation 2s forwards;

  @keyframes descriptionAnimation {
    from {
      margin-right: -100px;
      opacity: 0;
    }

    to {
      margin-right: 0;
      opacity: 1;
    }
  }
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 3rem;
  line-height: 56px;
  margin-bottom: 20px;

  @media (max-width: 1340px) {
    text-align: center;
  }
`

export const DescriptionDiv = styled.div`
  width: 50%;
  margin-top: -32px;

  @media (max-width: 1340px) {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 840px) {
    width: 100%;
  }
`

export const SubTitle = styled.p`
  font-size: 1.125rem;
  line-height: 28px;
  color: ${colors.muted};
  margin-bottom: 32px;
`

export const ExperienceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1340px) {
    width: 100%;
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }
`

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const TextH4 = styled.h4`
  font-size: 4.375rem;
  color: ${colors.secondary};
  margin-right: 16px;
  font-weight: 400;
`

export const TextP = styled.p`
  font-size: 1.25rem;
  line-height: 30px;
`
