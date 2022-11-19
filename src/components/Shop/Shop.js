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
                addedProduct.quentity = quentity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart)
        }
    }, [products]);

    // declear handle add to cart button 
    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quentity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quentity = exist.quentity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);

        //  save data in local storage 
        addToDb(selectedProduct.id);

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