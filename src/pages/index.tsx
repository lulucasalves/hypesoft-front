import type { NextPage } from 'next'
import Head from 'next/head'
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

  @media (max-width: 1836px) {
    padding: 0 250px;
  }

  @media (max-width: 1730px) {
    padding: 0 200px;
  }

  @media (max-width: 1634px) {
    padding: 0 150px;
  }

  @media (max-width: 1520px) {
    padding: 0 100px;
  }

  @media (max-width: 1425px) {
    padding: 0 50px;
  }

  @media (max-width: 840px) {
    padding: 0 20px;
  }
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hypesoft - Lucas Alves</title>
      </Head>
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
    </>
  )
}

export default Home
