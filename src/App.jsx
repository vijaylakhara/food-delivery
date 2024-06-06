import React, { useState } from 'react'
import { Navbar } from './components/navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import { PlaceOrder } from './components/pages/PlaceOder/PlaceOrder'
import Cart from './components/pages/Cart/Cart'
import { Footer } from './components/footer/Footer'
import { LoginPopUp } from './components/loginPopUp/LoginPopUp'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
  <>
  {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
  </>
  )
}

export default App