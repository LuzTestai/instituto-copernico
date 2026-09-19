import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="institutional-footer">
      <div className="institutional-footer__top">
        <div className="institutional-footer__container">
          {/* IDENTIDAD */}
          <div className="institutional-footer__about">
            <Link
              to="/"
              className="institutional-footer__brand"
            >
              <span className="institutional-footer__logo">
                <span className="institutional-footer__logo-orbit" />
                <span className="institutional-footer__logo-planet" />
              </span>

              <span className="institutional-footer__brand-text">
                <strong>Instituto</strong>
                <span>Copérnico</span>
              </span>
            </Link>

            <p>
              Entidad científica y educativa dedicada a la
              astronomía y ciencias afines desde 1973.
            </p>
          </div>

          {/* EXPLORAR */}
          <div className="institutional-footer__column">
            <h3>Explorar</h3>

            <Link to="/">
              Inicio
            </Link>

            <Link to="/quienes-somos">
              Quiénes somos
            </Link>

            <Link to="/novedades">
              Novedades
            </Link>

            <Link to="/divulgacion">
              Divulgación
            </Link>

            <Link to="/investigacion">
              Investigación
            </Link>
          </div>

          {/* EXPERIENCIAS */}
          <div className="institutional-footer__column">
            <h3>Astronomía</h3>

            <Link
              to="/eclipse-2027"
              className="institutional-footer__special-link"
            >
              Eclipse 2027
            </Link>

            <a
              href="https://www.institutocopernico.org/moodle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campus Virtual ↗
            </a>

            <a
              href="https://www.institutocopernico.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitio anterior ↗
            </a>
          </div>

          {/* CONTACTO */}
          <div className="institutional-footer__column">
            <h3>Instituto Copérnico</h3>

            <p className="institutional-footer__small-text">
              Astronomía
              <br />
              Educación
              <br />
              Investigación
              <br />
              Divulgación científica
            </p>
          </div>
        </div>
      </div>

      <div className="institutional-footer__bottom">
        <div className="institutional-footer__bottom-container">
          <p>
            © {currentYear} Instituto Copérnico.
            Todos los derechos reservados.
          </p>

          <div className="institutional-footer__bottom-links">
            <Link to="/eclipse-2027">
              Eclipse 2027
            </Link>

            <a
              href="https://www.institutocopernico.org/moodle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campus Virtual
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer