import { useState } from 'react'
import { Feedback } from '../Feedback'
import { SectionTitle } from '../SectionTitle'
import { TestimonialCard } from '../TestimonialCard'
import { Container, Content } from './styles'

export function Testimonials() {
  const [position, setPosition] = useState(1)

  function getText() {
    if (position === 2) {
      return 'testimonial2'
    }

    if (position === 3) {
      return 'testimonial3'
    }

    if (position === 4) {
      return 'testimonial4'
    }

    return 'testimonial1'
  }

  return (
    <Container data-testid="testimonials">
      <SectionTitle title="Testimonials" />
      <Content>
        <div>
          <TestimonialCard
            onClick={() => setPosition(1)}
            image="url(./images/jeffBezos.jpg)"
            title="Jeff Bezos"
            description="ceoFounder"
            company="Google"
          />
          <TestimonialCard
            onClick={() => setPosition(2)}
            image="url(./images/shantanuNarayen.jpeg)"
            title="Shantanu Narayen"
            description="ceo"
            company="Adobe"
          />
          <TestimonialCard
            onClick={() => setPosition(3)}
            image="url(./images/noahLevin.jpg)"
            title="Noah Levin"
            description="director"
            company="Figma"
          />
          <TestimonialCard
            onClick={() => setPosition(4)}
            image="url(./images/stewardButterfield.png)"
            title="Stewart Butterfield"
            description="ceoFounder"
            company="Slack"
          />
        </div>
        <Feedback
          data-testid="feedback-text"
          text={getText()}
          position={position}
        />
      </Content>
    </Container>
  )
}
