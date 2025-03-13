import { Route, Routes } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProtectedRoute from '../components/ProtectedRoute'

import Pizza from '../pages/Pizza'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={
        <ProtectedRoute navigateTo='/' requireAuth={false}>
          <RegisterPage />
        </ProtectedRoute>
      } />
      <Route path='/login' element={
        <ProtectedRoute navigateTo='/' requireAuth={false}>
          <LoginPage />
        </ProtectedRoute>
      } />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route path='/profile' element={
        <ProtectedRoute navigateTo='/login'>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default AppRoutes