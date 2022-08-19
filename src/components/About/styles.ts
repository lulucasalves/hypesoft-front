import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 20px;
`

export const DescriptionDiv = styled.div`
  width: 50%;
  margin-top: -32px;
`

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${colors.muted};
  margin-bottom: 32px;
`

export const ExperienceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const TextH4 = styled.h4`
  font-size: 70px;
  color: ${colors.secondary};
  margin-right: 16px;
  font-weight: 400;
`

export const TextP = styled.p`
  font-size: 20px;
  line-height: 30px;
`
