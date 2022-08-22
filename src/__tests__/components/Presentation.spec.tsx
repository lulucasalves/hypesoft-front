import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Presentation } from '../../components/Presentation'
import { LangProvider } from '../../store/Translate'

describe('<Presentation />', () => {
  it('Test if home component render', () => {
    render(<Presentation />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('home')
    expect(Component).toBeInTheDocument()
  })
})
