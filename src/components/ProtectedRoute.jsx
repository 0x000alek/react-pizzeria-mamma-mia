import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

const ProtectedRoute = ({ children, navigateTo, requireAuth = true }) => {
    const { token } = useContext(UserContext)

    return (
        token === requireAuth ? children : <Navigate to={navigateTo} />
    )
}

export default ProtectedRoute