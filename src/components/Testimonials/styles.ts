import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
  align-items: center;
  flex-direction: column;

  @media (max-width: 840px) {
    padding-bottom: 100px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1340px) {
    justify-content: center;
    flex-direction: column;
  }
`
