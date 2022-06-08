import React from 'react';
import "./Cart.css";

function Cart(props) {
    const cart = props.cart;

    let total = 0;
    for(let i =0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.income * 12;
        console.log(total);
    }
    return (

        <div className='user_container'>
            <h3 className='heading'>This is user</h3>
            <h3>Add User: {cart.length}</h3>
            <h4>Yearly Salary: ${total}</h4>
        </div>
    );
}

export default Cart;