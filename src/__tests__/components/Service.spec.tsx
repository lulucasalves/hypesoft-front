import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Service } from '../../components/Service'
import { LangProvider } from '../../store/Translate'

describe('<Service />', () => {
  it('Test if service component render', () => {
    render(<Service />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('services')
    expect(Component).toBeInTheDocument()
  })
})
