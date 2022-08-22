import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { About } from '../../components/About'
import { LangProvider } from '../../store/Translate'

describe('<About />', () => {
  it('Test if about component render', () => {
    render(<About />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('about')
    expect(Component).toBeInTheDocument()
  })
})
