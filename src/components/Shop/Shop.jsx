import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

      const [products, setProducts] = useState([]);

      useEffect(() => {
        const loadData = async () => {
          const response = await fetch("products.json");
          const data = await response.json();

          // console.log(data)
          setProducts(data);
        };

        loadData();
      }, []);

      const

  return (
    <div className="shop-container">
        <div className="products-container">
            {/* {products.map( product => {
                console.log(product);
                <Product></Product>
            })} */}
            {products.map( product => {
                return <Product key={product.id} product={product} />;
            })}

        </div>
        <div className="cart-container">
            <h2>cart</h2>
        </div>
    </div>
  )
}

export default Shop