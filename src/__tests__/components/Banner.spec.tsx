import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Banner } from '../../components/Banner'

describe('<Banner />', () => {
  it('Test if banner component render', () => {
    render(<Banner />)
    const Component = screen.getByTestId('banner')
    expect(Component).toBeInTheDocument()
  })
})
