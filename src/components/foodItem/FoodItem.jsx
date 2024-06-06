import React, { useContext, useState } from 'react'
import './foodItem.css'
import assets from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

export const FoodItem = ({id,name,price,description,image}) => {
    
    const {cartItem,addToCart,removeToCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-img"/>
            {
                !cartItem[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :<div className='food-item-counter'>
                        <img src={assets.remove_icon_red} alt="" onClick={()=>removeToCart(id)}/>
                        <p>{cartItem[id]}</p>
                        <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)}/>
                </div>
            } 
        </div> 
        <div className="food-tem-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>

    </div>
  )
}
