import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb} from '../utilities/fakedb';

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