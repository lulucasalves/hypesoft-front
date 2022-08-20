import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Banner } from '../../components/Banner'

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Banner />)
    const Component = screen.getByTestId('banner')
    expect(Component).toBeInTheDocument()
  })
})
