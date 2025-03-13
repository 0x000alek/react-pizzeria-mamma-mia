import './App.css'

import AppContextProvider from './context/AppContextProvider'
import AppRoutes from './routes/AppRoutes'

import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
