import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders first screen', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/cmaj scale/i);
  expect(buttonElement).toBeInTheDocument();
});
