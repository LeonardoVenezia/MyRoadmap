import styles from './Resources.module.css';
import ResourceItem from '../ResourceItem';
import resources from './resources.json';

const Resources = ({ type }) => {
    const resourcesList = resources[type];

    return (
        <section className={styles.resources}>
            <ul className={styles.list}>
                {
                    resourcesList?.map((i, index) => <ResourceItem key={index} resource={i} />)
                }
            </ul>
        </section>
    )
}

export default Resources;
