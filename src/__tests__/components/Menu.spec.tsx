import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Menu } from '../../components/Menu'
import { LangProvider } from '../../store/Translate'

describe('<Menu />', () => {
  it('Test if menu component render', () => {
    render(<Menu />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('menu')
    expect(Component).toBeInTheDocument()
  })
})
