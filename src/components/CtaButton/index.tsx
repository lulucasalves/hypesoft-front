import { Trans } from '../Trans'
import { Arrow, Button, Line } from './styles'

export function CtaButton({ text }: { text: string }) {
  return (
    <Button>
      <p>
        <Trans text={text} />
      </p>
      <Line />
      <Arrow />
    </Button>
  )
}
