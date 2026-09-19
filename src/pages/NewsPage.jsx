import { Link } from 'react-router-dom'

import { news } from '../data/news'

import '../styles/pages/news.css'


function NewsPage() {

  const featuredNews =
    news.find((item) => item.featured)

  const otherNews =
    news.filter((item) => !item.featured)


  return (
    <div className="news-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="news-hero">

        <div className="news-hero__stars" />

        <div className="institutional-container news-hero__container">

          <div>

            <span className="section-eyebrow">
              ACTUALIDAD
            </span>

            <h1>
              Novedades
              <span>del Instituto.</span>
            </h1>

            <p>
              Noticias, actividades, cursos, encuentros
              y acontecimientos de nuestra comunidad
              astronómica.
            </p>

          </div>


          <div className="news-hero__decoration">

            <span>
              ✦
            </span>

            <small>
              ASTRONOMÍA
              <br />
              CIENCIA
              <br />
              COMUNIDAD
            </small>

          </div>

        </div>

      </section>



      {/* ========================================
          NOTICIA DESTACADA
      ======================================== */}

      {featuredNews && (

        <section className="news-featured">

          <div className="institutional-container">

            <article className="news-featured__card">

              <div
                className="news-featured__image"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      90deg,
                      rgba(5, 18, 30, 0.12),
                      rgba(5, 18, 30, 0.5)
                    ),
                    url("${featuredNews.image}")
                  `
                }}
              />


              <div className="news-featured__content">

                <span className="news-featured__label">
                  DESTACADO
                </span>

                <div className="news-featured__meta">

                  <span>
                    {featuredNews.category}
                  </span>

                  <i />

                  <span>
                    {featuredNews.date}
                  </span>

                </div>

                <h2>
                  {featuredNews.title}
                </h2>

                <p>
                  {featuredNews.description}
                </p>


                {featuredNews.external ? (

                  <a
                    href={featuredNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    Leer la noticia

                    <span>
                      ↗
                    </span>
                  </a>

                ) : (

                  <Link
                    to={featuredNews.link}
                    className="btn btn--primary"
                  >
                    Leer la noticia

                    <span>
                      →
                    </span>
                  </Link>

                )}

              </div>

            </article>

          </div>

        </section>

      )}



      {/* ========================================
          TODAS LAS NOTICIAS
      ======================================== */}

      <section className="news-list institutional-section">

        <div className="institutional-container">

          <div className="news-section-header">

            <div>

              <span className="section-eyebrow">
                ÚLTIMAS PUBLICACIONES
              </span>

              <h2>
                Más novedades
              </h2>

            </div>


            <p>
              Actividades, formación, investigación
              y acontecimientos del Instituto Copérnico.
            </p>

          </div>



          <div className="news-grid">

            {otherNews.map((item) => (

              <article
                key={item.id}
                className="news-card"
              >

                <div
                  className="news-card__image"
                  style={{
                    backgroundImage:
                      `url("${item.image}")`
                  }}
                >

                  <span className="news-card__category">
                    {item.category}
                  </span>

                </div>


                <div className="news-card__body">

                  <span className="news-card__date">
                    {item.date}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>


                  {item.external ? (

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link"
                    >
                      Leer más
                      <span>→</span>
                    </a>

                  ) : (

                    <Link
                      to={item.link}
                      className="arrow-link"
                    >
                      Leer más
                      <span>→</span>
                    </Link>

                  )}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* ========================================
          CAMPUS
      ======================================== */}

      <section className="news-campus">

        <div className="institutional-container news-campus__grid">

          <div className="news-campus__visual">

            <div className="news-campus__orbit news-campus__orbit--one" />

            <div className="news-campus__orbit news-campus__orbit--two" />

            <span className="news-campus__planet">
              ●
            </span>

          </div>


          <div className="news-campus__content">

            <span>
              FORMACIÓN ONLINE
            </span>

            <h2>
              Seguí aprendiendo en nuestro Campus Virtual.
            </h2>

            <p>
              Cursos y materiales de astronomía disponibles
              para aprender desde cualquier lugar.
            </p>

            <a
              href="https://www.institutocopernico.org/moodle/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Ir al Campus Virtual

              <span>
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}


export default NewsPage