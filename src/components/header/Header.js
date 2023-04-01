import { useContext } from "react";
import { PersonsContext } from '../../contexts/pesronsContext';

import Search from "../search/Search";
import styles from "./Header.module.css";

const Header = () => {

    const { handleSearch } = useContext(PersonsContext);

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Support Desk</h1>
            </div>
            <div className={styles.headerRight}>
                <Search onSearch={handleSearch}/>
            </div>
        </header>
    );
};

export default Header;


