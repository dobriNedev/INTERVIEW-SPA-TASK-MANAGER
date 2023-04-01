import { render } from '@testing-library/react';
import Header from './Header';
import { PersonsContext } from '../../contexts/pesronsContext';

test('passes handleSearch function to Search component', () => {
  const handleSearch = jest.fn();
  render(
    <PersonsContext.Provider value={{ handleSearch }}>
      <Header />
    </PersonsContext.Provider>
  );
  expect(handleSearch).toBeCalledTimes(0);
});
