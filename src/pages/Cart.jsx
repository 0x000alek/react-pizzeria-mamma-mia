import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash, faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { pizzaCart } from '../assets/js/data/pizzas'
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const handleReduceButtonOnClick = (pizzaId) => {
    setCart(cart.map((pizza) => 
      pizza.id === pizzaId ? {...pizza, count: pizza.count - 1} : pizza
    ).filter((pizza) => pizza.count > 0))
  }

  const handleIncrementButtonOnClick = (pizzaId) => {
    setCart(cart.map((pizza) => 
      pizza.id === pizzaId ? {...pizza, count: pizza.count + 1} : pizza
    ))
  }

  const handleRemoveButtonOnClick = (pizzaId) => {
    setCart(cart.filter((pizza) => pizza.id !== pizzaId))
  }

  const capitalizeWords = (string) => {
    return string.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(amount)
  }

  const calculateSubtotal = () => {
    return cart.reduce((accumulator, pizza) => accumulator + (pizza.price * pizza.count), 0)
  }

  const subtotal = calculateSubtotal()
  const shippingCost = 0
  const total = subtotal + shippingCost

  return (
    <>
    <div className='container-fluid'>
      <div className='container pt-5 pb-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='card mb-4'>
              <div className='card-body'>
                {cart.map((pizza) => (
                  <div className='row cart-item mb-3' key={pizza.id}>
                    <div className='col-md-3'>
                      <img src={pizza.img} alt={pizza.name} className='img-fluid' />
                    </div>
                    <div className='col-md-5'>
                      <h5 className='card-title mb-0'>Pizza {capitalizeWords(pizza.name)}</h5>
                      <p><small className='text-muted'>Precio unitario: {formatPrice(pizza.price)}</small></p>
                    </div>
                    <div className='col-md-2'>
                      <div className="input-group">
                        <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => handleReduceButtonOnClick(pizza.id)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input type="text" className="form-control form-control-sm text-center quantity-input" value={pizza.count} readOnly/>
                        <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => handleIncrementButtonOnClick(pizza.id)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className='col-md-2 text-end'>
                      <p className='fw-bold'>{formatPrice(pizza.price * pizza.count)}</p>
                      <button className='btn btn-sm btn-outline-danger' onClick={() => handleRemoveButtonOnClick(pizza.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='text-start mb-4'>
              <Link to="/" className='btn btn-outline-primary'>
                <FontAwesomeIcon icon={faArrowLeft} /> Seguir Comprando
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card cart-summary">
              <div className="card-body">
                <h5 className="card-title mb-4">Resumen del Pedido</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Costo de Envío</span>
                  <span>{formatPrice(shippingCost)}</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>{formatPrice(total)}</strong>
                </div>
                <button className="btn btn-primary w-100">
                  <FontAwesomeIcon icon={faCartShopping} /> Ir a Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart