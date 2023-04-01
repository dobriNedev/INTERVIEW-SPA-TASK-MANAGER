import { createContext, useState, useEffect } from "react";

import { getAll } from '../services/personService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    useEffect(()=> {
        getAll()
        .then(data => setPersons(data))
        .catch(error => setError(error.message));
    }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };

    const contextValues = {
        persons,
        searchTerm,
        error,
        handleSearch
    };

    return(
        <PersonsContext.Provider value={contextValues}>
            {children}
        </PersonsContext.Provider>
    );
};