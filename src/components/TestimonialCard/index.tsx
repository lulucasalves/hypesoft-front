import Image from 'next/image'
import { ICompanyCard, ITestimonialCard } from '../../types'
import { Trans } from '../Trans'
import { Card, Description, ImageDiv, Title } from './styles'

export function TestimonialCard({
  image,
  title,
  description,
  company,
  onClick
}: ITestimonialCard) {
  return (
    <Card data-testid="test-card" onClick={() => onClick()}>
      <ImageDiv backgroundImage={image} />

      <div>
        <Title>{title}</Title>
        <Description>
          <Trans text={description} /> <span>{company}</span>
        </Description>
      </div>
    </Card>
  )
}
