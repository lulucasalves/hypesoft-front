import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Contact } from '../../components/Contact'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Contact />)
    const Component = screen.getByTestId('contact')
    expect(Component).toBeInTheDocument()
  })
})
