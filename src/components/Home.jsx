import { useEffect, useState } from 'react'

import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  
  const getPizzas = async () => {
    const url = 'http://localhost:5000/api/pizzas'
    try {
      const res = await fetch(url)
      const data = await res.json()

      setPizzas(data)
    } catch (err) {
      console.error(err)
      return
    }
  }

  useEffect(() => {
    getPizzas()
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