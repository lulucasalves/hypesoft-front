import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Testimonials } from '../../components/Testimonials'

describe('<Testimonials />', () => {
  it('Test if testimonials component render', () => {
    render(<Testimonials />)
    const Component = screen.getByTestId('testimonials')
    expect(Component).toBeInTheDocument()
  })
})
