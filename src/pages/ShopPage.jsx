import { useEffect, useState } from 'react'

export default function ShopPage() {
    const [shopItems, setShopItems] = useState([]);
    useEffect(() => {

        async function fetchData(url) {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setShopItems(data);

        }
        
        fetchData('https://fakestoreapi.com/products');

    }, [])
    return (
        <>
        {shopItems.map(item => <div key={item.id}>{item.title}</div>)}
            This is the shop page
        </>
    )
}
