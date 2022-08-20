import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Work } from '../../components/Work'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Work />)
    const Component = screen.getByTestId('works')
    expect(Component).toBeInTheDocument()
  })
})
