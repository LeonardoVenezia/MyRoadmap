import Image from 'next/image';
import styles from './item.module.css';

const Item = ({name, src, openDetail})=> {
    const handleClick = ()=> {
        openDetail(name);
    }
    return (
        <div className={styles.item} onClick={handleClick}>
            <Image
                className={styles.image}
                src={src}
                alt={name}
                width={80}
                height={80}
            />
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default Item;