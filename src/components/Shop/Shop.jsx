import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, deleteShoppingCart, getShoppingCart} from '../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {

      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([])

      useEffect(() => {
        const loadData = async () => {
          const response = await fetch("products.json");
          const data = await response.json();

          // console.log(data)
          setProducts(data);
        };

        loadData();
      }, []);

      useEffect(() =>{
        const storeCart = getShoppingCart()
        const savedProduct = []

        // get saved product id
        for(const id in storeCart){
          // get product of saved product id
          const addedProduct = products.find( product => product.id === id)

          if(addedProduct){
            // add quantity
            const quantity = storeCart[id]
            addedProduct.quantity = quantity
            
            // pushed to the savedProduct
            savedProduct.push(addedProduct)
          }
        }

        // set to the cart
        setCart(savedProduct)
      }, [products])

      const handleAddCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
      }

      const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
      }

  return (
    <div className="shop-container">
        <div className="products-container">
            {products.map( product => {
                return <Product key={product.id} product={product} handleAddCart={handleAddCart} />;
            })}

        </div>
        <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart} >
        <Link className='proceed-link' to='/orders'>
              <button className='btn-proceed'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
            </Cart>
        </div>
    </div>
  )
}

export default Shop