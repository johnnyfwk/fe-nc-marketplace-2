import { useState, useEffect } from 'react';
import * as api from '../api';
import SelectCategory from './SelectCategory';
import DisplayItems from './DisplayItems';

function Items() {
    const [availableItems, updateAvailableItems] = useState( [] );
    const [availableCategories, updateAvailableCategories] = useState( ["All"] );
    const [selectedCategory, updateSelectedCategory] = useState( "All" );

    useEffect(() => {
        api.getItems()
            .then((items) => {
                if (selectedCategory === "All") {
                    updateAvailableItems(items);
                }
                else {
                    const itemsByCategory = items.filter((item) => {
                        return item.category_name === selectedCategory;
                    })
                    updateAvailableItems(itemsByCategory);
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
            <DisplayItems availableItems={availableItems} selectedCategory={selectedCategory}/>
        </section>
    )
}

export default Items;