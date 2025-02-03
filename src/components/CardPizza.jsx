import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CardPizza = ({name, price, ingredients, img}) => {
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
          <p className="card-text">🍕 {ingredients.join(', ')}</p>
        </div>
        <hr className="m-0" />
        <div className="card-body">
          <p className="fs-3 text fw-bold text-center">Precio: ${price.toLocaleString('es-CL')}</p>
          <div className="card-actions">
            <button className="btn btn-outline-dark mx-1">Ver más <FontAwesomeIcon icon={faPlus}/></button>
            <button className="btn btn-dark mx-1">Añadir <FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza