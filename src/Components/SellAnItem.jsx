import { useEffect, useState } from 'react';
import * as api from '../api';

function SellAnItem( {loggedInUsername, availableCategories, updateAvailableCategories} ) {
    console.log(loggedInUsername, "<<<<<<<<< loggedInUsername");

    const [itemForSaleNameInput, updateItemForSaleNameInput] = useState( "" );
    const [itemForSaleDescriptionInput, updateItemForSaleDescriptionInput] = useState( "" );
    const [itemForSalePriceInput, updateItemForSalePriceInput] = useState( 0 );
    const [itemForSaleImageUrlInput, updateItemForSaleImageUrlInput] = useState( "" );
    const [itemForSaleSelectedCategory, updateItemForSaleSelectedCategory] = useState( "" );

    const [isItemPostingSuccessful, updateIsItemPostingSuccessful] = useState(null);

    useEffect(() => {
        api.getCategories()
            .then((categories) => {
                updateAvailableCategories(categories);
                updateItemForSaleSelectedCategory(categories[0]);
            })
    }, []);

    const sellAnItemDropDownCategories = availableCategories.map((category) => {
        return <option key={category} value={category}>{category}</option>
    });

    function handleSubmit(event) {
        event.preventDefault();
        const itemToPost = {
            "item_name": itemForSaleNameInput,
            "description": itemForSaleDescriptionInput,
            "img_url": itemForSaleImageUrlInput,
            "price": itemForSalePriceInput,
            "category_name": itemForSaleSelectedCategory
        };
        console.log(itemToPost, "<<<<<<<<<<< itemToPost");
        api.postAnItemForSale(itemToPost)
            .then((response) => {
                updateIsItemPostingSuccessful(true);
            })
            .catch((error) => {
                updateIsItemPostingSuccessful(false);
            })
    }

    return (
        <div>
            <h2>Sell An Item</h2>
            <p>Post an item for sale by filling out the details below.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="sell-an-item-name">Name of item: </label>
                <input
                    type="text"
                    id="sell-an-item-name"
                    name="sell-an-item-name"
                    onChange={(event) => {updateItemForSaleNameInput(event.target.value)}}
                    required>
                </input>

                <br />
                <br />

                <label htmlFor="sell-an-item-description">Item description: </label>
                <input
                    type="text"
                    id="sell-an-item-description"
                    name="sell-an-item-description"
                    onChange={(event) => {updateItemForSaleDescriptionInput(event.target.value)}}
                    required>
                </input>

                <br />
                <br />

                <label htmlFor="sell-an-item-price">Price (in pence): </label>
                <input
                    type="number"
                    id="sell-an-item-price"
                    name="sell-an-item-price"
                    min="0"
                    onChange={(event) => {updateItemForSalePriceInput(event.target.value)}}
                    required>
                </input>

                <br />
                <br />

                <label htmlFor="sell-an-item-image">Image URL: </label>
                <input
                    type="text"
                    id="sell-an-item-image"
                    name="sell-an-item-image"
                    onChange={(event) => {updateItemForSaleImageUrlInput(event.target.value)}}
                    required>
                </input>

                <br />
                <br />

                <label htmlFor="sell-an-item-category">Category: </label>
                <select
                    id="sell-an-item-category"
                    name="sell-an-item-category"
                    onChange={(event) => {updateItemForSaleSelectedCategory(event.target.value)}}>
                    {sellAnItemDropDownCategories}
                </select>
                
                <br />
                <br />

                <button>Post Your Item For Sale</button>

                {isItemPostingSuccessful === null ? null
                    : isItemPostingSuccessful === true ? <p id="post-an-item-for-sale-successful">Your item was posted successfully!</p> : <p id="post-an-item-for-sale-failed">Your item could not be posted.</p>}
            </form>
        </div>        
    )
}

export default SellAnItem;