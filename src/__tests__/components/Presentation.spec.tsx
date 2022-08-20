import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Presentation } from '../../components/Presentation'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Presentation />)
    const Component = screen.getByTestId('home')
    expect(Component).toBeInTheDocument()
  })
})
