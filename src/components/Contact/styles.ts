import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
  align-items: center;
  position: relative;

  @media (max-width: 1340px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const DotsDiv = styled.div`
  position: absolute;
  top: -35px;
  right: -77px;

  @media (max-width: 1340px) {
    display: none;
  }
`
