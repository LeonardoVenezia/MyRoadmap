import styles from './ResourceItem.module.css';
import Image from 'next/image';
import { useState } from 'react';

const ResourceItem = ({ resource })=> {
    const [open, setOpen] = useState(false);
    const openSection = ()=> {
        setOpen(!open);
    }
    return (
        <>
            <li
                className={styles.li}
                onClick={openSection}
            >
                <Image
                    src={resource.item.img || "/youtube.png"}
                    alt={resource.item.type}
                    width={40}
                    height={40}
                />
                <p className={styles.description}>{resource.item.description}</p>
            </li>
            <li className={`${!open && styles.hidden}`}>
                <ul>
                    {
                        resource.resources.map((i)=> {
                            return (
                                <li className={styles.data}>
                                    <a
                                        href={i.link}
                                        className={styles.link}
                                        target="_blank"
                                    >
                                        {i.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        </>
    )
}

export default ResourceItem;
