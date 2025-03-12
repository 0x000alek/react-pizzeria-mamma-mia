import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pizza from './pages/Pizza'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import CartProvider from './context/CartContext'
import PizzaProvider from './context/PizzaContext'
import UserProvider from './context/UserContext'

import { UserContext } from './context/UserContext'

import { useContext } from 'react'
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  // const { token } = useContext(UserContext)

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <PizzaProvider>
            <CartProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/pizza/:id' element={<Pizza />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/404' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </CartProvider>
          </PizzaProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
