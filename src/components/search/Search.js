import { useState } from 'react';

import icon from './icon-search.svg';
import styles from './Search.module.css';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const onChange = (e) => setQuery(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
      };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Search" 
            value={query}
            onChange={onChange}
            />
            <button type="submit">
                <img src={icon} alt="Search" />
            </button>
        </form>
    );
};

export default Search;