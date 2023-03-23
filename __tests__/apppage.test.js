import { render, screen } from '@testing-library/react'
import List from '../src/app/page.js'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders Content', () => {
    render(<List />)

      const labelElement = screen.getByTitle(/Open/i);
      const searchEleent = screen.getByTestId("biller-search");
      const eventBox = screen.getByTestId("eventlist");

    expect(labelElement).toBeInTheDocument()
  })
})