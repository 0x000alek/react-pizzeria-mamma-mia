import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext)
  const pizzaCartItem = {
    id, 
    name, 
    price, 
    img
  }

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(amount)
  }

  return (
    <div className="d-flex col-lg-4 col-md-6 col-sm-10 mb-2">
      <div className="card">
        <img src={img} className="card-img-top" alt="Pizza"/>
        <div className="card-body pb-1">
          <h4 className="card-title">Pizza {name}</h4>
        </div>
        <hr className="m-0" />
        <div className="card-body fw-lighter text-center p-1">
          <p className="fs-4 text mb-0">Ingredientes:</p>
          <ul className='list-unstyled'>
            { ingredients.map((ingredient) => (
              <li key={ingredient}>🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        <hr className="m-0" />
        <div className="card-body">
          <p className="fs-3 text fw-bold text-center">Precio: {formatPrice(price)}</p>
          <div className="card-actions">
            <Link to={ `/pizza/${id}` } className="btn btn-outline-dark mx-1">
              Ver más <FontAwesomeIcon icon={faPlus}/>
            </Link>
            <button className="btn btn-dark mx-1" onClick={() => addToCart(pizzaCartItem)}>
              Añadir <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza