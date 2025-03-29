import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const signin = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {email, password})

      setToken(res.data.token)
      setUser({ 'email': res.data.email })
    } catch (err) {
      console.error(err)
    }
  }

  const signup = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {email, password})
      
      setToken(res.data.token)
      setUser({ 'email': res.data.email })
    } catch (err) {
      console.error(err)
    }
  }

  const signout = () => {
    try {
      setToken(null)
      localStorage.removeItem('token')
    } catch (err) {
      console.error(err)
    }
  }

  const profile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/me', {user})
      setUser({...user, id: res.data.id})
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    token ? localStorage.setItem('token', token) : localStorage.removeItem('token')
  })

  const stateGlobal = {
    user, 
    token, 
    signin, 
    signup, 
    signout, 
    profile
  }

  return (
    <UserContext.Provider value={stateGlobal}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider