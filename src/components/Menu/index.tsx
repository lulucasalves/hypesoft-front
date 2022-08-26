import { useContext } from 'react'
import { IMyContext, MyContext } from '../../store/Config'
import { Trans } from '../Trans'
import { ImageBackground, Item, Nav, SelectLang } from './styles'

export function Menu() {
  const { changeLang, lang } = useContext<IMyContext>(MyContext)

  return (
    <div data-testid="menu">
      <SelectLang
        value={lang}
        onChange={(e) => changeLang && changeLang(e.target.value)}
      >
        <option value="en">EN-US</option>
        <option value="pt">PT-BR</option>
      </SelectLang>
      <ImageBackground />
      <Nav>
        <Item href="#about">
          <Trans text="about" />
        </Item>
        <Item href="#services">
          <Trans text="services" />
        </Item>
        <Item href="#works">
          <Trans text="works" />
        </Item>
        <Item href="#contact">
          <Trans text="contact" />
        </Item>
      </Nav>
    </div>
  )
}
