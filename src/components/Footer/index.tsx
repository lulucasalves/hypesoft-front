import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'
import { Container, TextDiv } from './styles'

export function Footer() {
  return (
    <Container>
      <Image src="/images/hypesoft.png" width={263} height={59} />
      <TextDiv>
        <p>
          Made with <AiFillHeart /> by Lucas and{' '}
          <a href="https://hypesoft.com.br" target="_blank">
            Hypesoft
          </a>
        </p>
      </TextDiv>
    </Container>
  )
}
