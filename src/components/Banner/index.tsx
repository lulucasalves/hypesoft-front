import { CtaButton } from '../CtaButton'
import { Trans } from '../Trans'
import { Container, Text } from './styles'

export function Banner() {
  return (
    <Container data-testid="banner">
      <Text>
        <Trans text="banner1" /> <br />
        <Trans text="banner2" />{' '}
        <span>
          <Trans text="banner3" />
        </span>
        .
      </Text>
      <CtaButton text="hire" />
    </Container>
  )
}
