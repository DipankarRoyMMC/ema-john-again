import React from 'react';
import './Cart.css';

const Cart = () => {

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Items: </p>
            <p><strong>Total Price: $</strong></p>
            <p><strong>Shipping Charge: $ </strong> </p>
            <p><strong>Tax: $ </strong></p>
            <h4>Grand Total: $ </h4>
        </div>
    );
};

export default Cart;