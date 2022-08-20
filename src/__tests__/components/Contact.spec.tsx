import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Contact } from '../../components/Contact'

describe('<Contact />', () => {
  it('Test if contact component render', () => {
    render(<Contact />)
    const Component = screen.getByTestId('contact')
    expect(Component).toBeInTheDocument()
  })
})
