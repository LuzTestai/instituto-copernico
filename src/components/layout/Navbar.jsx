import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Quiénes somos',
    path: '/quienes-somos',
  },
  {
    label: 'Novedades',
    path: '/novedades',
  },
  {
    label: 'Divulgación',
    path: '/divulgacion',
  },
  {
    label: 'Investigación',
    path: '/investigacion',
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  // Cierra el menú mobile cada vez que cambia la ruta
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Detecta scroll para cambiar ligeramente el navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`institutional-navbar ${
        scrolled ? 'institutional-navbar--scrolled' : ''
      }`}
    >
      <div className="institutional-navbar__container">
        {/* LOGO */}
        <Link
          to="/"
          className="institutional-navbar__brand"
          aria-label="Instituto Copérnico - Inicio"
        >
          <span className="institutional-navbar__logo">
            <span className="institutional-navbar__logo-orbit" />
            <span className="institutional-navbar__logo-planet" />
          </span>

          <span className="institutional-navbar__brand-text">
            <strong>Instituto</strong>
            <span>Copérnico</span>
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP / MOBILE */}
        <nav
          className={`institutional-navbar__nav ${
            menuOpen ? 'institutional-navbar__nav--open' : ''
          }`}
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `institutional-navbar__link ${
                  isActive
                    ? 'institutional-navbar__link--active'
                    : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* ECLIPSE - lo destacamos visualmente */}
          <NavLink
            to="/eclipse-2027"
            className={({ isActive }) =>
              `institutional-navbar__eclipse ${
                isActive
                  ? 'institutional-navbar__eclipse--active'
                  : ''
              }`
            }
          >
            <span className="institutional-navbar__eclipse-icon">
              ◉
            </span>

            Eclipse 2027
          </NavLink>

          {/* CAMPUS VIRTUAL - página externa */}
          <a
            href="https://www.institutocopernico.org/moodle/"
            target="_blank"
            rel="noopener noreferrer"
            className="institutional-navbar__campus"
          >
            Campus Virtual

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M14 5H19V10"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M10 14L19 5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <path
                d="M19 13V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </nav>

        {/* BOTÓN MOBILE */}
        <button
          type="button"
          className={`institutional-navbar__menu-button ${
            menuOpen
              ? 'institutional-navbar__menu-button--open'
              : ''
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar