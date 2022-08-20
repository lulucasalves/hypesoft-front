import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { About } from '../../components/About'

describe('Test about component', () => {
  it('Test if about component render', () => {
    render(<About />)
    const Component = screen.getByTestId('about')
    expect(Component).toBeInTheDocument()
  })
})
