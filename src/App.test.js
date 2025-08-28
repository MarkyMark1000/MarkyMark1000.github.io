import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /welcome to markymark1000/i });
  expect(headingElement).toBeInTheDocument();
});
