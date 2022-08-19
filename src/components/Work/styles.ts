import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1340px) {
    padding-bottom: 100px;
  }
`

export const CardsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 125px;

  @media (max-width: 1340px) {
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0;
  }
`
