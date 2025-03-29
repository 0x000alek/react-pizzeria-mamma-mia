import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const LoginPage = () => {
  const { signin } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLoginFormOnSubmit = async (e) => {
    e.preventDefault()

    const {email, password} = formData
    try {
      if (!email.trim() || !password.trim()) {
        alert('No pueden haber campos vacíos')
        return
      }

      if (password.trim().length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres')
        return
      }

      await signin(email, password)
      alert('Ingreso existoso!')
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
            <div className="card pb-3" style={{border: 0}}>
              <form onSubmit={handleLoginFormOnSubmit}>
                <h1 className="mb-4 pt-2 pb-2">Login</h1>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputOnChange} className="form-control" id="inputEmail" placeholder="Ingresa tu email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <input type="password" name='password' value={formData.password} onChange={handleInputOnChange} className="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={!formData.email || !formData.password}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage