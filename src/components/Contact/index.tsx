import Image from 'next/image'
import { Container, DotsDiv } from './styles'

import { FormularySection } from '../Formulary'
import { ContactContent } from '../ContactContent'

export function Contact() {
  return (
    <Container id="contact" data-testid="contact">
      <DotsDiv>
        <Image src="/vectors/pinkDots.svg" width={152} height={68} />
      </DotsDiv>
      <FormularySection />
      <ContactContent />
    </Container>
  )
}
