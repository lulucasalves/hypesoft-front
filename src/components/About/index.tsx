import Image from 'next/image'
import { CtaButton } from '../CtaButton'
import {
  Container,
  DescriptionDiv,
  ExperienceDiv,
  SubTitle,
  TextDiv,
  TextH4,
  TextP,
  Title
} from './styles'

export function About() {
  return (
    <Container id="about">
      <Image src="/images/computer.png" width={560} height={542} />
      <DescriptionDiv>
        <Title>Back-End and Front-End developer based in Brazil.</Title>
        <SubTitle>
          Have been studying since the beginning of 2021, starting with HTML,
          CSS and JavaScript, joined the Trybe Full-Stack Developer course at
          november of 2021, learning so far React, Redux, Tests, and a few more
          features used in Front-End. Now im learning Back-End using JavaScript
          with NodeJS, Docker, MySql, and im feeling very excited about it!
        </SubTitle>
        <ExperienceDiv>
          <TextDiv>
            <TextH4>01+</TextH4>
            <TextP>
              Years of
              <br /> Experience
            </TextP>
          </TextDiv>
          <TextDiv>
            <TextH4>30+</TextH4>
            <TextP>
              Completed
              <br /> Projects
            </TextP>
          </TextDiv>
        </ExperienceDiv>
        <CtaButton text="say hi" />
      </DescriptionDiv>
    </Container>
  )
}
