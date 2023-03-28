import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getShoppingCart} from '../utilities/fakedb';

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
        setCart(prev => [...prev, product])
        // console.log(cart)
        addToDb(product.id)
      }

  return (
    <div className="shop-container">
        <div className="products-container">
            {/* {products.map( product => {
                console.log(product);
                <Product></Product>
            })} */}
            {products.map( product => {
                return <Product key={product.id} product={product} handleAddCart={handleAddCart} />;
            })}

        </div>
        <div className="cart-container">
        <Cart cart={cart} />
        </div>
    </div>
  )
}

export default Shop