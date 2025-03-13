import AlertProvider from './AlertContext'
import CartProvider from './CartContext'
import PizzaProvider from './PizzaContext'
import UserProvider from './UserContext'

const AppContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <AlertProvider>
        <PizzaProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </PizzaProvider>
      </AlertProvider>
    </UserProvider>
  )
}

export default AppContextProvider