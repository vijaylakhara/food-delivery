import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { FoodItem } from '../foodItem/FoodItem'
function FoodDisplay({ catagory }) {
  const { food_list } = useContext(StoreContext)
  console.log(food_list)
  return (
    <div className='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (catagory === "All" || catagory === item.category) {

            return (
              <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
