import styles from './DescriptionSection.module.css';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const DescriptionSection = () => {
    const t = useTranslations('home');
    const { locale } = useRouter();

    return (
        <section className={styles.descriptionSection}>
            <h2 className={styles.title}>{t('proyectTitleDescription', locale)}</h2>
            <p className={styles.description}>{t('proyectDescription', locale)}</p>
        </section>
    )
}

export default DescriptionSection;
