import Modal from "../Modal";
import ItemsSections from "../ItemsSections";
import { useState } from 'react';
import Header from "../Header";
import styles from './Layout.module.css';
import DescriptionSection from "../DescriptionSection";

const Layout = ({ title, active, handleClick, names = [], data = [] }) => {
    const [openDetail, setOpenDetail] = useState('');

    return (
        <>
            <Header
                title={title}
                names={names}
                handleClick={handleClick}
                active={active}
                description={data.description}
            />
            <main className={styles.container}>
                <Modal
                    close={() => setOpenDetail('')}
                    open={openDetail}
                    name={openDetail}
                />
                <ItemsSections
                    openDetail={setOpenDetail}
                    sections={data.path}
                />
                <DescriptionSection />
            </main>
        </>
    )
}

export default Layout;
