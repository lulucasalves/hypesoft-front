import Image from 'next/image'
import {
  Buttons,
  Button,
  Container,
  Description,
  PhotoDiv,
  TextSection,
  Title,
  TextSocial,
  SocialMedias,
  ButtonSocial
} from './styles'
import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'

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
        <div>
          <TextSocial>Follow me on</TextSocial>
          <SocialMedias>
            <ButtonSocial
              href="https://www.linkedin.com/in/lulucasalves"
              target="_blank"
            >
              <FaLinkedinIn />
            </ButtonSocial>
            <ButtonSocial
              href="https://github.com/lulucasalves"
              target="_blank"
            >
              <FaGithub />
            </ButtonSocial>
            <ButtonSocial
              href="https://www.behance.net/lucasryanalve"
              target="_blank"
            >
              <FaBehance />
            </ButtonSocial>
            <ButtonSocial
              href="https://medium.com/@lulucasalves"
              target="_blank"
            >
              <FaMediumM />
            </ButtonSocial>
          </SocialMedias>
        </div>
      </TextSection>
      <PhotoDiv>
        <Image src="/images/photo.png" height={974 / 1.1} width={870 / 1.1} />
      </PhotoDiv>
    </Container>
  )
}
