import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';

function SingleProduct( {loggedInUsername, buyNow, updateBuyNow} ) {
    const itemId = useParams().item_id;
    const [singleProduct, updateSingleProduct] = useState( {} );
    const [isProductPurchased, updateIsProductPurchased] = useState(false);

    console.log(loggedInUsername, "<<<<<<<<   loggedInUsername");

    useEffect(() => {
        api.getProduct(itemId)
            .then((product) => {
                updateSingleProduct(product);
            })
    }, []);

    function handleAddToBasket(event) {
        event.preventDefault();
        console.log("Add to basket button pressed.");
    }

    function handleBuyNow(event) {
        event.preventDefault();
        console.log("Buy Now button pressed.");
        updateBuyNow(singleProduct);
        updateIsProductPurchased(true);
    }

    return (
        <div>
            <h1>{singleProduct.item_name}</h1>
            <img src={singleProduct.img_url} alt={singleProduct.item_name}></img>
            <p>{singleProduct.description}</p>
            <p>Price: £{parseFloat(singleProduct.price)/100}</p>

            {isProductPurchased ? <p id="product-purchase-confirmation-message">Nice! You have just purchased this product!</p> : null}

            <form onSubmit={handleAddToBasket}>
                <button>Add To Basket</button>
            </form>
            
            <form onSubmit={handleBuyNow}>
                <button>Buy Now</button>
            </form>            
        </div>
    )
}

export default SingleProduct;