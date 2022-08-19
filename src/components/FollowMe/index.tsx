import { TextSocial, SocialMedias, ButtonSocial } from './styles'
import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'

export function FollowMe() {
  return (
    <div>
      <TextSocial>Follow me on</TextSocial>
      <SocialMedias>
        <ButtonSocial
          href="https://www.linkedin.com/in/lulucasalves"
          target="_blank"
        >
          <FaLinkedinIn />
        </ButtonSocial>
        <ButtonSocial href="https://github.com/lulucasalves" target="_blank">
          <FaGithub />
        </ButtonSocial>
        <ButtonSocial
          href="https://www.behance.net/lucasryanalve"
          target="_blank"
        >
          <FaBehance />
        </ButtonSocial>
        <ButtonSocial href="https://medium.com/@lulucasalves" target="_blank">
          <FaMediumM />
        </ButtonSocial>
      </SocialMedias>
    </div>
  )
}
