import { createContext, useState, useEffect } from "react";

import { getAll } from '../services/personService';

export const PersonsContext = createContext();

export const PersonsProvider = ({
    children
}) => {
    const [persons, setPersons] = useState([]);
    

    useEffect(()=> {
        getAll()
        .then(data => setPersons(data))
    }, []);

    const contextValues = {
        persons
    };

    return(
        <PersonsContext.Provider value={contextValues}>
            {children}
        </PersonsContext.Provider>
    );
};