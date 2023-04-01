import { render } from '@testing-library/react';
import { Error } from './Error';

test('renders error message', () => {
  const errorMessage = 'Something went wrong!';
  const { getByText } = render(<Error message={errorMessage} />);
  const messageElement = getByText(errorMessage);
  expect(messageElement).toBeInTheDocument();
});

test('renders "Error" heading', () => {
  const errorMessage = 'Something went wrong!';
  const { getByText } = render(<Error message={errorMessage} />);
  const headingElement = getByText('Error');
  expect(headingElement).toBeInTheDocument();
});
