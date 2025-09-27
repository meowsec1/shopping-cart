import styles from './Card.module.css';

export default function Card({ item }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.priceSection}>
                <span className={styles.price}>${item.price}</span>
                <span className={styles.category}>{item.category}</span>
            </div>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.rating}>
                <span className={styles.ratingScore}>★ {item.rating.rate}/5</span>
                <span className={styles.ratingCount}>({item.rating.count} reviews)</span>
            </div>
        </div>
    )
}

