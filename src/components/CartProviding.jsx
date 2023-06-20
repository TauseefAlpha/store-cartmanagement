import React from 'react'
import { CartProvider } from 'react-use-cart'
import Index1 from './Index1'
import Cart from './common/Cart'

const CartProviding = () => {
  return (
      <div>
          <h1>hello cart</h1>
          <CartProvider>
              <Index1 />
              <Cart />
          </CartProvider>
      </div>
  )
}

export default CartProviding
