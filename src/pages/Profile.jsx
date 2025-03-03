const Profile = () => {
  const testUser = {
    name: 'Mamma Mia',
    email: 'user@mammamia.cl'
  }

  return (
    <>
    <div className="container-fluid">
      <div className="container pt-5 pb-4">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-10 col-sm-10">
            <h1 className="mb-4">Perfil de Usuario</h1>
            <div className="d-flex justify-content-between align-items-center">
              <p>Usuario: {testUser.email}</p>
              <button className="btn btn-danger">Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile