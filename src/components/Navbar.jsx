import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const { total } = useContext(CartContext)
  const token = false

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(amount)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
      <Link to="/" className="navbar-brand px-2">Pizzería Mamma Mia!</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <Link to="/" className="btn btn-outline-light">🍕 Home</Link>
          </li>
          {token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <Link to="/profile" className="btn btn-outline-light">🔓 Profile</Link>
          </li>
          }
          {token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <a className="btn btn-outline-light" href="#">🔒 Logout</a>
          </li>
          }
          {!token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <Link to="/login" className="btn btn-outline-light">🔐 Login</Link>
          </li>
          }
          {!token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <Link to="/register" className="btn btn-outline-light">🔐 Register</Link>
          </li>
          }
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <Link to="/cart" className="btn btn-outline-info">
              <FontAwesomeIcon icon={faCartShopping} /> Total: {formatPrice(total)}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar