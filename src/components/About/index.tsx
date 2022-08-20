import Image from 'next/image'
import { CtaButton } from '../CtaButton'
import { Trans } from '../Trans'
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
    <Container id="about" data-testid="about">
      <Image src="/images/computer.png" width={560} height={542} />
      <DescriptionDiv>
        <Title>
          <Trans text="aboutTitle" />
        </Title>
        <SubTitle>
          <Trans text="aboutDescription" />
        </SubTitle>
        <ExperienceDiv>
          <TextDiv>
            <TextH4>01+</TextH4>
            <TextP>
              <Trans text="yearsOf" />
              <br /> <Trans text="experience" />
            </TextP>
          </TextDiv>
          <TextDiv>
            <TextH4>30+</TextH4>
            <TextP>
              <Trans text="completed" />
              <br /> <Trans text="projects" />
            </TextP>
          </TextDiv>
        </ExperienceDiv>
        <CtaButton text="hi" />
      </DescriptionDiv>
    </Container>
  )
}
