import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Work } from '../../components/Work'
import { LangProvider } from '../../store/Translate'

describe('<Work />', () => {
  it('Test if work component render', () => {
    render(<Work />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('works')
    expect(Component).toBeInTheDocument()
  })
})
