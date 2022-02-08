import Item from '../../components/Item';
import styles from './ItemsSections.module.css';

const ItemsSections = ({ sections, openDetail }) => {
    const itemMap = (i) => {
        return i.map((i) => (
            <Item
                key={i.name}
                name={i.name}
                src={i.src}
                openDetail={openDetail}
            />
        ));
    }

    const titles = ['Traine', 'Jr', 'Ssr', 'Sr']

    const itemsSections = sections.map((i, index) => {
        return (
            <section key={index} className={styles.section}>
                <h1 className={styles.title}>Knowledge of a <span className={styles.color}>{titles[index]}</span></h1>
                <div className={styles.items}>
                    {itemMap(i)}
                </div>
            </section>
        )
    })

    return itemsSections;
}

export default ItemsSections;
