import { Container, CardsDiv } from './styles'
import { SectionTitle } from '../SectionTitle'
import { WorkCard } from '../WorkCard'

export function Work() {
  return (
    <Container id="works" data-testid="works">
      <SectionTitle title="selectWork" />
      <CardsDiv>
        <WorkCard
          redirect={() => window.open('https://smurl.vercel.app/', '_blank')}
          image="https://github.com/lulucasalves/smurl-front/blob/main/.github/image-1.png?raw=true"
          title="urlShort"
        />
        <WorkCard
          redirect={() =>
            window.open('https://socialoff.vercel.app/', '_blank')
          }
          image="https://github.com/lulucasalves/socialoff-front/blob/main/.github/image-1.png?raw=true"
          title="archivesDownload"
        />
        <WorkCard
          redirect={() =>
            window.open('https://arcade-retro.herokuapp.com/', '_blank')
          }
          image="https://github.com/lulucasalves/arcade-front/blob/main/.github/img-1.png?raw=true"
          title="arcade"
        />
      </CardsDiv>
      <CardsDiv>
        <WorkCard
          redirect={() =>
            window.open('https://coffeecode.vercel.app/', '_blank')
          }
          image="https://github.com/lulucasalves/coffeecode-front/blob/main/.github/img-3.png?raw=true"
          title="cafeSite"
        />
        <WorkCard
          redirect={() =>
            window.open('https://spotifyclone-tawny.vercel.app/', '_blank')
          }
          image="https://github.com/lulucasalves/spotifyclone-front/blob/master/.github/img1.png?raw=true"
          title="spotify"
        />
        <WorkCard
          redirect={() =>
            window.open('https://overfy-blush.vercel.app/', '_blank')
          }
          image="https://github.com/lulucasalves/overfy-front/blob/main/.github/img-1.png?raw=true"
          title="travel"
        />
      </CardsDiv>
    </Container>
  )
}
