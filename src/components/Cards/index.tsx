import { ICard } from '../../types'
import { ArrowRight } from '../ArrowRight'
import { Bar, Card, CtaDiv, CtaText, Title } from './styles'

export function Cards({ icon, title1, title2 }: ICard) {
  return (
    <Card>
      {icon}

      <Title>
        {title1}
        <br />
        {title2}
      </Title>
      <Bar />
      <CtaDiv>
        <CtaText>discuss now</CtaText>
        <ArrowRight />
      </CtaDiv>
    </Card>
  )
}
