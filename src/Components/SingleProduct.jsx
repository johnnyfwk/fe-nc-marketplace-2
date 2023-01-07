import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';

function SingleProduct() {
    const itemId = useParams().item_id;
    const [singleProduct, updateSingleProduct] = useState( {} );

    useEffect(() => {
        api.getProduct(itemId)
            .then((product) => {
                updateSingleProduct(product);
            })
    }, []);

    return (
        <div>
            <h1>{singleProduct.item_name}</h1>
            <img src={singleProduct.img_url} alt={singleProduct.item_name}></img>
            <p>{singleProduct.description}</p>
            <p>Price: £{singleProduct.price}</p>
        </div>
    )
}

export default SingleProduct;