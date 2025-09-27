import { useOutletContext } from "react-router-dom"

import CartItem from "../components/CartItem/CartItem";

import style from '../components/Card/Card.module.css';

export default function CartPage() {

    const { cartItems, setCartItems } = useOutletContext();

    function updateItemQuantity(id, newQuantity) {
        setCartItems((prevCartItems) =>
            prevCartItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    const total = cartItems.reduce((acc, item) => {
        acc += item.price * item.quantity
        return acc
        }, 0).toFixed(2)

    return (
        <>
            <div className="card-container">
                {cartItems.map((item) => <CartItem key={item.id} item={item} onQuantityChange={updateItemQuantity}></CartItem>)}
                <button className={style.addToCartButton}>Total: ${total}</button>

            </div>
            <div>
            </div>
        </>
    )
}
