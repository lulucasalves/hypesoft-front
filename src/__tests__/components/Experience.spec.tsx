import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Experience } from '../../components/Experience'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Experience />)
    const Component = screen.getByTestId('experience')
    expect(Component).toBeInTheDocument()
  })
})
