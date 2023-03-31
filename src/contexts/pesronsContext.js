import { createContext, useState, useEffect } from "react";

import { getAll } from '../services/personService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=> {
        getAll()
        .then(data => setPersons(data))
    }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      };

    const contextValues = {
        persons,
        searchTerm,
        handleSearch
    };

    return(
        <PersonsContext.Provider value={contextValues}>
            {children}
        </PersonsContext.Provider>
    );
};