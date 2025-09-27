import { Link } from 'react-router';

import styles from './NavBar.module.css';

export default function NavBar({ numCartItems }) {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navitems}>
                <Link to="/" className={styles.link}><li>Home</li></Link>
                <Link to="/shop" className={styles.link}> <li>Shop</li></Link>
                <Link to="/cart" className={styles.link}><li>Cart{numCartItems ? `: ${numCartItems}` : ''}</li></Link>
            </ul>
        </div>
    )
}