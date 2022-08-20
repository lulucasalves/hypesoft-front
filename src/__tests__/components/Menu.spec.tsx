import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Menu } from '../../components/Menu'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Menu />)
    const Component = screen.getByTestId('menu')
    expect(Component).toBeInTheDocument()
  })
})
