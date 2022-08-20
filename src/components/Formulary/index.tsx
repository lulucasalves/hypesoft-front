import { Button, Formulary, InputDiv, TextArea, Title } from './styles'
import { FiSend } from 'react-icons/fi'
import { useIntl } from 'react-intl'
import { Trans } from '../Trans'

export function FormularySection() {
  const { formatMessage } = useIntl()

  return (
    <Formulary>
      <Title>
        <Trans text="letKnow" />
      </Title>
      <form>
        <InputDiv>
          <input placeholder={formatMessage({ id: 'name' })} />
          <input placeholder={formatMessage({ id: 'email' })} />
        </InputDiv>
        <InputDiv>
          <input placeholder={formatMessage({ id: 'subjects' })} />
        </InputDiv>
        <TextArea placeholder={formatMessage({ id: 'message' })} />
      </form>
      <Button>
        <p>
          <Trans text="send" />
        </p>
        <FiSend />
      </Button>
    </Formulary>
  )
}
