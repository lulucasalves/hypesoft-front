import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Service } from '../../components/Service'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Service />)
    const Component = screen.getByTestId('services')
    expect(Component).toBeInTheDocument()
  })
})
