import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // data set and load from extenal source 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // get dat from loca storage and load it 
    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(getStored);
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quentity = storedCart[id];
                addedProduct.quentiry = quentity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    }, [products]);


    // declear handle add to cart button 
    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.id);

    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;