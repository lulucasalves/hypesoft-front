import { useIntl } from 'react-intl'
import { ITrans } from '../../types'

export function Trans({ text }: ITrans): any {
  const { formatMessage } = useIntl()

  return formatMessage({ id: text || '' })
}
