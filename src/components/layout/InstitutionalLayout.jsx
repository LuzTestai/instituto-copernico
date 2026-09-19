import { useEffect } from 'react'
import {
  Outlet,
  useLocation,
} from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

function InstitutionalLayout() {
  const location = useLocation()

  // Cuando el usuario cambia de ruta,
  // vuelve automáticamente al inicio de la página.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [location.pathname])

  return (
    <div className="institutional-layout">
      <Navbar />

      <main className="institutional-layout__content">
        <Outlet />
      </main>
   

      <Footer />
    </div>
  )
}

export default InstitutionalLayout