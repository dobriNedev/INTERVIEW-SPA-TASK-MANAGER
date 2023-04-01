import { fireEvent, render } from '@testing-library/react';
import Search from './Search';

test('renders Search component without errors', () => {
  render(<Search />);
});

test('updates search query when input value changes', () => {
  const { getByPlaceholderText } = render(<Search />);
  const input = getByPlaceholderText('Search');
  fireEvent.change(input, { target: { value: 'test query' } });
  expect(input.value).toBe('test query');
});

test('calls onSearch function when form is submitted', () => {
  const onSearch = jest.fn();
  const { getByPlaceholderText, getByRole } = render(<Search onSearch={onSearch} />);
  const input = getByPlaceholderText('Search');
  const button = getByRole('button');
  fireEvent.change(input, { target: { value: 'test query' } });
  fireEvent.click(button);
  expect(onSearch).toHaveBeenCalledWith('test query');
});
