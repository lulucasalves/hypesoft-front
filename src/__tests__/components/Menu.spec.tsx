import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Menu } from '../../components/Menu'

describe('<Menu />', () => {
  it('Test if menu component render', () => {
    render(<Menu />)
    const Component = screen.getByTestId('menu')
    expect(Component).toBeInTheDocument()
  })
})
