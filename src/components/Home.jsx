import { pizzas } from '../assets/js/data/pizzas'

import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
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