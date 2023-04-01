import styles from './PersonCard.module.css';
import availableLogo from './icon-available.svg';
import busyLogo from './icon-busy.svg';

const PersonCard = ({ person }) => {
    const { firstName, lastName, available, phone, email, image, location } = person;
   
    const name = `${firstName} ${lastName}`;
    
    let statusLogo;
    let status;

    if (available) {
        statusLogo = availableLogo;
        status = 'available';
    } else {
        statusLogo = busyLogo;
        status = 'busy';
    }

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt={name} />
                    <img className={styles.statusLogo} src={statusLogo} alt={status} />
                </div>
                <div className={styles.nameLocation}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.location}>{location}</p>
                </div>
            </div>
            <div className={styles.info}>
                <p className={styles.phone}>phone: {phone}</p>
                <p className={styles.email}>email: {email}</p>
            </div>
        </div>
    );
};

export default PersonCard;
