import { useContext, useEffect } from 'react'

import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

import { PizzaContext } from '../context/PizzaContext'

const Home = () => {
  const { pizzas, findAllPizzas } = useContext(PizzaContext)

  useEffect(() => {
    findAllPizzas()
  }, [])

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container pt-5 pb-4">
          <div className="row justify-content-center">
            { pizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home