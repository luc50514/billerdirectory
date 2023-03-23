import { fireevent, render, screen } from '@testing-library/react'
import List from '../src/app/list/page.js'
import '@testing-library/jest-dom'
import { EVENTS } from "@/app/consts";
import { EVENT_TYPES } from "@/app/consts";

describe('Home', () => {

  it('renders Content', () => {
    const listOfEvents = EVENTS
    render(<List listOfEvents={listOfEvents} />)
      const eventBox = screen.getByTestId("eventlist");
      const listitem = screen.getByTestId(listOfEvents[0].id)
    expect(eventBox).toBeInTheDocument()
    expect(listitem).toBeInTheDocument()
  })
})