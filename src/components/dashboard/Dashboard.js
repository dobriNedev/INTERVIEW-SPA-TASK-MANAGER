import { useContext } from 'react';
import { PersonsContext } from '../../contexts/pesronsContext';

import { v4 as uuidv4 } from 'uuid';

import PersonCard from '../personCard/PersonCard';
import styles from './Dashboard.module.css';



const Dashboard = () => {

        const { persons } = useContext(PersonsContext);

    return (
        <div className={styles.dashboard}>
            {persons.length === 0 ? (
                <p className={styles.noData}>Sorry, nothing to show!</p>
            ) : (
                persons.map((person) => (
                    <PersonCard
                        key={uuidv4()}
                        person={person}
                    />
                ))
            )}
        </div>
    );
}

export default Dashboard;

