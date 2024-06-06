import React, { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import './placeOrder.css'
export const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
<form action="" className='place-order'>
<div className="place-order-left">
  <p className='title'>Delivery Information</p>
  <div className="multi-fields">
    <input type="text" placeholder='First Name' />
    <input type="text" placeholder='Last Name' />
  </div>
  <input type="email" placeholder="Email address" name="" id="" />
  <input type="text" placeholder="Street" name="" id="" />
  <div className="multi-fields">
    <input type="text" placeholder='City' />
    <input type="text" placeholder='State' />
  </div>
  <div className="multi-fields">
    <input type="text" placeholder='Zip code' />
    <input type="text" placeholder='Country' />
  </div>
  <input type="text" name="" id="" placeholder='Phone'/>
</div>
<div className="place-order-right">
<div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery</p>
          <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
        </div>
   
        </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>  
        </div>
</div>
</form>
  )
}
