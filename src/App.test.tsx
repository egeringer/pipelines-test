import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Maestro Application text', () => {
  render(<App />)
  const linkElement = screen.getByText(/Maestro Application/i)
  expect(linkElement).toBeInTheDocument()
})
