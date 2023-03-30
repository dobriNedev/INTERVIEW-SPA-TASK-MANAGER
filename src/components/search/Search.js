import icon from './icon-search.svg';
import styles from './Search.module.css';


const Search = () => {
    return (
        <form className={styles.searchForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">
                <img src={icon} alt="Search" />
            </button>
        </form>
    );
};

export default Search;