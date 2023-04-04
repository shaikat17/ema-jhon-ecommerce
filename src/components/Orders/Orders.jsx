import React, { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    // console.log(savedCart)

    

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {cart.map( product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}/>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;