import { ISectionTitle } from '../../types'
import { Bar, Title } from './styles'

export function SectionTitle({ title }: ISectionTitle) {
  return (
    <>
      <Title>{title}</Title>
      <Bar />
    </>
  )
}
