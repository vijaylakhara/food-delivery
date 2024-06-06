import React, { useState } from 'react'
import './home.css'
import { Header } from '../../Header/Header'
import { ExploreMenu } from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import { AppDownload } from '../../AppDownload/AppDownload'

const Home = () => {
  const [catagory, setCatagory] = useState("All")
  return (
    <div className='home'>
      <Header />
      <ExploreMenu catagory={catagory} setCatagory={setCatagory} />
      <FoodDisplay catagory={catagory} />
      <AppDownload/>
    </div>
  )
}

export default Home