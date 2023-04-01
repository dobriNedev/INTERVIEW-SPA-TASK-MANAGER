import { render, screen } from '@testing-library/react';
import PersonCard from './PersonCard';

const mockPerson = {
  firstName: 'John',
  lastName: 'Doe',
  available: true,
  phone: '123-456-7890',
  email: 'john.doe@example.com',
  image: 'https://via.placeholder.com/150',
  location: 'New York',
};

describe('PersonCard component', () => {
  test('renders correctly with person data', () => {
    render(<PersonCard person={mockPerson} />);
    
    const nameElement = screen.getByText(`${mockPerson.firstName} ${mockPerson.lastName}`);
    expect(nameElement).toBeInTheDocument();

    const phoneElement = screen.getByText(`phone: ${mockPerson.phone}`);
    expect(phoneElement).toBeInTheDocument();

    const emailElement = screen.getByText(`email: ${mockPerson.email}`);
    expect(emailElement).toBeInTheDocument();

    const locationElement = screen.getByText(mockPerson.location);
    expect(locationElement).toBeInTheDocument();
  });
  
  test('displays available status when person is available', () => {
    render(<PersonCard person={mockPerson} />);
    
    const statusElement = screen.getByAltText('available');
    expect(statusElement).toBeInTheDocument();
  });
  
  test('displays busy status when person is not available', () => {
    const mockBusyPerson = {
      ...mockPerson,
      available: false,
    };
    render(<PersonCard person={mockBusyPerson} />);
    
    const statusElement = screen.getByAltText('busy');
    expect(statusElement).toBeInTheDocument();
  });
});
