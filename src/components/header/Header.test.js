import { render } from '@testing-library/react';
import Header from './Header';
import { PersonsContext } from '../../contexts/pesronsContext';

describe('Header component', () => {
  test('renders the Search component', () => {
    const { getByPlaceholderText } = render(
      <PersonsContext.Provider value={{}}>
        <Header />
      </PersonsContext.Provider>
    );

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
