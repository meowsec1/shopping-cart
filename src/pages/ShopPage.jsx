import { useEffect, useState } from 'react'

import Card from '../components/Card/Card.jsx';

export default function ShopPage() {
    const [shopItems, setShopItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(() => {

        async function fetchData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setShopItems(data);
                setIsLoading(false)
            }
            catch(error) {
                setError(error)
            }
        }
        
        fetchData('https://fakestoreapi.com/products');

    }, [])

    if (error) {
        return (error.message)
    }
    return (
        <>
            {isLoading ? <p>Loading...</p> : (
            <div className="card-container">
            {shopItems.map(item => <Card key={item.id} item={item} />)}
            </div>
            )}
        </>
    )
}
