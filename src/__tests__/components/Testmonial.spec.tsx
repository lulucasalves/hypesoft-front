import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Testimonials } from '../../components/Testimonials'
import { LangProvider } from '../../store/Translate'

describe('<Testimonials />', () => {
  it('Test if testimonials component render', () => {
    render(<Testimonials />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('testimonials')
    expect(Component).toBeInTheDocument()
  })
})
