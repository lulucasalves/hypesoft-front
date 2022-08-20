import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Experience } from '../../components/Experience'

describe('<Experience />', () => {
  it('Test if experience component render', () => {
    render(<Experience />)
    const Component = screen.getByTestId('experience')
    expect(Component).toBeInTheDocument()
  })
})
