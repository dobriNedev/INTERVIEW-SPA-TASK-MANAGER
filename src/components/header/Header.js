

import Search from "../search/Search";
import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Support Desk</h1>
            </div>
            <div className={styles.headerRight}>
                <Search />
            </div>
        </header>
    );
};

export default Header;


