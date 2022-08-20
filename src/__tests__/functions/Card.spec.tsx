import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TestimonialCard } from '../../components/TestimonialCard'

describe('Test general render components', () => {
  test('increment counter', () => {
    render(
      <TestimonialCard
        onClick={() => console.log('fired')}
        image="url(./images/jeffBezos.jpg)"
        title="Jeff Bezos"
        description="CEO & Founder of"
        company="Google"
      />
    )

    const btnIncrement = screen.getByTestId('test-card')
    fireEvent.click(btnIncrement)

    expect(screen.findByText('I'))
  })
})
