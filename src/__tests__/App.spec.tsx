import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Home />)
    const Menu = screen.getByTestId('menu')
    const Banner = screen.getByTestId('banner')
    const About = screen.getByTestId('about')
    const Contact = screen.getByTestId('contact')
    const Experience = screen.getByTestId('experience')
    const Footer = screen.getByTestId('footer')
    const Presentation = screen.getByTestId('home')
    const Service = screen.getByTestId('services')
    const Work = screen.getByTestId('works')
    const Testimonial = screen.getByTestId('testimonials')

    expect(Menu).toBeInTheDocument()
    expect(Banner).toBeInTheDocument()
    expect(About).toBeInTheDocument()
    expect(Contact).toBeInTheDocument()
    expect(Experience).toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
    expect(Presentation).toBeInTheDocument()
    expect(Work).toBeInTheDocument()
    expect(Service).toBeInTheDocument()
    expect(Testimonial).toBeInTheDocument()
  })
})
