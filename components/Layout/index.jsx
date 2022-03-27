import Modal from "../Modal";
import ItemsSections from "../ItemsSections";
import { useState } from 'react';
import Header from "../Header";

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
            <main>
                <Modal
                    close={() => setOpenDetail('')}
                    open={openDetail}
                    name={openDetail}
                />
                <ItemsSections
                    openDetail={setOpenDetail}
                    sections={data.path}
                />
            </main>
        </>
    )
}

export default Layout;
