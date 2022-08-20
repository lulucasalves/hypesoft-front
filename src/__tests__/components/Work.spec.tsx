import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Work } from '../../components/Work'

describe('<Work />', () => {
  it('Test if work component render', () => {
    render(<Work />)
    const Component = screen.getByTestId('works')
    expect(Component).toBeInTheDocument()
  })
})
