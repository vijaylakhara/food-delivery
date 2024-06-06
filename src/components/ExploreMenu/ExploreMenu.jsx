import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({catagory,setCatagory}) => {

  return (
    <div id ="explore-menu" className='explore-menu'>
     <h1>Explore our menu</h1>
     <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nemo reiciendis consequatur minus voluptate culpa, veniam et mollitia ipsam at nesciunt praesentium natus repellendus nisi.</p>
     <div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setCatagory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={catagory===item.menu_name?"active":""} src={item.menu_image} alt="" srcset="" />
            <p>{item.menu_name}</p>
            </div> 
        )
    })}
     </div>
     <hr />
    </div>
  )
}
