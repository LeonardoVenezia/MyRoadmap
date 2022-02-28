import styles from './BackgroundContainer.module.css';

export default ({ children }) =>
    <div className={styles.background}>
        <div className={styles.transparent}>
            {children}
        </div>
    </div>;
