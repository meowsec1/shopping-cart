import { useEffect, useState } from 'react'

import Card from '../components/Card/Card.jsx';

export default function ShopPage() {
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {

        async function fetchData(url) {
            const response = await fetch(url);
            const data = await response.json();
            setShopItems(data);

        }
        
        fetchData('https://fakestoreapi.com/products');

    }, [])
    return (
        <div className="card-container">
        {shopItems.map(item => <Card key={item.id} item={item} />)}
        </div>
    )
}
