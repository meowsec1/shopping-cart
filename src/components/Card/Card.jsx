import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';


import styles from './Card.module.css';

export default function Card({ item }) {
    const { addToCart } = useOutletContext();

    const [inputValue, setInputValue] = useState(1)

    function incrementInput() {
        setInputValue((prevValue) => prevValue+1)
    }

    function decrementInput() {
        if (inputValue > 1) {
            setInputValue((prevValue) => prevValue-1)
        }
    }

    function handleValueChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(item, number) {
        if (number < 1) {
            return;
        }
        let itemsToAdd = []
        for (let i = 0; i < number; i++) {
            itemsToAdd.push(item)
            setInputValue(1)
        }

        addToCart(itemsToAdd) 
    }

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
            <div className={styles.quantitySection}>
                <div className={styles.quantityControls}>
                    <input className={styles.quantityInput} type="number" min={0} value={inputValue} onChange={handleValueChange}></input>
                    <button className={styles.quantityButton} onClick={incrementInput}>+</button>
                    <button className={styles.quantityButton} onClick={decrementInput}>-</button>
                </div>
            </div>
            <div>
                <button className={styles.addToCartButton} onClick={() => handleSubmit(item, inputValue)}>Add to cart</button>
            </div>
        </div>
    )
}
