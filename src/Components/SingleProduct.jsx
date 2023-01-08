import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';

function SingleProduct( {loggedInUsername, updateBuyNow, orderedItems, updateOrderedItems} ) {
    const itemId = useParams().item_id;
    const [singleProduct, updateSingleProduct] = useState( {} );
    const [isProductPurchased, updateIsProductPurchased] = useState(false);
    const [isItemDeletedSuccessfully, updateIsItemDeletedSuccessfully] = useState(null);

    console.log(loggedInUsername, "<<<<<<<<   loggedInUsername");
    console.log(singleProduct, "<<<<<<<<<<< singleProduct");

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

    function handleDeleteItem(event) {
        console.log("Delete Item button pressed.");
        event.preventDefault();
        console.log(singleProduct.item_id, "<<<<<<< singleProduct.item_id");
        api.deleteAnItem(singleProduct.item_id)
            .then((response) => {
                console.log(response, "<<<<<<<<<<<<<<< successful deletion of an item response")
                updateIsItemDeletedSuccessfully(true);
            })
            .catch((error) => {
                console.log(error, "<<<<<<<<<<<<<<< error item did not delete")
                updateIsItemDeletedSuccessfully(false);
            })
    }

    return (
        <div>
            <h1>{singleProduct.item_name}</h1>
            <img src={singleProduct.img_url} alt={singleProduct.item_name}></img>
            <p>{singleProduct.description}</p>
            <p>Price: £{parseFloat(singleProduct.price)/100}</p>

            {isProductPurchased ? <p id="product-purchase-confirmation-message">Nice! You have just purchased this product!</p> : null}

            {isItemDeletedSuccessfully === null ? null
                : isItemDeletedSuccessfully === true ? <p id="delete-item-successful">Item was successfully deleted!</p>
                    : <p id="delete-item-failed">Item was not deleted</p>}

            <form onSubmit={handleAddToBasket}>
                <button>Add To Basket</button>
            </form>
            
            <form onSubmit={handleBuyNow}>
                <button>Buy Now</button>
            </form>

            <form onSubmit={handleDeleteItem}>
                <button>Delete Item</button>
            </form>        
        </div>
    )
}

export default SingleProduct;