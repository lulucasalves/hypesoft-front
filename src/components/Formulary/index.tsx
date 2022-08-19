import { Button, Formulary, InputDiv, TextArea, Title } from './styles'
import { FiSend } from 'react-icons/fi'

export function FormularySection() {
  return (
    <Formulary>
      <Title>Let me know here.</Title>
      <form>
        <InputDiv>
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
        </InputDiv>
        <InputDiv>
          <input placeholder="Subjects" />
        </InputDiv>
        <TextArea placeholder="Message" />
      </form>
      <Button>
        <p>Send Message</p>
        <FiSend />
      </Button>
    </Formulary>
  )
}
