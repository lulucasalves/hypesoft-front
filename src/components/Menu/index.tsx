import Image from 'next/image'
import { ImageBackground, Item, Nav, Dots } from './styles'

export function Menu() {
  return (
    <>
      <ImageBackground />
      <Dots>
        <Image src="/vectors/blackDots.svg" width={150} height={150} />
      </Dots>
      <Nav>
        <Item href="#about">about</Item>
        <Item href="#services">services</Item>
        <Item href="#works">works</Item>
        <Item href="#contact">contact</Item>
      </Nav>
      
    </>
  )
}
