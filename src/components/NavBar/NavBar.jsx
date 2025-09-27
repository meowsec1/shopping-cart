import { Link } from 'react-router';

import styles from './NavBar.module.css';

export default function NavBar({ numCartItems }) {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navitems}>
                <li>
                    <Link to="/" className={styles.link}>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                <Link to="/shop" className={styles.link}>
                    <span>Shop</span>
                </Link>
                </li>
                <li>
                    <Link to="/cart" className={styles.link}>
                        <span>Cart{numCartItems ? `: ${numCartItems}` : ''}</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
