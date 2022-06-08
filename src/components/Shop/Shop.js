import React, { useState } from 'react';
import Data from '../../fakeData/Data.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
function Shop(props) {
    const[products, setProducts]= useState(Data)
    const [cart, setCart] = useState([])

    const handleAddProduct =(product)=>{
        console.log("add product", product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map((product) =><Product key={product.id} handleAddProduct={handleAddProduct}  product={product}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}

export default Shop;