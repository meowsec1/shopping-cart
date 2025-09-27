import styles from '../Card/Card.module.css';
import { useState } from 'react';

export default function CartItem( { item, onQuantityChange }) {

    const [inputValue, setInputValue] = useState(item.quantity)

    function incrementInput() {
        setInputValue((prevValue) => prevValue+1)
    }

    function decrementInput() {
        if (inputValue > 0) {
            setInputValue((prevValue) => prevValue-1)
        }
    }

    function handleValueChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit() {
        if (item.quantity === inputValue) {
            return;
        } else {
            onQuantityChange(item.id, inputValue)
        }
    }

    return (
        <div className={styles.card}>
            <div>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.price}>Quantity: {item.quantity} - Total: ${item.quantity * item.price }</span>
            </div>
            <div className={styles.quantityControls}>
                <input className={styles.quantityInput} type="number" min={0} value={inputValue} onChange={handleValueChange}></input>
                <button className={styles.quantityButton} onClick={incrementInput}>+</button>
                <button className={styles.quantityButton} onClick={decrementInput}>-</button>
            </div>
            <div>
                <button className={styles.addToCartButton} onClick={() => handleSubmit(item, inputValue)}>Update Cart</button>
            </div>
        </div>

    )
}
