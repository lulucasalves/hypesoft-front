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
          I am currently a student of graphic design and systems analysis and
          development, I started my internship in 2021 and I am looking for an
          opportunity for a JR position and in a while I will become a PL
          developer
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
