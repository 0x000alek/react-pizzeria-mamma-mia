import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash, faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Cart = () => {
  const { cart, addToCart, subtractFromCart, removeFromCart, orderDetails } = useContext(CartContext)
  const { token } = useContext(UserContext)

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(amount)
  }

  return (
    <>
    <div className='container-fluid'>
      <div className='container pt-5 pb-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='card mb-4'>
              <div className='card-body'>
                {orderDetails.total === 0 && <p className='mb-0 text-center text-body-secondary'><span>Tu carrito está vacío</span></p>}
                {cart.map((pizza) => (
                  <div className='row cart-item mb-3' key={pizza.id}>
                    <div className='col-md-3'>
                      <img src={pizza.img} alt={pizza.name} className='img-fluid' />
                    </div>
                    <div className='col-md-5'>
                      <h5 className='card-title mb-0'>Pizza {pizza.name}</h5>
                      <p><small className='text-muted'>Precio unitario: {formatPrice(pizza.price)}</small></p>
                    </div>
                    <div className='col-md-2'>
                      <div className="input-group">
                        <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => subtractFromCart(pizza)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input type="text" className="form-control form-control-sm text-center quantity-input" value={pizza.count} readOnly/>
                        <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => addToCart(pizza)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className='col-md-2 text-end'>
                      <p className='fw-bold'>{formatPrice(pizza.price * pizza.count)}</p>
                      <button className='btn btn-sm btn-outline-danger' onClick={() => removeFromCart(pizza)}>
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
                  <span>{formatPrice(orderDetails.subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Costo de Envío</span>
                  <span>{formatPrice(orderDetails.shippingCost)}</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>{formatPrice(orderDetails.total)}</strong>
                </div>
                <button className="btn btn-primary w-100" disabled={ orderDetails.total === 0 || !token}>
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