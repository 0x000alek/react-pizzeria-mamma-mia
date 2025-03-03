import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="container pt-5 pb-4">
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
              <h1 className="display-1 fw-bold">404</h1>
              <p className="fs-3">
                <span className="text-danger">Opps!</span> Página no encontrada.
              </p>
              <p className="lead">
                La página que estás buscando no existe.
              </p>
              <Link to="/" className="btn btn-primary">Regresar al Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound