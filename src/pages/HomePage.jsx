import { Link } from 'react-router-dom'

import '../styles/pages/home.css'


const news = [
  {
    id: 1,
    date: '15 JUL 2026',
    title: 'Curso de Astronomía Básica 2026',
    description:
      'Ya se encuentra disponible la inscripción en nuestro Campus Virtual. Un recorrido completo por el Universo.',
    image: '/images/news/curso-astronomia.png',
    link: 'https://www.institutocopernico.org/moodle/',
    external: true,
    action: 'Más información',
  },

  {
    id: 2,
    date: '10 JUL 2026',
    title: 'Efemérides para el año 2026',
    description:
      'Sol, Luna, planetas, eclipses y los principales eventos astronómicos del año.',
    image: '/images/news/efemerides.png',
    link: '/novedades',
    action: 'Ver efemérides',
  },

  {
    id: 3,
    date: '05 JUL 2026',
    title: 'Star Party Valle Grande 2026',
    description:
      'Realizamos con éxito la XXI Star Party Valle Grande.',
    image: '/images/news/star-party.png',
    link: '/novedades',
    action: 'Leer la reseña',
  },

  {
    id: 4,
    date: '01 JUL 2026',
    title: 'Nuestro canal en YouTube',
    description:
      'Charlas, observaciones, entrevistas y contenidos de divulgación.',
    image: '/images/news/youtube.png',
    link: '/novedades',
    action: 'Conocer más',
  },
]

const areas = [
  {
    icon: '✦',
    value: '50+ años',
    description: 'de astronomía al servicio de la sociedad',
  },

  {
    icon: '⌖',
    value: 'Divulgación',
    description: 'Ciencia y astronomía para todos',
  },

  {
    icon: '□',
    value: 'Educación',
    description: 'Formación y capacitación docente',
  },

  {
    icon: '▥',
    value: 'Investigación',
    description: 'Estudio científico del Universo',
  },
]


function HomePage() {
  return (
    <div className="home-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="home-hero">

        <div className="home-hero__stars" />

        <div className="institutional-container home-hero__container">

          <div className="home-hero__content">

            <p className="home-hero__eyebrow">
              ASTRONOMÍA · EDUCACIÓN · INVESTIGACIÓN · DIVULGACIÓN
            </p>

            <h1>
              Exploramos el universo
              <span>desde 1973</span>
            </h1>

            <p className="home-hero__description">
              El Instituto Copérnico es una entidad científica y
              educativa dedicada a la astronomía y ciencias afines,
              acercando el conocimiento del Universo a estudiantes,
              aficionados y público general.
            </p>

            <div className="home-hero__actions">

              <Link
                to="/quienes-somos"
                className="btn btn--primary"
              >
                Conocer el Instituto

                <span>
                  →
                </span>
              </Link>

              <Link
                to="/novedades"
                className="btn btn--light-outline"
              >
                Ver novedades

                <span>
                  →
                </span>
              </Link>

            </div>

          </div>


          <div className="home-hero__quote">

            <p>
              Un cielo más cercano
              <br />
              para más personas
            </p>

          </div>


          <div className="home-hero__location">

            <span>
              Observatorio Astronómico
            </span>

            <small>
              Instituto Copérnico
            </small>

          </div>

        </div>

      </section>



      {/* ========================================
          ÁREAS / STATS
      ======================================== */}

      <section className="home-areas">

        <div className="institutional-container home-areas__grid">

          {areas.map((area) => (

            <article
              key={area.value}
              className="home-area"
            >

              <div className="home-area__icon">
                {area.icon}
              </div>

              <div>

                <h2>
                  {area.value}
                </h2>

                <p>
                  {area.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>



      {/* ========================================
          NOVEDADES
      ======================================== */}

      <section className="home-news institutional-section">

        <div className="institutional-container">

          <div className="home-section-header">

            <div>

              <span className="section-eyebrow">
                ACTUALIDAD
              </span>

              <h2 className="home-section-title">
                Novedades
              </h2>

            </div>


            <Link
              to="/novedades"
              className="arrow-link"
            >
              Ver todas las novedades
              <span>→</span>
            </Link>

          </div>


          <div className="home-news__grid">

            {news.map((item) => (

              <article
                key={item.id}
                className="home-news-card"
              >

                <div
                  className="home-news-card__image"
                  style={{
                    backgroundImage:
                      `linear-gradient(
                        180deg,
                        transparent 50%,
                        rgba(4, 17, 29, .15)
                      ),
                      url("${item.image}")`
                  }}
                />


                <div className="home-news-card__content">

                  <span className="home-news-card__date">
                    {item.date}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>


                  {
                    item.external ? (

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="arrow-link"
                      >
                        {item.action}
                        <span>→</span>
                      </a>

                    ) : (

                      <Link
                        to={item.link}
                        className="arrow-link"
                      >
                        {item.action}
                        <span>→</span>
                      </Link>

                    )
                  }

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* ========================================
          GRANDES ÁREAS
      ======================================== */}

      <section className="home-services">

        <div className="institutional-container home-services__grid">


          {/* CAMPUS */}

          <article className="home-service home-service--campus">

            <div className="home-service__overlay" />

            <div className="home-service__content">

              <span className="home-service__icon">
                ◇
              </span>

              <h2>
                Campus Virtual
              </h2>

              <p>
                Cursos, materiales y actividades de formación
                disponibles en nuestra plataforma educativa.
              </p>

              <a
                href="https://www.institutocopernico.org/moodle/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-service__button"
              >
                Ingresar al Campus
                <span>→</span>
              </a>

            </div>

          </article>



          {/* DIVULGACIÓN */}

          <article className="home-service home-service--divulgacion">

            <div className="home-service__overlay" />

            <div className="home-service__content">

              <span className="home-service__icon">
                ✦
              </span>

              <h2>
                Divulgación
              </h2>

              <p>
                Charlas, observaciones, actividades educativas
                y experiencias para acercar la astronomía
                a toda la comunidad.
              </p>

              <Link
                to="/divulgacion"
                className="home-service__button"
              >
                Explorar divulgación
                <span>→</span>
              </Link>

            </div>

          </article>



          {/* INVESTIGACIÓN */}

          <article className="home-service home-service--investigacion">

            <div className="home-service__overlay" />

            <div className="home-service__content">

              <span className="home-service__icon">
                ◫
              </span>

              <h2>
                Investigación
              </h2>

              <p>
                Estrellas variables, altas energías y proyectos
                destinados a ampliar nuestro conocimiento
                del Universo.
              </p>

              <Link
                to="/investigacion"
                className="home-service__button"
              >
                Conocer nuestras líneas
                <span>→</span>
              </Link>

            </div>

          </article>

        </div>

      </section>



      {/* ========================================
          ECLIPSE CTA
      ======================================== */}

      <section className="home-eclipse">

        <div className="institutional-container">

          <div className="home-eclipse__card">

            <div className="home-eclipse__stars" />


            <div className="home-eclipse__visual">

              <div className="home-eclipse__sun">
                <div className="home-eclipse__moon" />
              </div>

            </div>


            <div className="home-eclipse__content">

              <span>
                EVENTO ASTRONÓMICO · 2027
              </span>

              <h2>
                Eclipse anular de Sol
              </h2>

              <p>
                El 6 de febrero de 2027 Argentina será
                protagonista de un fenómeno único.
                Información, mapas, observación segura y
                la guía completa del eclipse.
              </p>

            </div>


            <div className="home-eclipse__action">

              <Link
                to="/eclipse-2027"
                className="btn btn--primary"
              >
                Ver sitio especial
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default HomePage