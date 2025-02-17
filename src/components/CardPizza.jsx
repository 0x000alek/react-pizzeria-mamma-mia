import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CardPizza = ({name, price, ingredients, img}) => {
  return (
    <div className="d-flex col-lg-4 col-md-6 col-sm-10 mb-2">
      <div className="card">
        <img src={img} className="card-img-top" alt="Pizza"/>
        <div className="card-body pb-1">
          <h4 className="card-title">Pizza {capitalizeWords(name)}</h4>
        </div>
        <hr className="m-0" />
        <div className="card-body fw-lighter text-center p-1">
          <p className="fs-4 text mb-0">Ingredientes:</p>
          <ul className='list-unstyled'>
            { ingredients.map((ingredient) => (
              <li key={ingredient}>{capitalizeWords(ingredient)}</li>
            ))}
          </ul>
        </div>
        <hr className="m-0" />
        <div className="card-body">
          <p className="fs-3 text fw-bold text-center">Precio: ${formatPrice(price)}</p>
          <div className="card-actions">
            <button className="btn btn-outline-dark mx-1">Ver más <FontAwesomeIcon icon={faPlus}/></button>
            <button className="btn btn-dark mx-1">Añadir <FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

function capitalizeWords(string) {
  return string.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

function formatPrice(amount) {
  return amount.toLocaleString('es-CL')
}

export default CardPizza