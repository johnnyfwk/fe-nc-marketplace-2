import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';

function SingleProduct( {loggedInUsername, updateBuyNow, orderedItems, updateOrderedItems} ) {
    const itemId = useParams().item_id;
    const [singleProduct, updateSingleProduct] = useState( {} );
    const [isProductPurchased, updateIsProductPurchased] = useState(null);
    const [isItemDeletedSuccessfully, updateIsItemDeletedSuccessfully] = useState(null);

    console.log(loggedInUsername, "<<<<<<<<   loggedInUsername");

    useEffect(() => {
        api.getProduct(itemId)
            .then((product) => {
                updateSingleProduct(product);
            })
    }, []);

    useEffect(() => {
        api.getPreviousOrders(loggedInUsername)
            .then((previousOrders) => {
                updateOrderedItems(previousOrders);
            })
    }, [])

    function handleAddToBasket(event) {
        event.preventDefault();
        console.log("Add to basket button pressed.");
    }

    const orderedItemsCopy = orderedItems.map((item) => {
        return { ...item };
    })
    

    function handleBuyNow(event) {
        event.preventDefault();
        const orderedItemsCopyPlusPurchasedItem = [ ...orderedItemsCopy, singleProduct ];

        api.postAnItemToAUsersOrderHistory(loggedInUsername, {"item_id": singleProduct.item_id})
            .then((itemAddedToUsersOrderHistory) => {
                updateBuyNow(singleProduct);
                updateIsProductPurchased(true);
                updateOrderedItems(orderedItemsCopyPlusPurchasedItem);
            })
            .catch((error) => {
                console.log(error, "<<<<<<<<<<<<< error");
                updateIsProductPurchased(false);
            })
    }

    function handleDeleteItem(event) {
        console.log("Delete Item button pressed.");
        event.preventDefault();
        api.deleteAnItem(singleProduct.item_id)
            .then((response) => {
                updateIsItemDeletedSuccessfully(true);
            })
            .catch((error) => {
                updateIsItemDeletedSuccessfully(false);
            })
    }

    return (
        <div>
            <h1>{singleProduct.item_name}</h1>
            <img src={singleProduct.img_url} alt={singleProduct.item_name}></img>
            <p>{singleProduct.description}</p>
            <p>Price: £{parseFloat(singleProduct.price)/100}</p>

            {isProductPurchased === null ? null
                : isProductPurchased === true ? <p id="product-purchase-confirmation-message">Nice! You have just purchased this product!</p>
                    : <p id="product-purchase-failed">Purchase of item failed.</p>}
            {/* {isProductPurchased ? <p id="product-purchase-confirmation-message">Nice! You have just purchased this product!</p> : null} */}

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