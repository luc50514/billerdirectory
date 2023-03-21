import { render, screen } from '@testing-library/react'
import List from '../src/app/page.js'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a button called open', () => {
    render(<List />)

      const labelElement = screen.getByTitle(/Open/i);

    expect(labelElement).toBeInTheDocument()
  })
})