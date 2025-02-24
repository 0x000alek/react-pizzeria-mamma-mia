import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pizza from './components/Pizza'
// import Cart from './components/Cart'
// import Home from './components/Home'
// import LoginPage from './components/LoginPage'
// import RegisterPage from './components/RegisterPage'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
