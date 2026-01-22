import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders initial text', () => {
  render(<App />);
  expect(screen.getByText(/Hello Crazy World!/i)).toBeInTheDocument();
});

test('changes adjective when button is clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change Adjective/i });

  expect(screen.getByText(/Hello Crazy World!/i)).toBeInTheDocument();

  fireEvent.click(button);

  expect(screen.getByText(/Hello Beautiful World!/i)).toBeInTheDocument();
});
