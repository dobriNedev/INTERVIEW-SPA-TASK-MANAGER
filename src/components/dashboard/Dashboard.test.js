import { render } from '@testing-library/react';
import { PersonsContext } from '../../contexts/pesronsContext';
import Dashboard from './Dashboard';

const mockContext = {
    persons: [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' },
        { id: 3, firstName: 'Bob', lastName: 'Smith' },
    ],
    searchTerm: '',
    error: null,
};

describe('Dashboard', () => {
    test('renders a list of persons without errors', () => {
        const { getByText } = render(
            <PersonsContext.Provider value={mockContext}>
                <Dashboard />
            </PersonsContext.Provider>
        );

        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Jane Doe')).toBeInTheDocument();
        expect(getByText('Bob Smith')).toBeInTheDocument();
    });

    test('renders an error message if there is an error', () => {
        const error = { message: 'Something went wrong' };

        const { getByText } = render(
            <PersonsContext.Provider value={{ ...mockContext, error }}>
                <Dashboard />
            </PersonsContext.Provider>
        );

        expect(getByText('Error')).toBeInTheDocument();
        expect(getByText('Something went wrong')).toBeInTheDocument();
    });

    test('filters the list of persons by first name if there is a search term', () => {
        const searchTerm = 'jane';

        const { getByText, queryByText } = render(
            <PersonsContext.Provider value={{ ...mockContext, searchTerm }}>
                <Dashboard />
            </PersonsContext.Provider>
        );

        expect(getByText('Jane Doe')).toBeInTheDocument();
        expect(queryByText('John Doe')).not.toBeInTheDocument();
        expect(queryByText('Bob Smith')).not.toBeInTheDocument();
    });

    test('displays a "nothing to show" message if there are no persons to display', () => {
        const { getByText } = render(
            <PersonsContext.Provider value={{ ...mockContext, persons: [] }}>
                <Dashboard />
            </PersonsContext.Provider>
        );

        expect(getByText('Sorry, nothing to show!')).toBeInTheDocument();
    });
});
