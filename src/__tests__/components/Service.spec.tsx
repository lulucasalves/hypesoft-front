import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Service } from '../../components/Service'

describe('<Service />', () => {
  it('Test if service component render', () => {
    render(<Service />)
    const Component = screen.getByTestId('services')
    expect(Component).toBeInTheDocument()
  })
})
