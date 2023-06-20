import { useState } from 'react'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProviding from './components/CartProviding'
import Index1 from './components/Index1'
import Cart from './components/common/Cart'
import ShowProduct from './components/showProduct'
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/cardproviding' element={<CartProviding />} />
        <Route path='/index' element={<Index1 />} />
        <Route path='/showallproducts' element={<ShowProduct />} />
        <Route path='/carts' element={<Cart />} />
      </Routes>
    </div>

  )
}

export default App
