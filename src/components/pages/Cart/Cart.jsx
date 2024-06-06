import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{cartItem,food_list,removeToCart, getTotalCartAmount}=useContext(StoreContext)
  const navigate =useNavigate()
  return (
    <div className='cart'>
    <div className="cart-item">
      <div className="cart-item-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item,index)=>{
              if(cartItem[item._id]>0){
                return(
                  <>
                  <div className='cart-item-title cart-items-item'>
                     <img src={item.image} alt="" />
                     <p>{item.name}</p>
                     <p>${item.price}</p>
                     <p>{cartItem[item._id]}</p>
                     <p>${item.price*cartItem[item._id]}</p>
                     <p className='cross' onClick={()=>removeToCart(item._id)}>X</p>
                  </div>
                  <hr />
                  </>
                )
              }
      })}
    </div>
    <div className="cart-bottom">
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
          <p>${getTotalCartAmount()===0?0:2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
        </div>
   
        </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>  
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' name="" id="" />
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Cart