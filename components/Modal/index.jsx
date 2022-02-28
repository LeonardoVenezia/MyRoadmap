import styles from './Modal.module.css';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Resources from '../Resources';

const Modal = ({ close, open, name }) => {
    const t = useTranslations('modal');
    const { locale } = useRouter();
    const modalRef = useRef(null);

    const closeTransition = () => {
        if (open) {
            close();
        }
    }

    useOnClickOutside(modalRef, closeTransition);

    return (
        <div>
            <div className={`${styles.background} ${open && styles.transitionBackground}`} />
            <section ref={modalRef} className={`${styles.modal} ${open && styles.transition}`}>
                <div className={styles.relative}>
                    <p className={styles.close} onClick={close}>x</p>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.description}>{t(name.split('.')[0], locale)}</p>
                    <h2 className={styles.resources}>{t('Resources', locale)}</h2>
                    <Resources type={name} />
                </div>
            </section>
        </div>
    );
}

export default Modal;

