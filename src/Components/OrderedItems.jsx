import { useEffect } from "react";
import { Link } from 'react-router-dom';
import * as api from '../api';

function OrderedItems( {loggedInUsername, orderedItems, updateOrderedItems} ) {

    useEffect(() => {
        api.getPreviousOrders(loggedInUsername)
            .then((previousOrders) => {
                updateOrderedItems(previousOrders);
            })

    }, []);

    const renderOrderedItems = orderedItems.map((item) => {
        return <div>
            <h3>{item.item_name}</h3>
            <img src={item.img_url} alt={item.item_name}></img>
            <p>{item.item_id}</p>
            <p>{item.description}</p>
            <p>£{parseFloat(item.price)/100}</p>
        </div>
    })

    return (
        <div>
            <h2>Ordered Items</h2>
            <p>Below is your order history:</p>
            {orderedItems.length === 0 ? <p>You have not ordered anything yet. When not check out the <Link to="/items">items</Link> for sale in the marketplace and spend your life savings on them.</p> : null}
            {renderOrderedItems}
        </div>        
    )
}

export default OrderedItems;