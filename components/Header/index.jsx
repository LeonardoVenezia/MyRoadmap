import styles from './Header.module.css';

const Header = ({ title, names, handleClick, active, description }) => {
    return (
        <header>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.buttons}>
                {
                    names.map(item => (
                        <li key={item.index + item.name}>
                            <button
                                onClick={() => handleClick(item.index)}
                                className={
                                    `${styles.button} ${active === item.index && styles.active}`
                                }
                            >
                                {item.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <p className={styles.description}>{description}</p>

        </header>
    )
}
export default Header;