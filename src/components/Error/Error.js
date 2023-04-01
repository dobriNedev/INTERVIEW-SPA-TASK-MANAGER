import styles from './Error.module.css';

export const Error = ({ message }) => {
    return (
      <div className={styles.error}>
        <h2>Error</h2>
        <p>{message}</p>
      </div>
    );
};
  
export default Error;