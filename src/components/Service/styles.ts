import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 170px;
  align-items: center;
  flex-direction: column;
`

export const CardsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1340px) {
    justify-content: center;
    flex-direction: column;
  }
`
