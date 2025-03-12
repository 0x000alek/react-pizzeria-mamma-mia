import { createContext, useContext, useState } from 'react'
import { AlertContext } from './AlertContext'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const { confirmDialogAlert, toast } = useContext(AlertContext)

  const [cartContext, setCartContext] = useState([])
  const cart = cartContext

  const addToCart = (cartItem) => {
    try {
      if (cartContext.find((item) => item.id === cartItem.id)) {
        setCartContext(cartContext.map((item) =>
          item.id === cartItem.id ? { ...item, count: item.count + 1 } : item
        ))
      } else {
        setCartContext([...cartContext, {...cartItem, count: 1}])
      }

      toast('success', `1 Pizza ${cartItem.name} añadida al carrito`)
    } catch (err) {
      console.error(err)
      toast('error', `Ha ocurrido un problema tratando de añadir 1 Pizza ${cartItem.name} al carrito`)
    }
  }

  const subtractFromCart = (cartItem) => {
    try {
      setCartContext(cartContext.map((item) =>
        item.id === cartItem.id ? { ...item, count: item.count - 1 } : item
      ).filter((item) => item.count > 0))
    } catch (err) {
      console.error(err)
      toast('error', `Ha ocurrido un problmea tratando de eliminar 1 Pizza ${cartItem.name} del carrito`)
    }
  }

  const removeFromCart = (cartItem) => {
    try {
      confirmDialogAlert(
        'warning', 
        `Se eliminará un total de ${cartItem.count} Pizza ${cartItem.name} de tu carrito`
      ).then((result) => {
        if (result.isConfirmed) {
          setCartContext(cartContext.filter((item) => item.id !== cartItem.id))
        }
      })
    } catch (err) {
      console.error(err)
    }
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
    orderDetails: {
      subtotal,
      shippingCost,
      total
    }
  }

  return (
    <CartContext.Provider value={stateGlobal}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider