import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders link for page 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Page 1/i);
  expect(linkElement).toBeInTheDocument();
});
