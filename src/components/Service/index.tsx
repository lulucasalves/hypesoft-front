import { Cards } from '../Cards'
import { Container, CardsDiv } from './styles'
import { BsBox, BsCode, BsCodeSlash } from 'react-icons/bs'
import { AiOutlineDatabase } from 'react-icons/ai'
import { SectionTitle } from '../SectionTitle'

export function Service() {
  return (
    <Container id="services" data-testid="services">
      <SectionTitle title="myServices" />
      <CardsDiv>
        <Cards icon={<BsBox />} title1="UI/UX" title2="Design" />
        <Cards icon={<BsCode />} title1="Back-End" title2="Development" />
        <Cards icon={<BsCodeSlash />} title1="Front-End" title2="Development" />
        <Cards
          icon={<AiOutlineDatabase />}
          title1="Database"
          title2="Administration"
        />
      </CardsDiv>
    </Container>
  )
}
