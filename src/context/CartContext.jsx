import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartContext, setCartContext] = useState([])
  const cart = cartContext

  const addToCart = (cartItem) => {
    if (cartContext.find((item) => item.id === cartItem.id)) {
      setCartContext(cartContext.map((item) =>
        item.id === cartItem.id ? { ...item, count: item.count + 1 } : item
      ))
    } else {
      setCartContext([...cartContext, cartItem])
    }
  }

  const subtractFromCart = (cartItemId) => {
    setCartContext(cartContext.map((item) =>
      item.id === cartItemId ? { ...item, count: item.count - 1 } : item
    ).filter((item) => item.count > 0))
  }

  const removeFromCart = (cartItemId) => {
    setCartContext(cartContext.filter((item) => item.id !== cartItemId))
  }

  const calculateSubtotal = () => {
    return cart.reduce((accumulator, pizza) => accumulator + (pizza.price * pizza.count), 0)
  }

  const subtotal = calculateSubtotal()
  const shippingCost = 0
  const total = subtotal + shippingCost

  const stateGlobal = {
    cart,
    addToCart,
    subtractFromCart,
    removeFromCart,
    subtotal,
    shippingCost,
    total
  }

  return (
    <CartContext.Provider value={stateGlobal}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider