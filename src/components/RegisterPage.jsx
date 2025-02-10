import { useState } from 'react'

const RegisterPage = () => {
  const emptyyUser = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [user, setUser] = useState(emptyyUser)

  const handleInputOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSignUpFormOnSubmit = (e) => {
    e.preventDefault()
    
    const {email, password, confirmPassword} = user
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

    alert('Registro existoso!')
    setUser({ email: '', password: '', confirmPassword: '' })
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
                    <input type="email" name="email" value={user.email} onChange={handleInputOnChange} className="form-control" id="inputEmail" placeholder="Ingresa tu email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" name='password' value={user.password} onChange={handleInputOnChange} className="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputConfirmPassword" className="form-label">Password</label>
                    <input type="password" name='confirmPassword' value={user.confirmPassword} onChange={handleInputOnChange} className="form-control" id="inputConfirmPassword" placeholder="Ingresa tu contraseña" />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100" 
                    disabled={!user.email || !user.password || !user.confirmPassword}>Confirmar</button>
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