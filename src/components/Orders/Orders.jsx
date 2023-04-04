import React from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem';

const Orders = () => {
    const products = useLoaderData()

    console.log(products)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {products.map( product => <ReviewItem key={product.id} product={product}/>)}
            </div>
            <div className='cart-container'>
                <Cart cart={products}/>
            </div>
        </div>
    );
};

export default Orders;