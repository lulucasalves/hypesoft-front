import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Banner } from '../../components/Banner'
import { LangProvider } from '../../store/Translate'

describe('<Banner />', () => {
  it('Test if banner component render', () => {
    render(<Banner />, {
      wrapper: LangProvider
    })
    const Component = screen.getByTestId('banner')
    expect(Component).toBeInTheDocument()
  })
})
