import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Presentation } from '../../components/Presentation'

describe('<Presentation />', () => {
  it('Test if home component render', () => {
    render(<Presentation />)
    const Component = screen.getByTestId('home')
    expect(Component).toBeInTheDocument()
  })
})
