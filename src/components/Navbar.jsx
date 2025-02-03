import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const total = 25000;
  const token = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
      <a className="navbar-brand px-2" href="#">Pizzería Mamma Mia!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <a className="btn btn-outline-light" href="#">🍕 Home</a>
          </li>
          {!token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <a className="btn btn-outline-light" href="#">🔓 Profile</a>
          </li>
          }
          {!token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <a className="btn btn-outline-light" href="#">🔒 Logout</a>
          </li>
          }
          {token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <a className="btn btn-outline-light" href="#">🔐 Login</a>
          </li>
          }
          {token &&
          <li className="nav-item px-2 mb-xl-0 mb-2">
            <a className="btn btn-outline-light" href="#">🔐 Register</a>
          </li>
          }
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <a className="btn btn-outline-info" href="#">
              <FontAwesomeIcon icon={faCartShopping} /> Total: ${total.toLocaleString('es-CL')}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar