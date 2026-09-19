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
    title: 'Usá protección solar',
    text:
      'Utilizá gafas para eclipses o visores solares diseñados específicamente para la observación directa del Sol.',
  },
  {
    number: '02',
    title: 'No sirven anteojos comunes',
    text:
      'Los anteojos de sol, incluso los muy oscuros, no brindan la protección necesaria para observar el Sol.',
  },
  {
    number: '03',
    title: 'Protegé cámaras y telescopios',
    text:
      'Todo instrumento óptico necesita un filtro solar adecuado colocado delante de la apertura.',
  },
  {
    number: '04',
    title: 'No retires la protección',
    text:
      'En un eclipse anular nunca existe una fase de totalidad: siempre queda parte del Sol visible.',
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
                  04
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


              <p>
                La observación solar debe hacerse
                siempre con equipamiento diseñado
                específicamente para filtrar la
                radiación del Sol.
              </p>

            </div>


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


            <div className="eclipse-warning">

              <div className="eclipse-warning__symbol">

                !

              </div>


              <div>

                <strong>
                  IMPORTANTE
                </strong>

                <p>
                  Nunca mires directamente al Sol
                  a través de binoculares, cámaras
                  o telescopios sin un filtro solar
                  adecuado colocado en la parte
                  frontal del instrumento.
                </p>

              </div>

            </div>

          </div>

        </section>



        {/* ========================================
            CURIOSITIES
        ======================================== */}

        <section className="eclipse-curiosities">

          <div className="eclipse-container eclipse-curiosities__grid">

            <div className="eclipse-curiosities__title">

              <span className="eclipse-eyebrow">
                UNA CUESTIÓN DE PERSPECTIVA
              </span>

              <h2>
                La Luna no cambia
                <span>
                  de tamaño.
                </span>
              </h2>

            </div>


            <div className="eclipse-curiosities__copy">

              <p>
                La órbita lunar no es un círculo
                perfecto. La distancia entre la
                Tierra y la Luna varía.
              </p>

              <p>
                Cuando el eclipse ocurre con la
                Luna relativamente alejada, su
                tamaño aparente es demasiado
                pequeño para cubrir completamente
                al Sol.
              </p>


              <div className="eclipse-curiosities__formula">

                <span>
                  DISTANCIA
                </span>

                <strong>
                  +
                </strong>

                <span>
                  PERSPECTIVA
                </span>

                <strong>
                  =
                </strong>

                <span>
                  ANULARIDAD
                </span>

              </div>

            </div>

          </div>

        </section>



        {/* ========================================
            INSTITUTE
        ======================================== */}

        <section className="eclipse-institute">

          <div className="eclipse-container eclipse-institute__grid">

            <div className="eclipse-institute__symbol">

              <div className="eclipse-institute__orbit">

                <span />

              </div>

            </div>


            <div className="eclipse-institute__content">

              <span className="eclipse-eyebrow">
                INSTITUTO COPÉRNICO
              </span>


              <h2>
                Más de medio siglo
                <span>
                  mirando el cielo.
                </span>
              </h2>


              <p>
                Astronomía, educación,
                investigación y divulgación
                científica desde 1973.
              </p>


              <Link
                to="/"
                className="eclipse-button eclipse-button--ghost-light"
              >
                Conocer el Instituto

                <span>
                  →
                </span>
              </Link>

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