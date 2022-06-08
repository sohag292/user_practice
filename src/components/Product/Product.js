import React from 'react';
import './Product.css'

function Product(props) {
    const{img, first_name, email, phone, home, income}= props.product
    return (
       
            <div className="cart gallery">
                <img src={img} alt="" />
                <div className='desc'>
                    <h2>Name: {first_name}</h2>
                    <p>Email: {email}</p>
                    <p>Phone No: {phone}</p>
                    <p>Adress: {home}</p>
                    <h5>Salary: ${income}</h5>
                    <button className='extra' onClick={()=>props.handleAddProduct(props.product)}>Add Cart</button>
                </div>
            </div>


    );
}

export default Product;