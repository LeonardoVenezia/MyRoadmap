import Link from 'next/link';
import styles from './Professions.module.css'

interface ProfessionsTypes {
    title: string;
    description: string;
    link: string;
}

const Professions = ({ title, description, link }: ProfessionsTypes) => {
    return (
        <Link href={link}>
            <a>
                <div className={styles.professions}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </a>
        </Link>
    );
}

export default Professions;
