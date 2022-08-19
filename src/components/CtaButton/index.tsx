import { Arrow, Button, Line } from './styles'

export function CtaButton({ text }: { text: string }) {
  return (
    <Button>
      <p>{text}</p>
      <Line />
      <Arrow />
    </Button>
  )
}
