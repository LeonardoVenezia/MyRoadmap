import Link from 'next/link';
import styles from './Professions.module.css'

interface ProfessionsTypes {
    title: string;
    description: string;
    link: string;
}

const Professions = ({ title, description, link, wip }: ProfessionsTypes) => {
    return (
        <Link href={link} shallow>
            <a>
                <div className={styles.professions}>
                    {
                        wip && <div className={styles.wip} >
                            <p className={styles.wipText}>Work in progress</p>
                        </div>
                    }
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </a>
        </Link>
    );
}

export default Professions;
