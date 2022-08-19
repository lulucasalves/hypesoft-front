import { CtaButton } from '../CtaButton'
import { Container, Text } from './styles'

export function Banner() {
  return (
    <Container>
      <Text>
        Got a project in mind? Let&apos;s make <br />
        something awesome <span>together</span>.
      </Text>
      <CtaButton text="hire me" />
    </Container>
  )
}
