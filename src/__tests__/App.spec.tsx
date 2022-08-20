import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Home />)
    const Component = screen.getByTestId('page')
    expect(Component).toBeInTheDocument()
  })
})
