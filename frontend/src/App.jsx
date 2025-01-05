import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Carousel from './components/Carousel/Carousel'
import data from './CarouselData'; 
import LoginPopup from './components/LoginPopup/LoginPopup'
import Placeorder from './pages/Placeorder/Placeorder'


const App = () => {
  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Carousel data={data}/>
    <Footer/>
    
    </>
  )
}

export default App
