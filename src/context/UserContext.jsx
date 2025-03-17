import { createContext, useState } from 'react';

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(true)

  const signout = () => {
    setToken(false)
  }

  const stateGlobal = {
    user, 
    token, 
    signout
  }

  return (
    <UserContext.Provider value={stateGlobal}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider