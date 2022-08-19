import { Content, Icons, Info, Title } from './styles'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'

export function ContactContent() {
  return (
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
  )
}
