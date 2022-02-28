import styles from './BackgroundContainer.module.css';

const BackgroundContainer = ({ children }) =>
    <div className={styles.background}>
        <div className={styles.transparent}>
            {children}
        </div>
    </div>;

export default BackgroundContainer;