import {
  useEffect,
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import './eclipse.css'


const eclipseFacts = [
  {
    number: '01',
    title: 'No es un eclipse total',
    text:
      'La Luna pasará frente al Sol, pero su tamaño aparente no alcanzará a cubrirlo por completo. El resultado será un brillante anillo de luz.',
  },
  {
    number: '02',
    title: 'Argentina será protagonista',
    text:
      'Una franja del territorio argentino estará dentro de la zona desde la que podrá observarse la fase anular.',
  },
  {
    number: '03',
    title: 'Durará varias horas',
    text:
      'La experiencia completa incluye las fases parciales anteriores y posteriores al momento de máxima ocultación.',
  },
  {
    number: '04',
    title: 'La protección es esencial',
    text:
      'Durante un eclipse anular nunca es seguro mirar directamente al Sol sin protección solar adecuada.',
  },
]


const safetyItems = [
  {
    number: '01',
    title: 'Durante todo el eclipse',
    text:
      'En un eclipse anular la Luna nunca cubre completamente el Sol. El anillo de luz que permanece visible sigue siendo luz solar directa, por lo que la protección debe utilizarse durante toda la observación.',
  },
  {
    number: '02',
    title: 'Menos brillo no significa menos riesgo',
    text:
      'Aunque gran parte del Sol esté cubierta y parezca menos brillante, sigue siendo peligroso mirarlo directamente. Una lesión en la retina puede producirse sin dolor inmediato.',
  },
  {
    number: '03',
    title: 'Esto NO protege tus ojos',
    text:
      'Radiografías, negativos fotográficos, vidrios ahumados, anteojos de sol comunes y filtros caseros no son métodos adecuados para observar directamente el Sol.',
  },
  {
    number: '04',
    title: 'Observación segura',
    text:
      'Utilizá gafas o visores para eclipses que cumplan la norma ISO 12312-2, filtros solares específicos para instrumentos u observación indirecta mediante proyección.',
  },
]


function EclipsePage() {

  const [menuOpen, setMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      )
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }

  }, [])


  const goToSection = (id) => {

    const element =
      document.getElementById(id)

    if (!element) {
      return
    }

    element.scrollIntoView({
      behavior: 'smooth',
    })

    setMenuOpen(false)
  }


  return (
    <div className="eclipse-page">


      {/* ========================================
          NAVBAR
      ======================================== */}

      <header
        className={`eclipse-nav ${
          scrolled
            ? 'eclipse-nav--scrolled'
            : ''
        }`}
      >

        <div className="eclipse-container eclipse-nav__inner">

          <button
            className="eclipse-brand"
            onClick={() => goToSection('inicio')}
            type="button"
          >

            <span className="eclipse-brand__symbol">

              <span />

            </span>


            <span className="eclipse-brand__text">

              <strong>
                Eclipse
              </strong>

              <small>
                Argentina · 2027
              </small>

            </span>

          </button>


          <button
            type="button"
            className="eclipse-nav__toggle"
            onClick={() =>
              setMenuOpen(
                (current) => !current
              )
            }
            aria-label="Abrir menú"
          >

            <span />
            <span />

          </button>


          <nav
            className={`eclipse-nav__links ${
              menuOpen
                ? 'eclipse-nav__links--open'
                : ''
            }`}
          >

            <button
              type="button"
              onClick={() =>
                goToSection('eclipse')
              }
            >
              El eclipse
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection('argentina')
              }
            >
              Argentina
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection('seguridad')
              }
            >
              Seguridad
            </button>

            <button
              type="button"
              onClick={() =>
                goToSection('libro')
              }
            >
              El libro
            </button>

            <Link
              to="/"
              className="eclipse-nav__institute"
            >
              Instituto Copérnico
              <span>↗</span>
            </Link>

          </nav>

        </div>

      </header>



      {/* ========================================
          HERO
      ======================================== */}

      <main>

        <section
          className="eclipse-hero"
          id="inicio"
        >

          <div className="eclipse-stars" />

          <div className="eclipse-stars eclipse-stars--small" />


          <div className="eclipse-container eclipse-hero__grid">

            <div className="eclipse-hero__content">

              <span className="eclipse-eyebrow">
                06 · FEB · 2027 · ARGENTINA
              </span>


              <h1>

                Eclipse
                <span>
                  Anular
                </span>

                <small>
                  de Sol
                </small>

              </h1>


              <p className="eclipse-hero__lead">
                El cielo argentino volverá a
                convertirse en escenario de uno
                de los fenómenos astronómicos
                más fascinantes.
              </p>


              <div className="eclipse-hero__actions">

                <button
                  className="eclipse-button eclipse-button--gold"
                  type="button"
                  onClick={() =>
                    goToSection('eclipse')
                  }
                >
                  Descubrir el eclipse

                  <span>
                    ↓
                  </span>

                </button>


                <button
                  className="eclipse-button eclipse-button--ghost"
                  type="button"
                  onClick={() =>
                    goToSection('libro')
                  }
                >
                  Ver el libro

                  <span>
                    →
                  </span>

                </button>

              </div>


              <div className="eclipse-hero__meta">

                <div>
                  <small>
                    TIPO
                  </small>

                  <strong>
                    Anular
                  </strong>
                </div>


                <div>
                  <small>
                    FECHA
                  </small>

                  <strong>
                    06.02.2027
                  </strong>
                </div>


                <div>
                  <small>
                    REGIÓN
                  </small>

                  <strong>
                    Argentina
                  </strong>
                </div>

              </div>

            </div>



            {/* ECLIPSE ART */}

            <div className="eclipse-hero__visual">

              <div className="eclipse-orbit eclipse-orbit--outer" />

              <div className="eclipse-orbit eclipse-orbit--middle" />

              <div className="eclipse-orbit eclipse-orbit--inner" />


              <div className="eclipse-sun">

                <div className="eclipse-sun__glow" />

                <div className="eclipse-sun__ring">

                  <div className="eclipse-sun__moon" />

                </div>

              </div>


              <div className="eclipse-hero__visual-label">

                <span>
                  ✦
                </span>

                <p>
                  EL ANILLO
                  <br />
                  DE FUEGO
                </p>

              </div>

            </div>

          </div>


          <div className="eclipse-hero__scroll">

            <span />

            SCROLL

          </div>

        </section>



        {/* ========================================
            INTRO / EVENT
        ======================================== */}

        <section
          className="eclipse-intro"
          id="eclipse"
        >

          <div className="eclipse-container">

            <div className="eclipse-intro__top">

              <span className="eclipse-section-number">
                01
              </span>


              <div>

                <span className="eclipse-eyebrow">
                  EL FENÓMENO
                </span>

                <h2>
                  Un anillo de luz
                  <span>
                    en pleno día.
                  </span>
                </h2>

              </div>

            </div>


            <div className="eclipse-intro__grid">

              <div className="eclipse-intro__lead">

                <p>
                  Un eclipse solar ocurre cuando
                  la Luna pasa entre la Tierra y
                  el Sol. El 6 de febrero de 2027,
                  la geometría de los tres cuerpos
                  producirá un eclipse anular.
                </p>

              </div>


              <div className="eclipse-intro__copy">

                <p>
                  Durante la fase anular, la Luna
                  cubrirá la región central del
                  disco solar pero dejará visible
                  un borde luminoso alrededor de
                  su silueta.
                </p>

                <p>
                  Ese círculo de luz es conocido
                  popularmente como el
                  <strong>
                    {' '}anillo de fuego.
                  </strong>
                </p>

              </div>

            </div>

          </div>

        </section>



        {/* ========================================
            ECLIPSE EXPLANATION
        ======================================== */}

        <section className="eclipse-geometry">

          <div className="eclipse-container">

            <div className="eclipse-geometry__heading">

              <span className="eclipse-eyebrow">
                CÓMO SUCEDE
              </span>

              <h2>
                Tres cuerpos.
                <br />
                Una alineación.
              </h2>

            </div>


            <div className="eclipse-geometry__diagram">

              <div className="eclipse-geometry__body">

                <div className="eclipse-geometry__sun">

                  <span>
                    SOL
                  </span>

                </div>

              </div>


              <div className="eclipse-geometry__line">

                <span />

              </div>


              <div className="eclipse-geometry__body">

                <div className="eclipse-geometry__moon">

                  <span>
                    LUNA
                  </span>

                </div>

              </div>


              <div className="eclipse-geometry__line">

                <span />

              </div>


              <div className="eclipse-geometry__body">

                <div className="eclipse-geometry__earth">

                  <span>
                    TIERRA
                  </span>

                </div>

              </div>

            </div>


            <p className="eclipse-geometry__note">
              La Luna se encontrará lo bastante
              lejos de la Tierra como para que
              su diámetro aparente sea menor que
              el del Sol.
            </p>

          </div>

        </section>



        {/* ========================================
            FACTS
        ======================================== */}

        <section className="eclipse-facts">

          <div className="eclipse-container">

            <div className="eclipse-facts__grid">

              {eclipseFacts.map(
                (fact) => (

                  <article
                    className="eclipse-fact"
                    key={fact.number}
                  >

                    <span className="eclipse-fact__number">
                      {fact.number}
                    </span>

                    <div className="eclipse-fact__symbol">
                      ✦
                    </div>

                    <h3>
                      {fact.title}
                    </h3>

                    <p>
                      {fact.text}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>



        {/* ========================================
            ARGENTINA
        ======================================== */}

        <section
          className="eclipse-argentina"
          id="argentina"
        >

          <div className="eclipse-container eclipse-argentina__grid">

            <div className="eclipse-argentina__content">

              <span className="eclipse-section-number">
                02
              </span>

              <span className="eclipse-eyebrow">
                ARGENTINA · 2027
              </span>


              <h2>
                Nuestro territorio,
                <span>
                  bajo la sombra.
                </span>
              </h2>


              <p className="eclipse-argentina__lead">
                Argentina será uno de los países
                atravesados por la franja desde
                la cual podrá observarse la fase
                anular del eclipse.
              </p>


              <div className="eclipse-argentina__rule" />


              <p>
                Fuera de la franja de anularidad,
                el fenómeno podrá observarse como
                eclipse parcial desde una región
                mucho más extensa.
              </p>


              <p>
                La ubicación exacta del observador
                determinará qué porcentaje del Sol
                será cubierto y cuánto durará cada
                fase.
              </p>

            </div>


            <div className="eclipse-map">

              <div className="eclipse-map__frame">

                <img
                  src="/images/eclipse/mapa-eclipse-2027.png"
                  alt="Mapa del eclipse anular de Sol de 2027 en Argentina"
                />

                <span className="eclipse-map__north">
                  N
                </span>

              </div>


              <div className="eclipse-map__caption">

                <span>
                  MAPA DE VISIBILIDAD
                </span>

                <small>
                  Eclipse anular ·
                  06 febrero 2027
                </small>

              </div>

            </div>

          </div>

        </section>



        {/* ========================================
            BOOK
        ======================================== */}

        <section
          className="eclipse-book"
          id="libro"
        >

          <div className="eclipse-book__stars" />


          <div className="eclipse-container eclipse-book__grid">

            <div className="eclipse-book__visual">

              <div className="eclipse-book__halo" />


              <div className="eclipse-book__cover">

                <img
                  src="/book-cover.png"
                  alt="Libro Eclipse 2027"
                />

              </div>


              <span className="eclipse-book__orbit" />

            </div>


            <div className="eclipse-book__content">

              <span className="eclipse-section-number">
                03
              </span>

              <span className="eclipse-eyebrow">
                GUÍA DEL ECLIPSE 2027
              </span>


              <h2>
                Todo lo que necesitás
                <span>
                  saber antes de mirar.
                </span>
              </h2>


              <p>
                Una guía preparada para comprender
                el fenómeno, conocer la zona de
                visibilidad y aprender a observar
                el eclipse de manera segura.
              </p>


              <div className="eclipse-book__topics">

                <span>
                  Ciencia
                </span>

                <span>
                  Observación
                </span>

                <span>
                  Argentina
                </span>

                <span>
                  Seguridad
                </span>

              </div>


              <a
                className="eclipse-button eclipse-button--gold eclipse-book__download"
                href="/eclipse-2027.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir guía

                <span>
                  ↗
                </span>

              </a>

            </div>

          </div>

        </section>

{/* ========================================
    KIT ESCOLAR
======================================== */}

<section
  className="eclipse-kit eclipse-kit--school"
  id="kit-escolar"
>
  <div className="eclipse-container eclipse-kit__grid">

    <div className="eclipse-kit__content">

      <span className="eclipse-section-number">
        06
      </span>

      <span className="eclipse-eyebrow">
        EDUCACIÓN · CIENCIA · OBSERVACIÓN
      </span>

      <h2>
        Kit
        <span>
          Escolar.
        </span>
      </h2>

      <p className="eclipse-kit__lead">
        Una herramienta para aprender,
        comprender y observar con seguridad
        el eclipse anular de Sol del
        <strong> 6 de febrero de 2027.</strong>
      </p>

      <div className="eclipse-kit__rule" />

      <p>
        Incluye una
        <strong> guía educativa de 24 páginas</strong>,
        especialmente pensada como material
        de apoyo para alumnos, docentes y
        familias, y
        <strong>
          {' '}gafas para observación solar
          certificadas ISO 12312-2.
        </strong>
      </p>

      <p>
        Ideal para
        <strong>
          {' '}colegios, instituciones educativas
          y actividades de divulgación científica.
        </strong>
      </p>

      <div className="eclipse-kit__features">

        <div>
          <span>01</span>

          <p>
            Guía educativa
            <strong>24 páginas</strong>
          </p>
        </div>

        <div>
          <span>02</span>

          <p>
            Observación
            <strong>segura</strong>
          </p>
        </div>

        <div>
          <span>03</span>

          <p>
            Gafas
            <strong>ISO 12312-2</strong>
          </p>
        </div>

      </div>

      <Link
        to="/contacto"
        className="eclipse-button eclipse-button--gold eclipse-kit__button"
      >
        Consultar por el kit

        <span>
          →
        </span>
      </Link>

    </div>


    <div className="eclipse-kit__visual">

      <div className="eclipse-kit__image-frame">

        <img
          src="/images/eclipse/kit-escolar.jpeg"
          alt="Kit escolar para la observación del eclipse anular de Sol de 2027"
        />

      </div>

      <div className="eclipse-kit__badge">

        <small>
          KIT
        </small>

        <strong>
          ESCOLAR
        </strong>

        <span>
          2027
        </span>

      </div>

    </div>

  </div>
</section>



{/* ========================================
    KIT TURÍSTICO
======================================== */}

<section
  className="eclipse-kit eclipse-kit--tourism"
  id="kit-turistico"
>
  <div className="eclipse-container eclipse-kit__grid eclipse-kit__grid--reverse">

    <div className="eclipse-kit__visual">

      <div className="eclipse-kit__image-frame">

        <img
          src="/images/eclipse/kit-turistico.jpeg"
          alt="Kit turístico para la observación del eclipse anular de Sol de 2027"
        />

      </div>

      <div className="eclipse-kit__badge">

        <small>
          KIT
        </small>

        <strong>
          TURÍSTICO
        </strong>

        <span>
          2027
        </span>

      </div>

    </div>


    <div className="eclipse-kit__content">

      <span className="eclipse-section-number">
        05
      </span>

      <span className="eclipse-eyebrow">
        TURISMO · EXPERIENCIA · SEGURIDAD
      </span>

      <h2>
        Kit
        <span>
          Turístico.
        </span>
      </h2>

      <p className="eclipse-kit__lead">
        Una propuesta para
        <strong>
          {' '}vivir y disfrutar de manera segura
        </strong>
        {' '}uno de los grandes acontecimientos
        astronómicos de 2027.
      </p>

      <div className="eclipse-kit__rule" />

      <p>
        Incluye una
        <strong> guía de 24 páginas</strong>
        {' '}con información sobre el eclipse,
        su recorrido, horarios, recomendaciones
        para la observación y medidas de
        prevención.
      </p>

      <p>
        La guía está acompañada de
        <strong>
          {' '}gafas para observación solar
          certificadas ISO 12312-2.
        </strong>
      </p>

      <p>
        Ideal para
        <strong>
          {' '}hoteles, municipios, oficinas de
          turismo, comercios y visitantes
        </strong>
        {' '}de las localidades alcanzadas por
        el eclipse.
      </p>

      <Link
        to="/contacto"
        className="eclipse-button eclipse-button--gold eclipse-kit__button"
      >
        Consultar por el kit

        <span>
          →
        </span>
      </Link>

    </div>

  </div>


  {/* PRESENTACIÓN DEL KIT */}

  <div className="eclipse-container">

    <div className="eclipse-kit-package">

      <div className="eclipse-kit-package__image">

        <img
          src="/images/eclipse/kit-presentacion.jpeg"
          alt="Presentación de la guía del eclipse junto a gafas para observación solar"
        />

      </div>

      <div className="eclipse-kit-package__content">

        <span className="eclipse-eyebrow">
          TODO EN UN MISMO KIT
        </span>

        <h3>
          Una guía para comprender.
          <span>
            Gafas para observar.
          </span>
        </h3>

        <p>
          Una propuesta preparada para acompañar
          la experiencia del eclipse desde la
          información y la observación segura.
        </p>

        <div className="eclipse-kit-package__tags">

          <span>
            GUÍA · 24 PÁGINAS
          </span>

          <span>
            GAFAS SOLARES
          </span>

          <span>
            ISO 12312-2
          </span>

        </div>

      </div>

    </div>

  </div>

</section>

     {/* ========================================
    SAFETY
======================================== */}

<section
  className="eclipse-safety"
  id="seguridad"
>
  <div className="eclipse-container">

    <div className="eclipse-safety__heading">

      <div>

        <span className="eclipse-section-number">
          06
        </span>

        <span className="eclipse-eyebrow">
          OBSERVACIÓN SEGURA
        </span>

        <h2>
          Mirar el Sol
          <span>
            requiere protección.
          </span>
        </h2>

      </div>


      <div className="eclipse-safety__intro">

        <strong>
          Mirar el Sol sin la protección adecuada
          puede producir daños graves en la retina.
        </strong>

        <p>
          Durante un eclipse anular nunca existe
          una fase en la que sea seguro mirar
          directamente al Sol sin protección
          específicamente diseñada para la
          observación solar.
        </p>

      </div>

    </div>


    {/* CARDS */}

    <div className="eclipse-safety__grid">

      {safetyItems.map(
        (item) => (

          <article
            className="eclipse-safety-card"
            key={item.number}
          >

            <div className="eclipse-safety-card__top">

              <span>
                {item.number}
              </span>

              <strong>
                +
              </strong>

            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </article>

        )
      )}

    </div>


    {/* ISO */}

    <div className="eclipse-safety-standard">

      <div className="eclipse-safety-standard__number">
        ISO
      </div>

      <div>

        <span className="eclipse-eyebrow">
          PROTECCIÓN CERTIFICADA
        </span>

        <h3>
          Buscá la norma
          <strong> ISO 12312-2</strong>
        </h3>

        <p>
          Para observar directamente el eclipse,
          utilizá gafas o visores solares diseñados
          específicamente para este fin y que
          cumplan con la norma internacional
          ISO 12312-2.
        </p>

      </div>

    </div>


    {/* WARNING */}

    <div className="eclipse-warning">

      <div className="eclipse-warning__symbol">
        !
      </div>

      <div>

        <strong>
          IMPORTANTE · TELESCOPIOS, BINOCULARES Y CÁMARAS
        </strong>

        <p>
          Nunca mires el Sol a través de estos
          instrumentos utilizando solamente gafas
          para eclipses delante de los ojos.
          Los instrumentos ópticos concentran la
          radiación solar y necesitan sus propios
          filtros solares colocados delante del
          objetivo, antes de que la luz ingrese
          al instrumento.
        </p>

      </div>

    </div>


    {/* EDUCATION + ARTICLE */}

    <div className="eclipse-safety-article">

      <div className="eclipse-safety-article__content">

        <span className="eclipse-eyebrow">
          INFORMARSE TAMBIÉN ES PROTEGERSE
        </span>

        <h3>
          La mejor protección
          <span>
            comienza con la información.
          </span>
        </h3>

        <p>
          El eclipse ocurrirá el 6 de febrero de
          2027. Informarnos con anticipación y
          enseñar cómo observarlo correctamente
          permite que este acontecimiento pueda
          disfrutarse de manera segura en escuelas,
          familias y comunidades.
        </p>

      </div>


      <a
        href="https://www.aguadaescondida.com.ar/"
        target="_blank"
        rel="noopener noreferrer"
        className="eclipse-safety-article__link"
      >
        <small>
          NOTA COMPLETA
        </small>

        <span>
          Todo lo que necesitás saber
          sobre la protección ocular
        </span>

        <strong>
          Leer artículo ↗
        </strong>
      </a>

    </div>

  </div>
</section>

        {/* ========================================
            FINAL CTA
        ======================================== */}

        <section className="eclipse-final">

          <div className="eclipse-final__glow" />

          <div className="eclipse-stars" />


          <div className="eclipse-container eclipse-final__content">

            <span className="eclipse-eyebrow">
              06 · 02 · 2027
            </span>


            <h2>
              Cuando la Luna
              <span>
                encuentre al Sol.
              </span>
            </h2>


            <p>
              Un acontecimiento astronómico
              para observar, comprender
              y recordar.
            </p>


            <button
              type="button"
              className="eclipse-button eclipse-button--gold"
              onClick={() =>
                goToSection('inicio')
              }
            >
              Volver al inicio

              <span>
                ↑
              </span>

            </button>

          </div>

        </section>

      </main>



      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="eclipse-footer">

        <div className="eclipse-container eclipse-footer__inner">

          <div>

            <strong>
              Instituto Copérnico
            </strong>

            <span>
              Eclipse Argentina · 2027
            </span>

          </div>


          <div className="eclipse-footer__links">

            <Link to="/">
              Sitio institucional
            </Link>

            <a
              href="https://www.institutocopernico.org/moodle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campus Virtual
            </a>

          </div>


          <small>
            Astronomía · Ciencia · Educación
          </small>

        </div>

      </footer>


    </div>
  )
}


export default EclipsePage