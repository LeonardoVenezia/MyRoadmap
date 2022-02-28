import Modal from "../Modal";
import ItemsSections from "../ItemsSections";
import { useState } from 'react';
import styles from './Layout.module.css';

const Layout = ({ title, active, handleClick, names, data = [] }) => {
    const [openDetail, setOpenDetail] = useState('');

    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <section>
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
                <p className={styles.description}>{data.description}</p>

            </section>
            <main>
                {
                    <Modal
                        close={() => setOpenDetail('')}
                        open={openDetail}
                        name={openDetail}
                    />
                }
                <ItemsSections
                    openDetail={setOpenDetail}
                    sections={data.path}
                />
            </main>
        </>
    )
}

export default Layout;
