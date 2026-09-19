import { Link } from 'react-router-dom'
//import '../styles/pages/notFoundPage.css'

function NotFoundPage() {
  return (
    <div>
      <section>
        <span>404</span>

        <h1>Página no encontrada</h1>

        <p>
          La página que estás buscando no existe
          o fue movida.
        </p>

        <Link to="/">
          Volver al inicio
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage