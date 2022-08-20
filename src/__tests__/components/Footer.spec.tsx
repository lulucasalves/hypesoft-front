import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '../../components/Footer'

describe('<Footer />', () => {
  it('Test if footer component render', () => {
    render(<Footer />)
    const Component = screen.getByTestId('footer')
    expect(Component).toBeInTheDocument()
  })
})
