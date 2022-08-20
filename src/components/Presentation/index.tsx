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
    <Container data-testid="home">
      <TextSection>
        <Title>
          Hello, I&apos;m Lucas, a <br />
          <span>Fullstack Developer.</span>
        </Title>
        <Description>
          I started in the programming area in June 2021 and I have been
          studying and evolving in the Front-End and Back-End areas with Python
          and Javascript
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
