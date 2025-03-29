import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const { user, signout } = useContext(UserContext)

  return (
    <>
    <div className="container-fluid">
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-10 col-sm-10">
            <h1 className="mb-4">Perfil de Usuario</h1>
            <div className="d-flex justify-content-between align-items-center">
              <p>Usuario: { user.email }</p>
              <button className="btn btn-danger" onClick={() => signout()}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile