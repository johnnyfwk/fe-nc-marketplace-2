import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as api from '../api';
import SelectCategory from './SelectCategory';
import DisplayProducts from './DisplayProducts';

function Items( {loggedInUsername, updateLoggedInUsername, availableCategories, updateAvailableCategories} ) {
    const [availableProducts, updateAvailableProducts] = useState( [] );
    const [selectedCategory, updateSelectedCategory] = useState( "All" );

    console.log(loggedInUsername, "<<<<<<<<<<<< loggedInUsername");

    let [searchParams, updateSearchParams] = useSearchParams();
    const username = searchParams.get('username');
    const newUsername = searchParams.get('new-username');

    useEffect(() => {
        if (username) {
            updateLoggedInUsername(username);
        }
        if (newUsername) {
            updateLoggedInUsername(newUsername);
        }        
    }, []);

    useEffect(() => {
        api.getItems()
            .then((items) => {
                if (selectedCategory === "All") {
                    updateAvailableProducts(items);
                }
                else {
                    const itemsByCategory = items.filter((item) => {
                        return item.category_name === selectedCategory;
                    })
                    updateAvailableProducts(itemsByCategory);
                }
            })
    }, [selectedCategory]);

    useEffect(() => {
        api.getCategories()
            .then((categories) => {
                const allCategories = [ "All", ...categories ];
                updateAvailableCategories(allCategories);
            })
    }, [])

    return (
        <section>
            <h2>Items</h2>
            <SelectCategory availableCategories={availableCategories} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
            <DisplayProducts availableProducts={availableProducts} selectedCategory={selectedCategory}/>
        </section>
    )
}

export default Items;