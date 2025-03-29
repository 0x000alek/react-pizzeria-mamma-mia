import { useContext, useState } from 'react'

import { AlertContext } from '../context/AlertContext'
import { UserContext } from '../context/UserContext'

const RegisterPage = () => {
  const { signup } = useContext(UserContext)
  const { simpleAlert } = useContext(AlertContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUpFormOnSubmit = async (e) => {
    e.preventDefault()
    
    const {email, password, confirmPassword} = formData
    try {
      if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert('No pueden haber campos vacíos')
        return
      }
  
      if (password.trim().length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres')
        return
      }
  
      if (password != confirmPassword) {
        alert('Las contraseñas no son idénticas')
        return
      }

      await signup(email, password)
      alert('Registro existoso!')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container pt-5 pb-4">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 col-md-6">
              <div className="card pb-3" style={{ border: 0 }}>
                <form onSubmit={handleSignUpFormOnSubmit}>
                  <h1 className="mb-4 pt-2 pb-2">Registro</h1>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputOnChange} className="form-control" id="inputEmail" placeholder="Ingresa tu email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" name='password' value={formData.password} onChange={handleInputOnChange} className="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputConfirmPassword" className="form-label">Password</label>
                    <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleInputOnChange} className="form-control" id="inputConfirmPassword" placeholder="Ingresa tu contraseña" />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100" 
                    disabled={!formData.email || !formData.password || !formData.confirmPassword}>Confirmar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage