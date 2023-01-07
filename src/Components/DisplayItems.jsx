import { Link } from 'react-router-dom';

function DisplayItems( {availableItems, selectedCategory} ) {    
    const renderItems = availableItems.map((item) => {
        return <div key={item.item_id}>
            <h3>{item.item_name}</h3>
            <img src={item.img_url} alt={item.item_name}></img>
            <p>£{parseFloat(item.price)/100}</p>
            <Link to={`/items/${item.item_id}`}>More Info</Link>
        </div>
    })

    return (
        <section>
            {selectedCategory === "All" ? <h2>All Items</h2> : <h2>{selectedCategory}</h2>}
            {renderItems}
        </section>
    )
}

export default DisplayItems;