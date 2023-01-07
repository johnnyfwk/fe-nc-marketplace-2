import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';

function SingleProduct( {loggedInUsername} ) {
    const itemId = useParams().item_id;
    const [singleProduct, updateSingleProduct] = useState( {} );

    console.log(loggedInUsername, "<<<<<<<<   loggedInUsername");

    useEffect(() => {
        api.getProduct(itemId)
            .then((product) => {
                updateSingleProduct(product);
            })
    }, []);

    function buyNow(event) {
        event.preventDefault();
        console.log("Buy Now button pressed.");
    }

    return (
        <div>
            <h1>{singleProduct.item_name}</h1>
            <img src={singleProduct.img_url} alt={singleProduct.item_name}></img>
            <p>{singleProduct.description}</p>
            <p>Price: £{parseFloat(singleProduct.price)/100}</p>
            <button>Add To Basket</button>
            <form onSubmit={buyNow} action="/order-confirmation">
                <button>Buy Now</button>
            </form>            
        </div>
    )
}

export default SingleProduct;