import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Contact } from '../../components/Contact'
import { LangProvider } from '../../store/Translate'

describe('<Contact />', () => {
  it('Test if contact component render', () => {
    render(<Contact />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('contact')
    expect(Component).toBeInTheDocument()
  })
})
