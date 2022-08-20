import { TextSocial, SocialMedias, ButtonSocial } from './styles'
import { FaBehance, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import { Trans } from '../Trans'

export function FollowMe() {
  return (
    <div>
      <TextSocial>
        <Trans text="follow" />
      </TextSocial>
      <SocialMedias>
        <ButtonSocial
          animation="0s"
          href="https://www.linkedin.com/in/lulucasalves"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </ButtonSocial>
        <ButtonSocial
          animation="0.25s"
          href="https://github.com/lulucasalves"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </ButtonSocial>
        <ButtonSocial
          animation="0.5s"
          href="https://www.behance.net/lucasryanalve"
          target="_blank"
          rel="noreferrer"
        >
          <FaBehance />
        </ButtonSocial>
        <ButtonSocial
          animation="0.75s"
          href="https://medium.com/@lulucasalves"
          target="_blank"
          rel="noreferrer"
        >
          <FaMediumM />
        </ButtonSocial>
      </SocialMedias>
    </div>
  )
}
