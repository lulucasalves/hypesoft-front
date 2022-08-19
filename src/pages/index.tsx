import type { NextPage } from 'next'
import styled from 'styled-components'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { Presentation } from '../components/Presentation'
import { Service } from '../components/Service'
import { Testimonials } from '../components/Testimonials'
import { Work } from '../components/Work'

export const Base = styled.div`
  max-width: 100%;
  padding: 0 300px;
`

const Home: NextPage = () => {
  return (
    <Base>
      <Menu />
      <Presentation />
      <About />
      <Service />
      <Work />
      <Experience />
      <Banner />
      <Testimonials />
      <Contact />
      <Footer />
    </Base>
  )
}

export default Home
