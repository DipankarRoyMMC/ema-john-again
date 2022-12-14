import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quentity = 0;
    for (const product of cart) {
        quentity = quentity + product.quentity;
        total = total + product.price * product.quentity;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * .10).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className="cart">
            <h2>Order Summary:</h2>
            <p>Selected Items: {quentity}</p>
            <p><strong>Total Price: $ {total}</strong></p>
            <p><strong>Shipping Charge: $ {shipping} </strong> </p>
            <p><strong>Tax: $ {tax} </strong></p>
            <h4>Grand Total: $ {grandTotal} </h4>
        </div>
    );
};

export default Cart;