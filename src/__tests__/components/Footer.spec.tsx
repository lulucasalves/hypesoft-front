import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '../../components/Footer'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Footer />)
    const Component = screen.getByTestId('footer')
    expect(Component).toBeInTheDocument()
  })
})
