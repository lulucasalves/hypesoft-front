import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestimonialCard } from '../../components/TestimonialCard'
import { LangProvider } from '../../store/Translate'

describe('Test click button change feedback text', () => {
  test('Change Position', () => {
    render(
      <TestimonialCard
        onClick={() => console.log('fired')}
        image="url(./images/jeffBezos.jpg)"
        title="Jeff Bezos"
        description="CEO & Founder of"
        company="Google"
      />,
      {
        wrapper: LangProvider
      }
    )

    const btnIncrement = screen.getByTestId('test-card')
    fireEvent.click(btnIncrement)

    expect(screen.findByText('I'))
  })
})
