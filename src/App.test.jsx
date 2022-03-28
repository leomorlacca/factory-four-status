import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

//test driven development
test("Card renders", async () => {
  render(<App />)
  const card = await screen.findAllByText("Endpoint name")

  //should be eighteen
  expect(card).toHaveLength(18)
})

test("Fetch errors", async () => {
  render(<App />)
  const card = await screen.findAllByText("Error")

  //should be three
  expect(card).toHaveLength(3)
})
