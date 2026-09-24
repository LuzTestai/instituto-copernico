import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import InstitutionalLayout from '../components/layout/InstitutionalLayout'

// Páginas institucionales
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NewsPage from '../pages/NewsPage'
import DivulgacionPage from '../pages/DivulgacionPage'
import InvestigacionPage from '../pages/InvestigacionPage'
import NewsDetailPage from '../pages/NewsDetailPage'
import ContactPage from '../pages/ContactPage'
// Página especial del eclipse
import EclipsePage from '../pages/eclipse/EclipsePage'

// Página 404
import NotFoundPage from '../pages/NotFoundPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            SITIO INSTITUCIONAL
        ========================== */}

        <Route element={<InstitutionalLayout />}>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/quienes-somos"
            element={<AboutPage />}
          />

          <Route
            path="/novedades"
            element={<NewsPage />}
          />

          <Route
            path="/novedades/:slug"
            element={<NewsDetailPage />}
          />


          <Route
            path="/divulgacion"
            element={<DivulgacionPage />}
          />

          <Route
            path="/investigacion"
            element={<InvestigacionPage />}
          />

          <Route
            path="/contacto"
            element={<ContactPage />}
          />
        </Route>


        {/* =========================
            ECLIPSE 2027
            Tiene diseño propio
        ========================== */}

        <Route
          path="/eclipse-2027"
          element={<EclipsePage />}
        />


        {/* =========================
            404
        ========================== */}

        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter