import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Experience } from '../../components/Experience'
import { LangProvider } from '../../store/Translate'

describe('<Experience />', () => {
  it('Test if experience component render', () => {
    render(<Experience />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('experience')
    expect(Component).toBeInTheDocument()
  })
})
