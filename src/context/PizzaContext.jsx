import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const baseUrl = 'http://localhost:5000/api/pizzas'

  const [pizzas, setPizzas] = useState([])
  const [pizza, setPizza] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
    
  const findAllPizzas = async () => {
    try {
      const res = await fetch(baseUrl)
      const data = await res.json()
      
      setPizzas(data.map(item => ({...item, name: capitalizeWords(item.name)})))
    } catch (err) {
      console.error(err)
      return
    }
  }

  const findPizzaById = async (pizzaId) => {
    const url = `${baseUrl}/${pizzaId}`
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

  const capitalizeWords = (string) => {
    return string.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const stateglobal = {
    pizzas, 
    pizza, 
    isLoading, 
    findAllPizzas, 
    findPizzaById
  }

  return (
    <PizzaContext.Provider value={stateglobal}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider