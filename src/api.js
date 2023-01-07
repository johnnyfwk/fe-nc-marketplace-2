import axios from 'axios';

const apiBaseUrl = axios.create({
    baseURL: 'https://oct-b-sem-1-market.onrender.com/api'
});

export function getItems() {
    return apiBaseUrl
        .get('/items')
        .then((response) => {
            return response.data.items;
        })
}

export function getProduct(itemId) {
    return apiBaseUrl
        .get(`/items/${itemId}`)
        .then((response) => {
            return response.data.item;
        })
}

export function getCategories() {
    return apiBaseUrl
        .get('/categories')
        .then((response) => {
            const categories = response.data.categories.map((category) => {
                return category.category_name;
            });
            return categories;
        })
}

export function getUsers() {
    return apiBaseUrl
        .get('/users')
        .then((response) => {
            return response.data.users;
        })
}