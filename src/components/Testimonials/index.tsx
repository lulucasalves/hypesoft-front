import { useState } from 'react'
import { Feedback } from '../Feedback'
import { SectionTitle } from '../SectionTitle'
import { TestimonialCard } from '../TestimonialCard'
import { Container, Content } from './styles'

export function Testimonials() {
  const [position, setPosition] = useState(1)

  function getText() {
    if (position === 2) {
      return 'I´m a testimonial. Lucas made me an Api to configure my databases and it has been a success, today its working good.'
    }

    if (position === 3) {
      return 'Lucas is the best Front-End developer JR that I had in my team, he always solve problems that i have with my company applications'
    }

    if (position === 4) {
      return 'I search Lucas in Linkedin, and i call him to make me an App, that man is so fast and make me a excellent work'
    }

    return 'If you`re looking for someone who will challenge your UX/UI thinking and really cut to the core of what`s important for users. On top of that, he brings a level of enthusiasm to the craft that`s energizing for everyone who works with him.'
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
            description="CEO & Founder of"
            company="Google"
          />
          <TestimonialCard
            onClick={() => setPosition(2)}
            image="url(./images/shantanuNarayen.jpeg)"
            title="Shantanu Narayen"
            description="CEO of"
            company="Adobe"
          />
          <TestimonialCard
            onClick={() => setPosition(3)}
            image="url(./images/noahLevin.jpg)"
            title="Noah Levin"
            description="Director of Design,"
            company="Figma"
          />
          <TestimonialCard
            onClick={() => setPosition(4)}
            image="url(./images/stewardButterfield.png)"
            title="Stewart Butterfield"
            description="CEO & Founder of"
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
