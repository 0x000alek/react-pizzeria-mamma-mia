import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
    
  const getPizzas = async () => {
    const url = 'http://localhost:5000/api/pizzas'
    try {
      const res = await fetch(url)
      const data = await res.json()
      
      setPizzas(data.map(item => ({...item, name: capitalizeWords(item.name)})))
    } catch (err) {
      console.error(err)
      return
    }
  }

  useEffect(() => {
    getPizzas()
  }, [])

  const capitalizeWords = (string) => {
    return string.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider