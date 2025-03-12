import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../components/Loading'

const Pizza = () => {
  const { id } = useParams()

  const [pizza, setPizza] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getPizza = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`
    try {
      const res = await fetch(url)
      const data = await res.json()

      setPizza({...data, name: capitalizeWords(data.name)})
      setIsLoading(false)
    } catch (err) {
      console.error(err)
      return
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  const capitalizeWords = (string) => {
    return string.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(amount)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
      <div className="d-flex col-lg-4 col-md-6 col-sm-10 mb-2">
        <div className="card">
          <img src={pizza.img} className="card-img-top" alt="Pizza"/>
          <div className="card-body pb-1">
            <h4 className="card-title">Pizza {pizza.name}</h4>
            <p>{pizza.desc}</p>
          </div>
          <hr className="m-0" />
          <div className="card-body fw-lighter text-center p-1">
            <p className="fs-4 text mb-0">Ingredientes:</p>
          <ul className='list-unstyled'>
            { pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          </div>
          <hr className="m-0" />
          <div className="card-body">
            <p className="fs-3 text fw-bold text-center">Precio: {formatPrice(pizza.price)}</p>
            <div className="card-actions">
              <button className="btn btn-dark mx-1">
                Añadir <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Pizza