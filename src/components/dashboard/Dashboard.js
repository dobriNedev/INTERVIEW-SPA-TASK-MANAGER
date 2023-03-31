import { useContext } from 'react';
import { PersonsContext } from '../../contexts/pesronsContext';

import { v4 as uuidv4 } from 'uuid';

import PersonCard from '../personCard/PersonCard';
import styles from './Dashboard.module.css';

const Dashboard = () => {

    const { persons, searchTerm } = useContext(PersonsContext);

    //simple search by first name
    const displayedPersons = searchTerm
        ? persons?.filter((person) =>
            person?.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : persons;

    return (
        <div className={styles.dashboard}>
            {displayedPersons.length === 0 ? (
                <p className={styles.noData}>Sorry, nothing to show!</p>
            ) : (
                displayedPersons.map((person) => (
                    <PersonCard key={uuidv4()} person={person} />
                ))
            )}
        </div>
    );
}

export default Dashboard;

