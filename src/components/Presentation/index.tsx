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
import { Trans } from '../Trans'

export function Presentation() {
  return (
    <Container data-testid="home">
      <TextSection>
        <Title>
          <Trans text="introduction1" /> <br />
          <span>
            <Trans text="introduction2" />.
          </span>
        </Title>
        <Description>
          <Trans text="description" />
        </Description>
        <Buttons>
          <Button href="#contact">
            <Trans text="hire" />
          </Button>
          <Button href="#works">
            <Trans text="viewWork" />
          </Button>
        </Buttons>
        <FollowMe />
      </TextSection>
      <PhotoDiv>
        <Image src="/images/photo.png" height={974 / 1.1} width={870 / 1.1} />
      </PhotoDiv>
    </Container>
  )
}
