import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '../../components/Footer'
import { LangProvider } from '../../store/Translate'

describe('<Footer />', () => {
  it('Test if footer component render', () => {
    render(<Footer />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('footer')
    expect(Component).toBeInTheDocument()
  })
})
