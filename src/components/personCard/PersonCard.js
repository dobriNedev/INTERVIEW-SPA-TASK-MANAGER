
import styles from './PersonCard.module.css';

const PersonCard = ({ person }) => {
    const { firstName, lastName, available, phone, email, image, location } = person;
    const name = firstName + lastName;
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.info}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.location}>{location}</p>
                    <span className={styles.email}>{email}</span>
                    <span className={styles.phone}>{phone}</span>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;



