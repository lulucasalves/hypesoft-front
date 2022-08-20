import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Testimonials } from '../../components/Testimonials'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Testimonials />)
    const Component = screen.getByTestId('testimonials')
    expect(Component).toBeInTheDocument()
  })
})
