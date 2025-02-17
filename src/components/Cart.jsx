import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { pizzaCart } from '../assets/js/data/pizzas'
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const handleMinusButtonOnClick = (pizzaId) => {
    const newCart = [...cart]
    const wantedPizza = newCart.find(
      p => p.id === pizzaId
    )

    wantedPizza.count -= 1
    setCart(newCart.filter(p => p.count > 0))
  }

  const handlePlusButtonOnclick = (pizzaId) => {
    const newCart = [...cart]
    const wantedPizza = newCart.find(
      p => p.id === pizzaId
    )

    wantedPizza.count += 1
    setCart(newCart)
  }

  function capitalizeWords(string) {
    return string.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }
  
  function formatPrice(amount) {
    return amount.toLocaleString('es-CL')
  }

  return (
    <>
    <div className="container-fluid">
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
          <div className='col-lg-8'>
            <div className="card mb-4">
              <div className="card-body">
                { pizzaCart.map((pizza) => (
                  <div className="row cart-item mb-3" key={pizza.id}>
                    <div className="col-md-3">
                      <img src={pizza.img} alt={pizza.name} className="img-fluid"/>
                    </div>
                    <div className="col-md-5">
                      <h5 className="card-title">Pizza {capitalizeWords(pizza.name)}</h5>
                    </div>
                    <div className="col-md-2">
                      <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => handleMinusButtonOnClick(pizza.id)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span>{pizza.count}</span>
                        <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => handlePlusButtonOnclick(pizza.id)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <p className="fw-bold">${formatPrice(pizza.price)}</p>
                      <button className="btn btn-sm btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-start mb-4">
              <a href="#" className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faArrowLeft} /> Seguir Comprando
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card cart-summary">
              <div className="card-body">
                <h5 className="card-title mb-4">Resumen del Pedido</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>$199.97</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Costo de Envío</span>
                  <span>$0</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>$229.97</strong>
                </div>
                <button className="btn btn-primary w-100">Ir a Pagar</button>
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