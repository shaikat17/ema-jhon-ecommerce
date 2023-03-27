import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {product} = props;
    const { id, img, name, seller, ratings, price } = product;
    const handleAddCart = props.handleAddCart
    return (
      <div className="product">
        <img src={img} alt={name} />
        <div className="product-info">
          <h6 className="product-name">{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Stars</p>
        </div>
        <button
          className="btn-cart"
          onClick={() => handleAddCart(id)}
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    );
}

export default Product