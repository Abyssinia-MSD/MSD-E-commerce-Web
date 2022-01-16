import React from 'react'

import {useSelector} from 'react-redux'


const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div className="cart-container">
                <div className='text-center'>
                    <h1 className="text-align-center"> Your Bag</h1>
                    <h4>Shopping Bag({cart.quantity})</h4>
                    
                </div>
            
            
            <div className="row mt-5 ">
                <div className="col-8 mx-auto justify-content-center  row scrol-part order-1">
                   {cart.products.map((item)=>(
                          <div className='d-flex order-box col-8 align-items-center'>
                          <div className='col-4 text-center '>
                              <img src={item.image} alt={item.name}/>
                          </div>
                          <div className='col-8'>
                              <h5>Name: {item.name}</h5>
                              <p>Color: {item.color}</p>
                              <p>Amount: {item.quantity}</p>
                              <p>Price: {item.price * item.quantity}</p>
  
  
  
                          </div>
  
                      </div>
                   ))}
                    {/* <hr>   */}
                </div>
                <div className="col-4">
                    <h1>ORDER SUMMARY</h1>
                    <h4> Subtotal: {cart.total}</h4>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Cart