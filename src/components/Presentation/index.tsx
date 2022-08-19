import Image from 'next/image'
import {
  Buttons,
  Button,
  Container,
  Description,
  PhotoDiv,
  TextSection,
  Title
} from './styles'
import { FollowMe } from '../FollowMe'

export function Presentation() {
  return (
    <Container>
      <TextSection>
        <Title>
          Hello, I’m Lucas, a <br />
          <span>Fullstack Developer.</span>
        </Title>
        <Description>
          Based in Brazil, i have been studying since 2021 to become a Front-End
          developer, and i'm looking for my first experience as a Developer.
        </Description>
        <Buttons>
          <Button href="#contact">hire me</Button>
          <Button href="#works">view work</Button>
        </Buttons>
        <FollowMe />
      </TextSection>
      <PhotoDiv>
        <Image src="/images/photo.png" height={974 / 1.1} width={870 / 1.1} />
      </PhotoDiv>
    </Container>
  )
}
