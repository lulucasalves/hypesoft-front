import Image from 'next/image'
import {
  Button,
  Container,
  Content,
  DotsDiv,
  Formulary,
  Icons,
  Info,
  InputDiv,
  TextArea,
  Title
} from './styles'
import { FiSend } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'

export function Contact() {
  return (
    <Container id="contact">
      <DotsDiv>
        <Image src="/vectors/pinkDots.svg" width={152} height={68} />
      </DotsDiv>
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

      <Content>
        <Title>Get in touch</Title>
        <Info>
          <div>
            <IoLocationOutline />
          </div>
          <p>
            Street Exaporã, Number 395 <br />
            Taubaté-SP, Brazil
          </p>
        </Info>
        <Info>
          <div>
            <AiOutlineMail />
          </div>
          <p>
            lucas.alves.supus.@gmail.com
            <br />
            lucas.alves.supus.@outlook.com
          </p>
        </Info>
        <Info>
          <div>
            <BsTelephone />
          </div>
          <p>+55 (12) 99188-4702</p>
        </Info>
        <Icons>
          <a href="https://www.linkedin.com/in/lulucasalves" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/lulucasalves" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.behance.net/lucasryanalve" target="_blank">
            <FaBehance />
          </a>
          <a href="https://medium.com/@lulucasalves" target="_blank">
            <FaMediumM />
          </a>
        </Icons>
      </Content>
    </Container>
  )
}
