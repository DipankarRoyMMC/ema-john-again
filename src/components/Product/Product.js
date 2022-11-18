import React from 'react';
import './Product.css';
const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, shipping, ratings, seller } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h3>Name: {name}</h3>
                <p><strong>Price: $ </strong>{price}</p>
                <p><small>Shipping: ${shipping}</small></p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;