import React, { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../utilities/fakedb';
import { deleteShoppingCart } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    // console.log(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter( product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {cart.map( product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}/>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart} 
                handleClearCart={handleClearCart}/>
            </div>
        </div>
    );
};

export default Orders;