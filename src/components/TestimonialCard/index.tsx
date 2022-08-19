import Image from 'next/image'
import { ICompanyCard, ITestimonialCard } from '../../types'
import { Card, Description, ImageDiv, Title } from './styles'

export function TestimonialCard({
  image,
  title,
  description,
  company,
  onClick
}: ITestimonialCard) {
  return (
    <Card onClick={() => onClick()}>
      <ImageDiv backgroundImage={image} />

      <div>
        <Title>{title}</Title>
        <Description>
          {description} <span>{company}</span>
        </Description>
      </div>
    </Card>
  )
}
