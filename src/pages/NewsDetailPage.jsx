import { Link, useParams } from 'react-router-dom'

import { newsDetails } from '../data/newsDetails'

import '../styles/pages/news-detail.css'

function ImageGallery({ images }) {
  if (!images?.length) {
    return null
  }

  return (
    <div
      className={`article-gallery ${
        images.length === 1
          ? 'article-gallery--single'
          : ''
      }`}
    >
      {images.map((item, index) => (
        <figure
          key={`${item.image}-${index}`}
          className={
            item.wide
              ? 'article-gallery__item article-gallery__item--wide'
              : 'article-gallery__item'
          }
        >
          <img
            src={item.image}
            alt={item.alt}
          />

          <figcaption>
            {item.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}


function NewsDetailPage() {

  const { slug } = useParams()
console.log('SLUG:', slug)
console.log('NEWS DETAILS:', newsDetails)
console.log('ARTICLE:', newsDetails[slug])
  const article =
    newsDetails[slug]


  if (!article) {

    return (
      <section className="article-not-found">

        <div className="institutional-container">

          <span className="section-eyebrow">
            NOVEDADES
          </span>

          <h1>
            Noticia no encontrada
          </h1>

          <Link
            to="/novedades"
            className="btn btn--primary"
          >
            Volver a novedades
          </Link>

        </div>

      </section>
    )
  }


  return (
    <article className="news-detail">


      {/* ========================================
          HERO
      ======================================== */}

      <header
        className="news-detail__hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 15, 27, .92) 0%,
              rgba(3, 15, 27, .68) 45%,
              rgba(3, 15, 27, .20) 100%
            ),
            url("${article.heroImage}")
          `
        }}
      >

        <div className="institutional-container">

          <Link
            to="/novedades"
            className="news-detail__back"
          >
            ← Volver a novedades
          </Link>


          <div className="news-detail__hero-content">

            <div className="news-detail__meta">

              <span>
                {article.category}
              </span>

              <i />

              <span>
                {article.date}
              </span>

            </div>


            <h1>
              {article.title}

              <span>
                {article.subtitle}
              </span>
            </h1>


            <p className="news-detail__location">
              {article.location}
            </p>

          </div>

        </div>

      </header>



      {/* ========================================
          INTRO
      ======================================== */}

      <section className="news-detail__intro">

        <div className="institutional-container news-detail__intro-grid">

          <span className="news-detail__number">
            21
          </span>


          <div>

            <span className="section-eyebrow">
              RESEÑA GENERAL
            </span>

            <p>
              {article.intro}
            </p>

          </div>

        </div>

      </section>



      {/* ========================================
          HIGHLIGHTS
      ======================================== */}

      <section className="news-detail__highlights">

        <div className="institutional-container">

          <div className="news-detail__highlights-header">

            <span className="section-eyebrow">
              LA EXPERIENCIA
            </span>

            <h2>
              Cuatro días mirando
              <span>hacia arriba.</span>
            </h2>

          </div>


          <div className="news-detail__highlights-grid">

            {article.highlights.map(
              (highlight, index) => (

                <div
                  key={highlight}
                  className="news-detail__highlight"
                >

                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p>
                    {highlight}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>

<section className="news-detail__opening-gallery">

  <div className="institutional-container">

    <div className="news-detail__gallery-heading">

      <span className="section-eyebrow">
        BAJO EL CIELO DE MALARGÜE
      </span>

      <h2>
        La noche fue también protagonista.
      </h2>

    </div>


    <ImageGallery
      images={article.openingGallery}
    />

  </div>

</section>

      {/* ========================================
          DÍAS
      ======================================== */}

      <section className="news-detail__timeline">

        <div className="institutional-container">

          <div className="news-detail__timeline-heading">

            <span className="section-eyebrow">
              CRÓNICA DEL ENCUENTRO
            </span>

            <h2>
              Día a día.
            </h2>

          </div>


      {article.days.map((day, index) => (

  <section
    className="news-detail__day"
    key={day.date}
  >

    <div className="news-detail__day-heading">

      <span>
        {day.day}
      </span>

      <strong>
        {day.date}
      </strong>

    </div>


    <div className="news-detail__day-body">

      <div className="news-detail__day-copy">

        <span>
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3>
          {day.title}
        </h3>


        {day.paragraphs.map((paragraph) => (

          <p key={paragraph}>
            {paragraph}
          </p>

        ))}

      </div>


      <ImageGallery
        images={day.images}
      />

    </div>

  </section>

))}

        </div>

      </section>



      {/* ========================================
          CIERRE
      ======================================== */}

      <section className="news-detail__closing">

        <div className="institutional-container news-detail__closing-grid">

          <div>

            <span className="section-eyebrow">
              CIERRE
            </span>

            <h2>
              {article.closing.title}
            </h2>

          </div>


          <div>

            {article.closing.paragraphs.map(
              (paragraph) => (

                <p key={paragraph}>
                  {paragraph}
                </p>

              )
            )}

          </div>

        </div>

      </section>



      {/* ========================================
          AGRADECIMIENTOS
      ======================================== */}

      <section className="news-detail__thanks">

        <div className="institutional-container">

          <span className="section-eyebrow">
            AGRADECIMIENTOS
          </span>

          <h2>
            Gracias a quienes
            hicieron posible la experiencia.
          </h2>


          <div className="news-detail__thanks-grid">

            {article.thanks?.map(
              (person) => (

                <span key={person}>
                  {person}
                </span>

              )
            )}

          </div>

        </div>

      </section>



      {/* ========================================
          2027
      ======================================== */}

      <section className="news-detail__next">

        <div className="news-detail__next-stars" />


        <div className="institutional-container news-detail__next-grid">

          <div>

            <span>
              {article.nextEvent.eyebrow}
            </span>

            <h2>
              {article.nextEvent.title}
            </h2>

          </div>


          <strong>
            {article.nextEvent.date}
          </strong>

        </div>

      </section>


    </article>
  )
}


export default NewsDetailPage