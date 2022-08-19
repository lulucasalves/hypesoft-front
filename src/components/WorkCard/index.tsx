import Image from 'next/image'
import { IWorkCard } from '../../types'
import { ArrowRight } from '../ArrowRight'
import { Card, CardDiv, CtaDiv, CtaText, Title } from './styles'

export function WorkCard({ image, title, redirect }: IWorkCard) {
  return (
    <CardDiv onClick={redirect}>
      <Image src={image} width={397} height={224} />

      <Card>
        <Title>{title}</Title>
        <CtaDiv>
          <CtaText>view project</CtaText>
          <ArrowRight />
        </CtaDiv>
      </Card>
    </CardDiv>
  )
}
