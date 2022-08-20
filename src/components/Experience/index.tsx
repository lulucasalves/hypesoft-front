import { CompanyCard } from '../CompanyCard'
import { Trans } from '../Trans'
import { Container, Text, Cards } from './styles'

export function Experience() {
  return (
    <Container data-testid="experience">
      <Text>
        <Trans text="experience1" />
        <span>289+</span>
        <br /> <Trans text="experience2" />
        <br />
        <Trans text="experience3" />
      </Text>
      <Cards>
        <CompanyCard image="/images/youtube.png" width={117.91} height={26} />
        <CompanyCard image="/images/google.png" width={98.04} height={32} />
        <CompanyCard image="/images/adobe.png" width={108.8} height={26} />
        <CompanyCard image="/images/sketch.png" width={113.04} height={26} />
        <CompanyCard last />
      </Cards>
    </Container>
  )
}
