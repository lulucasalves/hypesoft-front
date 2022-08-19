import Image from 'next/image'
import { ICompanyCard } from '../../types'
import { ArrowRight } from '../ArrowRight'
import { Card } from './styles'

export function CompanyCard({
  image,
  last = false,
  width,
  height
}: ICompanyCard) {
  return (
    <Card>
      {last ? (
        <ArrowRight />
      ) : (
        <Image src={image || ''} width={width} height={height} />
      )}
    </Card>
  )
}
