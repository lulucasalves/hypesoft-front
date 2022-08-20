import { ISectionTitle } from '../../types'
import { Trans } from '../Trans'
import { Bar, Title } from './styles'

export function SectionTitle({ title }: ISectionTitle) {
  return (
    <>
      <Title>
        <Trans text={title} />
      </Title>
      <Bar />
    </>
  )
}
